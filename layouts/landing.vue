<template>
  <div class="whitened-wrapper">
    <GoogleNoScriptContainer>
      <Nuxt />
    </GoogleNoScriptContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GoogleNoScriptContainer from '../components/GoogleNoScriptContainer.vue'

export default Vue.extend({
  components: {
    GoogleNoScriptContainer
  },
  head () {
    return {
      bodyAttrs: {
        class: 'full-size-footer'
      }
    }
  }
})
</script>
