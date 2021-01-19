document.addEventListener('DOMContentLoaded', async () => {

  if (!window.cattrDownloadsEnabled)
    return;

  /**
   * Human-readable map for distribution types
   * @type {Map.<string, string>}
   */
  const DISTRIBUTION_TYPES = new Map([
    ['dmg', 'DMG Package'],
    ['mas', 'macOS App Store'],
    ['msi', 'Installer'],
    ['exe', 'Portable'],
    ['mss', 'Microsoft Store'],
    ['appimage', 'AppImage'],
    ['deb', 'Deb package'],
    ['apt', 'APT repository'],
    ['tgz', 'Tarball'],
  ]);

  /**
   * Human-readable architecture for each platform
   * @type {Map.<string, string>}
   */
  const PLATFORM_ARCH = new Map([
    ['mac', 'intel'],
    ['windows', 'x64'],
    ['linux', 'amd64'],
  ]);

  /**
   * Fetch an artifacts manifest
   * @async
   * @param {String} platform Application platform (linux, mac, windows)
   * @returns {Promise.<Error|Object>}
   */
  const fetchManifest = async platform => {

    if (typeof platform === 'undefined' || !['linux', 'mac', 'windows'].includes(platform))
      return null;

    try {

      const req = await fetch(`https://dl.cattr.app/manifests/release-${platform}.json`);
      const data = await req.json();

      if (!data || typeof data.platform === 'undefined' || typeof data.version === 'undefined' || typeof data.artifacts === 'undefined')
        return null;

      return data;

    } catch (error) {

      return null;

    }

  };

  const handleManifest = async (platform, manifest) => {

    if (typeof platform === 'undefined' || !['linux', 'mac', 'windows'].includes(platform))
      return null;

    if (manifest === null)
      return null;

    const versionBadge = document.getElementById(`dl-${platform}-version`);
    const defaultLink = document.getElementById(`dl-${platform}-default`);
    const artifactsBlock = document.getElementById(`dl-${platform}-artifacts`);

    // Hide default noscript links
    defaultLink.style.display = 'none';

    // Set version label
    versionBadge.innerHTML = `${manifest.version} ${PLATFORM_ARCH.get(platform)}`;

    // Build artifact download links
    const artifacts = manifest.artifacts

      // Build a <a> tag from each artifact
      .map(artifact => `<a class="download-link" href="${artifact.link}"><b>${DISTRIBUTION_TYPES.get(artifact.format)}</b></a><br><br>`)

      // Join them into single string
      .join('');

    // Append DOM content
    artifactsBlock.innerHTML = artifacts;
    return true;

  };

  handleManifest('linux', await fetchManifest('linux'));
  handleManifest('mac', await fetchManifest('mac'));
  handleManifest('windows', await fetchManifest('windows'));

});
