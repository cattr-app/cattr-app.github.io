import domI18n from 'dom-i18n/dist/dom-i18n.min.js';

const i18n = domI18n({
  selector: '[data-translatable]',
  separator: ' // ',
  languages: ['en', 'ru'],
  translatableAttr: 'title',
  defaultLanguage: 'en'
});

const getLangCookie = () => {
  const v = document.cookie.match('(^|;) ?lang=([^;]*)(;|$)');
  return v ? v[2] : null;
};

// Set root domain cookie, ex: *.cattr.app
const setLangCookie = (lang) => {
  const rootDomain = location.hostname.split('.').reverse().splice(0,2).reverse().join('.');
  document.cookie = `lang=${lang}; domain=${rootDomain}`;
};

// Get the browser language
const getUserLang = () => {
  const userLang = navigator.language;

  if (userLang.includes('ru'))
    return 'ru';

  if (userLang.includes('en'))
    return 'en';

  // Fallback language
  return 'en';
};

// Set current language
const userLang = getLangCookie() || getUserLang();

i18n.changeLanguage(userLang);

// Change language on button click
for (const button of document.querySelectorAll('.language-switch-item')) {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const selectedLang = e.target.dataset.language;

    i18n.changeLanguage(selectedLang);
    setLangCookie(selectedLang)
  })
}
