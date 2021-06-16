<template>
  <div
    class="absolute top-0 left-0 flex flex-col items-center justify-center w-screen min-h-full font-sans weight-400 text-black"
  >
    <h1 v-if="error.statusCode === 404" class="text-9 uppercase">
      Page not found
    </h1>
    <h1 v-else class="text-9 uppercase">
      <span>An error occurred</span>
    </h1>
    <button @click="$router.back()">GO BACK</button>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      htmlAttrs: {
        class: 'overflow-hidden'
      },

      title: 'Error' + this.$config.app.titleSeparator + '404 Not Found'
    }
  }
}
</script>
