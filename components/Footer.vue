<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col align-self-start">
          <div class="row">
            <div class="col-md-12">
              <h3 class="software-title">
                Cattr
              </h3><br>
            </div>
          </div>
          <br>
          <div class="row link-container">
            <div class="col-md-3">
              <a href="https://docs.cattr.app" class="documentation-link">
                {{ $t('Documentation') }}
              </a><br>
              <nuxt-link to="/desktop/">
                {{ $t('Desktop app') }}
              </nuxt-link>
            </div>
            <div class="col-md-3">
              <a href="https://github.com/cattr-app" rel="vcs-git" class="source-link">Github</a><br>
              <br>
              <nuxt-link to="/licenses/">{{ $t('License') }}</nuxt-link>
            </div>
            <div class="col-md-3">
              <nuxt-link to="/privacy/desktop/">
                {{ $t('Privacy Policy — Desktop') }}
              </nuxt-link>
              <nuxt-link to="/privacy/mobile/">
                {{ $t('Privacy Policy — Mobile') }}
              </nuxt-link>
              <nuxt-link to="/licenses/ru/">
                {{ $t('License (RU)') }}
              </nuxt-link>
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col">
              <p>
                {{ $t('Made by') }} <a href="https://amazingcat.net" class="no-decoration">amazingcat</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cookie_bar row align-items-center justify-content-center" style="display: none">
      <div class="cookie_bar__row row align-items-center justify-content-between">
        <span class="col cookie_bar__text">
          <span>We use cookies to ensure you get the best experience on our website.</span>
          <span>Мы используем файлы «cookies» на нашем веб-сайте, чтобы улучшить работу и повысить эффективность
            сайта.</span>
          <span>Vi benytter cookies for at give dig den bedste oplevelse på dette site.</span>
        </span>
        <button
          id="cookie_button"
          type="submit"
          class="col-auto btn btn-light cookie_bar__row__button"
        >
          <span>Got it</span>
          <span>Понятно</span>
          <span>Forstået</span>
        </button>
      </div>
    </div>
  </footer>
</template>
