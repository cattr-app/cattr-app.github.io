<template>
  <div>
    <Navbar />
    <main>
      <section id="section-hero" class="section-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 col-sm-12">
              <aside>
                <h1>
                  {{ $t('Manage your time with ease') }}
                </h1>
                <div class="section-img-text-split-buttons d-md-flex text-center text-md-left">
                  <a href="https://docs.cattr.app" class="btn btn-primary mr-md-1 documentation-link">
                    {{ $t('Getting started') }}
                  </a>
                  <nuxt-link to="/desktop" class="btn btn-secondary">
                    {{ $t('Download app') }}
                  </nuxt-link>
                </div>
              </aside>
            </div>
            <div class="col-md-6 col-sm-12 d-none d-md-block">
              <img
                src="~assets/images/hero_illustration.png"
                class="w-100"
                alt="Illustration consists of four miniature drawings: notebook with a cup of coffee, clock faces, checked tickbox, cat and plant, and user badge silhouette"
              >
            </div>
          </div>
        </div>
      </section>

      <section id="about-cattr" class="section-about">
        <div class="balloon-container">
          <img id="balloon_1" class="balloon" src="~assets/images/balloon_1.png" aria-hidden="true" alt="">
          <img id="balloon_2" class="balloon" src="~assets/images/balloon_2.png" aria-hidden="true" alt="">
          <img id="balloon_3" class="balloon" src="~assets/images/balloon_3.png" aria-hidden="true" alt="">
        </div>

        <div class="container text-center" style="z-index: 1">
          <h2>
            {{ $t('What is Cattr?') }}
          </h2>
          <div class="shrinked">
            <p class="text">
              {{ $t('Cattr is an open-source time tracking solution, designed to be flawlessly integrated with your infrastructure. Superpowered with features like built-in screenshot capture and activity detection, it\'s a great instrument to boost your team\'s performance straight to the top.') }}
            </p>
          </div>
        </div>
      </section>

      <section id="our-benefits" class="container text-center">
        <h2 class="mb-5">
          {{ $t('Our Benefits') }}
        </h2>
        <div class="row benefits">
          <article class="col-md-3 mb-5">
            <img src="~assets/images/ic_1.png" alt="Illustration with code editor silhouette">
            <h4>
              {{ $t('Open Source') }}
            </h4>
            <p class="text">
              {{ $t('Community version is available for everyone for free under SSPL license. Forever.') }}
            </p>
          </article>

          <article class="col-md-3 mb-5">
            <img src="~assets/images/ic_2.png" alt="Illustration with a image viewer silhouette">
            <h4>
              {{ $t('Activity tracking') }}
            </h4>
            <p class="text">
              {{ $t('Increase the company\'s productivity by making a working process more focused') }}
            </p>
          </article>

          <article class="col-md-3 mb-5">
            <img src="~assets/images/ic_3.png" alt="Illustration with a house drawn over server rack">
            <h4>
              {{ $t('On-premises') }}
            </h4>
            <p class="text">
              {{ $t('Keep your private data in your own infrastructure, and forget all the pain around the data protection regulations') }}
            </p>
          </article>

          <article class="col-md-3 mb-5">
            <img src="~assets/images/ic_4.png" alt="Illustration with puzzle piece">
            <h4>
              {{ $t('Extensions') }}
            </h4>
            <p class="text">
              {{ $t('Extend basic functionality with the community plugins, or even write your own one!') }}
            </p>
            <a class="no-decoration" href="https://amazingcat.net/#contact-area">
              {{ $t('We can help ➜') }}
            </a>
          </article>
        </div>
      </section>

      <section id="kf-1" class="section-with-rect-wave">
        <div class="balloon-container">
          <img id="balloon_4" class="balloon" src="~assets/images/balloon_4.png" aria-hidden="true" alt="">
          <img id="balloon_5" class="balloon" src="~assets/images/balloon_5.png" aria-hidden="true" alt="">
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-5 col-lg-3 d-flex flex-column justify-content-end align-items-center align-items-md-start">
              <div class="text-center text-md-start" style="z-index: 1">
                <h2>
                  {{ $t('Dashboard') }}
                </h2>
                <p class="text">
                  {{ $t('Gather all your time use insights on one page! Dashboard functionality lets you see how much time was spent on each task, a working timeline, and screenshots from your work.') }}
                </p>
              </div>
            </div>
            <div class="col-md-7 order-md-first screenshot-container">
              <img
                class="screenshot shadow rounded"
                src="~assets/images/feature-dashboard.png"
                alt="Screenshot of the Dashboard page"
              >
            </div>
          </div>
        </div>
      </section>

      <section id="kf-2" class="section-tasks-and-integrations">
        <div class="balloon-container">
          <img id="balloon_6" class="balloon" src="~assets/images/balloon_6.png" aria-hidden="true" alt="">
          <img id="balloon_7" class="balloon" src="~assets/images/balloon_7.png" aria-hidden="true" alt="">
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3 offset-md-2">
              <div class="text-center text-md-end">
                <h2>
                  {{ $t('Reports') }}
                </h2>
                <p class="text">
                  {{ $t('Get deeper insights of your team\'s workflow by gathering the reports of every team member\'s performance. You can also export that in the CSV, XLS or PDF format.') }}
                </p>
              </div>
            </div>
            <div class="col-md-7 screenshot-container">
              <img
                id="screenshot_3"
                class="screenshot rounded shadow w-100"
                src="~assets/images/feature-project-report.png"
                alt="Screenshot of the Project Report page"
              >
            </div>
          </div>
        </div>
      </section>

      <section id="team" class="section-team section-with-rect-wave">
        <div class="container text-center">
          <p class="text">
            {{ $t('Meet Cattr\'s awesome creators:') }}
            <br>
            {{ $t('e-commerce focused development team') }}
          </p>
          <a class="text" href="https://amazingcat.net">
            {{ $t('amazingcat ➜') }}
          </a>
        </div>
      </section>

      <section class="section-text">
        <div class="balloon-container">
          <img id="balloon_8" class="balloon" src="~assets/images/balloon_8.png" aria-hidden="true" alt="">
          <img id="balloon_9" class="balloon" src="~assets/images/balloon_9.png" aria-hidden="true" alt="">
          <img id="balloon_10" class="balloon" src="~assets/images/balloon_10.png" aria-hidden="true" alt="">
        </div>
        <div class="container text-center">
          <h2>
            {{ $t('What are you waiting for?') }}
          </h2>
          <a href="https://docs.cattr.app" class="btn btn-primary documentation-link">
            {{ $t('Getting started') }}
          </a>
          <a href="https://demo.cattr.app" target="_blank" class="btn btn-secondary demo-link">
            {{ $t('Try demo now') }}
          </a>
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
  head () {
    return {
      title: 'Cattr'
    }
  }
})
</script>
