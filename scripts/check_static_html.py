#!/usr/bin/env python3
"""Validate GitHub Pages output without running JavaScript or a browser."""

from html.parser import HTMLParser
from pathlib import Path
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
        self.text = []
        self.ignored = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.ignored += 1
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


def main():
    check_page("dist/index.html", "What is Cattr?")
    check_page("dist/developers/index.html", "Source code")

    for filename in ("robots.txt", "sitemap.xml", "llms.txt"):
        path = Path("dist") / filename
        if not path.is_file() or not path.read_text(encoding="utf-8").strip():
            raise SystemExit(f"Missing or empty static file: {path}")
        print(f"OK: {path}")

    ET.parse("dist/sitemap.xml")
    print("OK: sitemap XML is valid")


if __name__ == "__main__":
    main()
