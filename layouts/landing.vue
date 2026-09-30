<template>
  <div class="whitened-wrapper">
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      bodyAttrs: {
        class: 'full-size-footer'
      }
    }
  }
})
</script>
