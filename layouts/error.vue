<template>
  <div
    class="
      absolute
      top-0
      left-0
      flex flex-col
      items-center
      justify-center
      w-screen
      min-h-full
      font-sans
      weight-400
    "
  >
    <h1
      v-if="error.statusCode === 404"
      class="text-11 weight-700 mb-4 text-gray-50"
    >
      Page Not Found
    </h1>
    <h1 v-else class="text-11 weight-700 mb-4 text-gray-50">
      <span>An Error Occurred</span>
    </h1>
    <button
      class="text-5 text-gray-50 tracking-3 text-sky-500"
      @click="$router.back()"
    >
      Go Back
    </button>
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
