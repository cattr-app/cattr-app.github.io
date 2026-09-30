<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-4 align-self-start">
          <div class="logo-plus-title">
            <nuxt-link to="/" class="no-decoration">
              <img src="~assets/images/logo.svg" alt="Cattr logotype with a cat inside of clock face" class="logotype">
              <h3 class="software-title margin">
                Cattr
              </h3>
            </nuxt-link>
          </div>
        </div>
        <div class="col align-self-end">
          <span class="menu">
            <div class="dropdown open">
              <a
                id="languageDropdown"
                href="#"
                class="menu-item dropdown-toggle"
                data-toggle="dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="true"
              >{{ currentLocaleName }}</a>
              <div class="dropdown-menu open" aria-labelledby="languageDropdown">
                <li
                  v-for="[localeCode, localeName] in availableLocales"
                  :key="localeCode"
                  class="dropdown-item"
                  href="#"
                >
                  <a href="#" class="no-decoration" @click.prevent.stop="changeLocale(localeCode)">{{ localeName }}</a>
                </li>
              </div>
            </div>
            <nuxt-link class="menu-item documentation-forinvestors" to="/forinvestors/">
              {{ $t('For investors') }}
            </nuxt-link>
            <nuxt-link class="menu-item documentation-services" to="/desktop/">
              {{ $t('Downloads') }}
            </nuxt-link>
            <a href="https://docs.cattr.app" target="_blank" rel="noopener" class="menu-item documentation-link">
              {{ $t('Documentation') }}
            </a>
            <a href="https://github.com/orgs/cattr-app/discussions" target="_blank" rel="noopener" class="menu-item forum-link">
              {{ $t('Community') }}
            </a>
            <a href="https://demo.cattr.app" target="_blank" rel="noopener" class="menu-item demo-link">
              {{ $t('Demo') }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import Vue from 'vue'
import type {LocaleObject} from 'nuxt-i18n'

export default Vue.extend({
  data () {
    return {
      currentLocaleName: ''
    }
  },
  computed: {

    /**
     * Return list of available locales
     */
    availableLocales (): Map<string, string> {
      // Get all available locales
      let locales = (this.$i18n.locales as LocaleObject[]).map((locale) : [string, string] => [locale.code || '', locale.name || ''])

      // Fix possible issues due to weird type of locales[] in nuxt-i18n
      locales = locales.filter(([code, name]) => (code.length > 0 && name.length > 0))

      // Return available locales as Map, where key is locale code, and value is locale name
      return new Map(locales)
    }

  },
  mounted () {
    // Update locale on page init
    this.currentLocaleName = this.availableLocales.get(this.$i18n.locale) || 'Unknown'
  },
  methods: {
    changeLocale (localeCode: string) {
      this.$i18n.setLocale(localeCode)
      this.currentLocaleName = this.availableLocales.get(localeCode) || 'Unknown'
    }
  }
})
</script>
