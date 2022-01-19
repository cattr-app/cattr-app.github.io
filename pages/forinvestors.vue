<template>
  <div>
    <Navbar />
    <main>
      <section id="section-hero" class="container">
        <div class="row align-items-center">
          <div class="col-md-12 col-sm-12">
            <h1>{{ $t('For investors') }}</h1>
            <br>
            <article>
              <h3>{{ $t('Let us introduce you Cattr Enterprise - a timetracker for large businesses.')}}</h3>
              <h4>Cattr Enterprise:</h4>
              <ul>
                <li>{{ $t('Flexible adjustment to the company needs thanks to the open source code and additional extensions')}}</li>
                <li>{{ $t('Hosted on the client\'s servers - data is not transferred to third parties')}}</li>
                <li>{{ $t('Has a scalable core, the ability to distribute the load between multiple servers. This is security, stability and speed of work for customers who do not have enough power of the free version')}}</li>
                <li>{{ $t('Integrates with ERP')}}</li>
                <li>{{ $t('Offers customers 24/7 support')}}</li>
              </ul>
            </article>
            <h3>{{ $t('Why Invest in Cattr Enterprise?')}}</h3>

                <ul>
                  <li>{{ $t('it is in high demand due to the pandemic and great business exodus to online')}}</li>
                  <li>{{ $t('high degree of readiness - there is already a product in the free version that promotes itself')}}</li>
                  <li>{{ $t('there are no competitors in the market for self-hosted solutions for large businesses')}}</li>
                  <li>{{ $t('it\'s a ready-made solution for automating recruiting and delivery services')}}</li>
                </ul>

        <div class="container text-center">
          <a class="text" href="https://amazingcat.net/#contact-area">{{ $t('Find out more')}}</a>
        </div>

            <div id="dl-buttons-container" class="section-img-text-split-buttons" />
            <div data-translatable>
              <p class="text">
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

