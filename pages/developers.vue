<template>
  <div>
    <Navbar />
    <main>
      <section aria-labelledby="developers-heading" class="container">
        <h1 id="developers-heading">{{ $t('Developers') }}</h1>
        <p class="text">{{ $t('Learn to use, integrate and extend Cattr.') }}</p>

        <nav aria-label="Cattr documentation">
          <div class="row">
            <article class="col-md-6 mb-4">
              <h2><a href="https://cattr.app/manual/">{{ $t('User Guide') }}</a></h2>
              <p>{{ $t('Installation, configuration and usage.') }}</p>
            </article>
            <article class="col-md-6 mb-4">
              <h2><a href="https://docs.cattr.app/api/">{{ $t('API Reference') }}</a></h2>
              <p>{{ $t('API endpoints, authentication and integrations.') }}</p>
            </article>
            <article class="col-md-6 mb-4">
              <h2><a href="https://docs.cattr.app/backend/">{{ $t('Backend Development') }}</a></h2>
              <p>{{ $t('Server architecture and modules.') }}</p>
            </article>
            <article class="col-md-6 mb-4">
              <h2><a href="https://docs.cattr.app/frontend/">{{ $t('Frontend Development') }}</a></h2>
              <p>{{ $t('Frontend architecture and extensions.') }}</p>
            </article>
          </div>
        </nav>

        <h2>Source code</h2>
        <ul>
          <li><a href="https://github.com/cattr-app/server-application">Server application</a></li>
          <li><a href="https://github.com/cattr-app/desktop-application">Desktop application</a></li>
          <li><a href="https://github.com/orgs/cattr-app/discussions">Community discussions</a></li>
        </ul>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default Vue.extend({
  components: {
    Navbar,
    Footer
  },
  layout: 'landing',
  head () {
    return {
      title: 'Cattr — Developers'
    }
  }
})
</script>
