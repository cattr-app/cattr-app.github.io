/**
 * Links to binaries on distribution server
 * @type {Object}
 */
const downloadPaths = {

  mac: 'https://dl.cattr.app/desktop/2.3.1/cattr-2.3.1.dmg',
  win: 'https://dl.cattr.app/desktop/2.3.1/cattr-2.3.1.exe',
  linux: 'https://dl.cattr.app/desktop/2.3.1/cattr-2.3.1.AppImage'

};

/**
 * Abbriviation to full OS name map
 * @type {Object}
 */
const abbriviationMap = {

  mac: 'macOS',
  win: 'Windows<sup><b class="red">∗</b></sup>',
  linux: 'Linux'

};

/**
 * Returns current platform
 * You shouldn't really rely on this function
 * @returns {String} Detected platform (mac, linux, win, ios, android, unknown)
 */
const getPlatform = () => {

  const ua = navigator.userAgent.toLowerCase();

  if (ua.indexOf('mac') > -1)
    return 'mac';

  if (ua.indexOf('android') > -1)
    return 'android';

  if (ua.indexOf('linux') > -1 || ua.indexOf('x11') > -1)
    return 'linux';

  if (ua.indexOf('windows') > -1)
    return 'win';

  if (ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || ua.indexOf('ipod') > -1)
    return 'ios';

  return 'unknown';

};

window.addEventListener('load', () => {

  const dlButtonsContainer = document.getElementById('dl-buttons-container');
  if (!dlButtonsContainer)
    return;

  const currentPlatform = getPlatform();
  const platforms = new Set(['mac', 'win', 'linux']);
  const buttonsOrder = new Set();

  // If this is not supported desktop platform, show buttons equally
  if (![ 'win', 'linux', 'mac' ].includes(currentPlatform)) {

    buttonsOrder.add('mac', 'linux', 'win');

  } else {

    buttonsOrder.add(currentPlatform);
    platforms.forEach(el => buttonsOrder.add(el));

  }

  // Render buttons
  let renderedButtons = '';
  let firstPlatformTaken = false;
  buttonsOrder.forEach((platform) => {

    if (!firstPlatformTaken) {

      renderedButtons = `<a href="${downloadPaths[platform]}" class="btn btn-primary download-link" data-type="${platform}">Download for ${abbriviationMap[platform]}</a>&nbsp;`;
      firstPlatformTaken = true;
      return;

    }

    renderedButtons += `<a href="${downloadPaths[platform]}" class="btn btn-secondary download-link" data-type="${platform}">${abbriviationMap[platform]}</a>&nbsp;`;

  });

  dlButtonsContainer.innerHTML = renderedButtons;

});
