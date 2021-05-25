<template>
  <div>
    <Navbar />
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
                  <span id="dl-mac-version" class="badge bg-primary badge-version">
                    {{ releaseStrings.mac }}
                  </span>
                </h4>
                <br>
                <span v-for="artifact in packagesMacOs" :key="artifact.format">
                  <a class="download-link no-decoration" :href="artifact.link">
                    <b>{{ distributionTypes.get(artifact.format) }}</b>
                  </a>
                  <br><br>
                </span>
              </div>
              <div class="col-md-3">
                <h4>
                  Windows
                  <sup><small class="red">∗</small></sup>
                  <span id="dl-windows-version" class="badge bg-primary badge-version">
                    {{ releaseStrings.windows }}
                  </span>
                </h4>
                <br>
                <span v-for="artifact in packagesWindows" :key="artifact.format">
                  <a class="download-link no-decoration" :href="artifact.link">
                    <b>{{ distributionTypes.get(artifact.format) }}</b>
                  </a>
                  <br><br>
                </span>
              </div>
              <div class="col-md-3">
                <h4>
                  Linux
                  <span id="dl-linux-version" class="badge bg-primary badge-version">
                    {{ releaseStrings.linux }}
                  </span>
                </h4>
                <br>
                <span v-for="artifact in packagesLinux" :key="artifact.format">
                  <a class="download-link no-decoration" :href="artifact.link">
                    <b>{{ distributionTypes.get(artifact.format) }}</b>
                  </a>
                  <br><br>
                </span>
              </div>
            </div>
            <div id="dl-buttons-container" class="section-img-text-split-buttons" />
            <div data-translatable>
              <p class="text">
                <span class="text-notice">
                  <b><span class="red">{{ $t('DOWNLOAD_RED_SS_WARN') }}</span></b>{{ $t('DOWNLOAD_SS_NOTICE') }}
                </span>
                <br><br>
                {{ $t('DOWNLOAD_REPOSITORY_NOTICE') }}
                <a class="link-highlighted no-decoration source-link" href="https://github.com/cattr-app/desktop-application">cattr-app/desktop-application</a>.
              </p>
            </div>
          </div>
        </div>
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
  components: { Navbar, Footer },
  layout: 'landing',
  data () {
    return {
      packagesMacOs: [],
      packagesWindows: [],
      packagesLinux: [],
      releaseStrings: {
        mac: '???',
        windows: '???',
        linux: '???'
      },
      distributionTypes: new Map([
        ['dmg', 'DMG Package'],
        ['mas', 'macOS App Store'],
        ['msi', 'Installer'],
        ['nsis', 'Installer'],
        ['exe', 'Portable'],
        ['mss', 'Microsoft Store'],
        ['appimage', 'AppImage'],
        ['deb', 'Deb package'],
        ['apt', 'APT repository'],
        ['tgz', 'Tarball']
      ])
    }
  },
  head () {
    return {
      title: 'Cattr — Downloads'
    }
  },
  async mounted () {
    const macRequest = await this.$axios.get('https://dl.cattr.app/manifests/release-mac.json')
    const winRequest = await this.$axios.get('https://dl.cattr.app/manifests/release-windows.json')
    const linuxRequest = await this.$axios.get('https://dl.cattr.app/manifests/release-linux.json')

    this.packagesLinux = linuxRequest.data.artifacts
    this.packagesWindows = winRequest.data.artifacts
    this.packagesMacOs = macRequest.data.artifacts

    this.releaseStrings.mac = `${macRequest.data.version} intel`
    this.releaseStrings.windows = `${winRequest.data.version} x64`
    this.releaseStrings.linux = `${linuxRequest.data.version} amd64`
  }
})
</script>
