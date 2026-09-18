<template>
<div>
  <Navbar/>
  <main>
    <section id="section-hero" class="container">
      <div class="row align-items-center">
        <div class="col-md-12 col-sm-12">
          <h1>{{ $t('Downloads') }}</h1>
          <br>
          <br>
          <div class="row">
            <div class="col-md-3">
              <h4>
                macOS
                <span v-if="releaseStrings.mac !== ''" aria-hidden="true" class="badge bg-primary badge-version">
                    {{ releaseStrings.mac }}
                  </span>
                <PuSkeleton v-else width="42px" height="18px"/>
              </h4>
              <br>
              <span v-if="distributionTypes.mac.length > 0">
                  <span v-for="(distribution, key) in distributionTypes.mac" :key="key">
                    <a class="download-link no-decoration" :href="distribution.link">
                      <b>{{ distribution.name }}</b>
                    </a>
                    <br><br>
                  </span>
                </span>
              <div v-else>
                <PuSkeleton :count="1" width="128px"/>
                <br><br>
                <PuSkeleton :count="1" width="96px"/>
              </div>
            </div>
            <div class="col-md-3">
              <h4>
                Windows
                <sup><small class="red">∗</small></sup>
                <span v-if="releaseStrings.windows !== ''" aria-hidden="true" class="badge bg-primary badge-version">
                    {{ releaseStrings.windows }}
                  </span>
                <PuSkeleton v-else width="42px" height="22px"/>
              </h4>
              <br>
              <div v-if="distributionTypes.windows.length > 0">
                  <span v-for="(distribution, key) in distributionTypes.windows" :key="key">
                    <a class="download-link no-decoration" :href="distribution.link">
                      <b>{{ distribution.name }}</b>
                    </a>
                    <br><br>
                  </span>
              </div>
              <div v-else>
                <PuSkeleton :count="1" width="128px"/>
                <br><br>
                <PuSkeleton :count="1" width="96px"/>
                <br><br>
                <PuSkeleton :count="1" width="128px"/>
              </div>
            </div>
            <div class="col-md-3">
              <h4>
                Linux
                <span v-if="releaseStrings.linux !== ''" aria-hidden="true" class="badge bg-primary badge-version">
                    {{ releaseStrings.linux }}
                  </span>
                <PuSkeleton v-else width="42px" height="22px"/>
              </h4>
              <br>
              <div v-if="distributionTypes.linux.length > 0">
                  <span v-for="(distribution, key) in distributionTypes.linux" :key="key">
                    <a class="download-link no-decoration" :href="distribution.link">
                      <b>{{ distribution.name }}</b>
                    </a>
                    <br><br>
                  </span>
              </div>
              <div v-else>
                <PuSkeleton :count="1" width="128px"/>
                <br><br>
                <PuSkeleton :count="1" width="96px"/>
                <br><br>
                <PuSkeleton :count="1" width="128px"/>
              </div>
            </div>
          </div>
          <div id="dl-buttons-container" class="section-img-text-split-buttons"/>
          <div data-translatable>
            <p class="text">
                <span class="text-notice">
                  <b><span class="red">{{ $t('DOWNLOAD_RED_SS_WARN') }}</span></b>{{ $t('DOWNLOAD_SS_NOTICE') }}
                </span>
              <br><br>
              {{ $t('DOWNLOAD_REPOSITORY_NOTICE') }}
              <a class="link-highlighted no-decoration source-link"
                 href="https://github.com/cattr-app/desktop-application">cattr-app/desktop-application</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer/>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default Vue.extend({
  components: {Navbar, Footer},
  layout: 'landing',
  data() {
    return {
      releaseStrings: {
        mac: '',
        windows: '',
        linux: ''
      },
      distributionTypes: {
        windows: [
          {
            name: 'Installer',
            link: 'https://github.com/cattr-app/desktop-application/releases/latest/download/Cattr_Setup.exe',
          },
          {
            name: 'Portable',
            link: 'https://github.com/cattr-app/desktop-application/releases/latest/download/Cattr.exe',
          }
        ],
        mac: [
          {
            name: 'DMG Package',
            link: 'https://github.com/cattr-app/desktop-application/releases/latest/download/Cattr.dmg',
          }
        ],
        linux: [
          {
            name: 'Tarball',
            link: 'https://github.com/cattr-app/desktop-application/releases/latest/download/Cattr.tar.gz',
          },
          {
            name: 'Deb package',
            link: 'https://github.com/cattr-app/desktop-application/releases/latest/download/Cattr.deb',
          },
          {
            name: 'AppImage',
            link: 'https://github.com/cattr-app/desktop-application/releases/latest/download/Cattr.AppImage'
          },
        ]
      },
    };
  },
  head() {
    return {
      title: 'Cattr — Downloads',
      link: [
        {
          rel: 'preload',
          href: 'https://api.github.com/repos/cattr-app/desktop-application/releases/latest',
          as: 'fetch'
        }
      ]
    };
  },
  async mounted() {
    const releasesRequest = await this.$axios.get('https://api.github.com/repos/cattr-app/desktop-application/releases/latest');

    this.releaseStrings.mac = `${releasesRequest.data.tag_name} intel`;
    this.releaseStrings.windows = `${releasesRequest.data.tag_name} x64`;
    this.releaseStrings.linux = `${releasesRequest.data.tag_name} amd64`;
  }
});
</script>
