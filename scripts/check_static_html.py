#!/usr/bin/env python3
"""Validate GitHub Pages output without running JavaScript or a browser."""

from html.parser import HTMLParser
from pathlib import Path
import struct
import xml.etree.ElementTree as ET


DOC_URLS = {
    "https://cattr.app/manual/",
    "https://docs.cattr.app/api/",
    "https://docs.cattr.app/backend/",
    "https://docs.cattr.app/frontend/",
}


class HTMLContent(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = set()
        self.meta = {}
        self.text = []
        self.ignored = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.ignored += 1
        if tag == "meta":
            attributes = dict(attrs)
            if "property" in attributes:
                self.meta[attributes["property"]] = attributes.get("content")
        if tag == "a":
            self.links.update(value for name, value in attrs if name == "href" and value)

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self.ignored:
            self.ignored -= 1

    def handle_data(self, data):
        if not self.ignored:
            self.text.append(data)


def check_page(path, required_text):
    html = Path(path).read_text(encoding="utf-8")
    page = HTMLContent()
    page.feed(html)
    visible = " ".join(" ".join(page.text).split())

    if required_text not in visible:
        raise SystemExit(f"{path}: missing prerendered visible text {required_text!r}")
    missing = DOC_URLS - page.links
    if missing:
        raise SystemExit(f"{path}: missing HTML documentation links: {sorted(missing)}")
    if not any(link.rstrip("/").endswith("/developers") for link in page.links):
        raise SystemExit(f"{path}: missing internal Developers link")
    print(f"OK: {path} contains content and documentation anchors")
    return page


def main():
    index = check_page("dist/index.html", "What is Cattr?")
    expected_og = {
        "og:image": "https://cattr.app/og-image.png",
        "og:image:secure_url": "https://cattr.app/og-image.png",
        "og:image:type": "image/png",
        "og:image:width": "1200",
        "og:image:height": "630",
    }
    for key, value in expected_og.items():
        if index.meta.get(key) != value:
            raise SystemExit(f"dist/index.html: invalid {key}: {index.meta.get(key)!r}")
    print("OK: Open Graph image metadata")
    check_page("dist/developers/index.html", "Source code")

    for filename in ("robots.txt", "sitemap.xml", "llms.txt"):
        path = Path("dist") / filename
        if not path.is_file() or not path.read_text(encoding="utf-8").strip():
            raise SystemExit(f"Missing or empty static file: {path}")
        print(f"OK: {path}")

    logo = Path("dist/logo.svg")
    image = Path("dist/og-image.png")
    if not logo.is_file():
        raise SystemExit(f"Missing static logo: {logo}")
    ET.parse(logo)
    if not image.is_file():
        raise SystemExit(f"Missing Open Graph image: {image}")
    png = image.read_bytes()
    if not png.startswith(b"\x89PNG\r\n\x1a\n") or len(png) < 24:
        raise SystemExit(f"Invalid PNG image: {image}")
    if struct.unpack(">II", png[16:24]) != (1200, 630):
        raise SystemExit(f"Unexpected Open Graph image dimensions: {image}")
    print("OK: static SVG logo and 1200x630 PNG image")

    ET.parse("dist/sitemap.xml")
    print("OK: sitemap XML is valid")


if __name__ == "__main__":
    main()
