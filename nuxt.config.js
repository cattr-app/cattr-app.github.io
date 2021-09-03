export default {

  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'cattr-landing-page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'Manage your time with ease. Open source time tracking application' },

      // Open Graph Protocol
      { name: 'og:title', content: 'Cattr' },
      { name: 'og:site_name', content: 'Cattr' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://cattr.app' },
      { name: 'og:description', content: 'Manage your time with ease. Open source time tracking application' },
      { name: 'og:image', content: 'https://cattr.app/resources/logo.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/embed/js/google-tag-manager.js' },
      { src: '/embed/js/rocketchat.js' },
      {
        type: 'application/ld+json',
        json: [
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'https://amazingcat.net',
            logo: 'https://amazingcat.net/images/logo.png'
          }, {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [{
              '@type': 'ListItem',
              position: 1,
              name: 'Cattr'
            }]
          }, {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            description: 'Free self-hosted open-source time tracking application',
            operatingSystem: 'win | Mac | Linux',
            offers: {
              '@type': 'Offer',
              price: 0,
              priceCurrency: 'USD'
            },
            applicationCategory: 'tracker',
            applicationSubCategory: 'time tracking',
            downloadUrl: 'https://cattr.app/desktop/',
            datePublished: '2020-03-20',
            image: 'https://cattr.app/resources/logo.svg',
            author: {
              '@type': 'Organization',
              url: 'https://amazingcat.net',
              logo: 'https://amazingcat.net/images/logo.png'
            },
            installUrl: 'https://docs.cattr.app/#/en/getting-started/',
            fileSize: '210MB'
          }, {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            description: 'Free self-hosted open-source time tracking application',
            operatingSystem: 'Linux',
            offers: {
              '@type': 'Offer',
              price: 0,
              priceCurrency: 'USD'
            },
            applicationCategory: 'tracker',
            applicationSubCategory: 'time tracking',
            downloadUrl: 'https://github.com/cattr-app',
            datePublished: '2020-03-20',
            image: 'https://cattr.app/resources/logo.svg',
            author: {
              '@type': 'Organization',
              url: 'https://amazingcat.net',
              logo: 'https://amazingcat.net/images/logo.png'
            },
            installUrl: 'https://docs.cattr.app/#/en/getting-started/'
          }, {
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            author: {
              '@type': 'Organization',
              url: 'https://amazingcat.net',
              logo: 'https://amazingcat.net/images/logo.png'
            },
            datePublished: '2020-03-20',
            codeRepository: 'https://github.com/cattr-app/backend-application',
            codeSampleType: 'full',
            programmingLanguage: 'PHP'
          }, {
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            author: {
              '@type': 'Organization',
              url: 'https://amazingcat.net',
              logo: 'https://amazingcat.net/images/logo.png'
            },
            datePublished: '2020-03-20',
            codeRepository: 'https://github.com/cattr-app/frontend-application',
            codeSampleType: 'full',
            programmingLanguage: 'JavaScript'
          }, {
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            author: {
              '@type': 'Organization',
              url: 'https://amazingcat.net',
              logo: 'https://amazingcat.net/images/logo.png'
            },
            datePublished: '2020-03-20',
            codeRepository: 'https://github.com/cattr-app/desktop-application',
            codeSampleType: 'full',
            programmingLanguage: 'JavaScript'
          }]
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'bootstrap',
    '~assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-loading-skeleton.ts'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  i18n: {
    defaultLocale: 'en',
    langDir: '~locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-us.json', name: 'English' },
      { code: 'ru', iso: 'ru-RU', file: 'ru-ru.json', name: 'Русский' },
      { code: 'dk', iso: 'da-DK', file: 'da-dk.json', name: 'Dansk' }
    ],
    vueI18n: {
      fallbackLocale: 'en'
    },
    strategy: 'no_prefix',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    }
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'licenses',
        path: '/licenses',
        component: 'pages/licenses/index.vue',
        alias: '/license'
      })
    }
  }

}
