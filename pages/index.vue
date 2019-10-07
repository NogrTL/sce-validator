<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-1">
          SCE Validator
        </h1>
        <h2 class="subtitle">
          API and web-page that should validate the CSV files for batch import
          of products for SCE platrom
        </h2>
        <nuxt-link class="button is-primary is-large" to="/parse">
          <span class="icon is-large">
            <i class="fas fa-arrow-circle-up" />
          </span>
          <span>Start</span>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.hero {
  place-items: center center;
}
</style>
