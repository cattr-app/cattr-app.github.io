document.addEventListener('DOMContentLoaded', () => {

  const cookieBar = document.getElementsByClassName('cookie_bar')[0];

  const hideCookieBanner = () => {

    cookieBar.style.display = 'none';
    window.localStorage.cookie = true;

  };

  // Show cookie banner if localStorage flag is not set
  if (!('cookie' in window.localStorage)) {

    cookieBar.style.display = 'flex';
    document.getElementById('cookie_button').addEventListener('click', hideCookieBanner);

  }

});
