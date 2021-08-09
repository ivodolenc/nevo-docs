<template>
  <div>
    <h1
      class="flex items-center pb-8 text-11 weight-700 text-gray-50 -tracking-1"
    >
      Features
    </h1>
  </div>
</template>

<script>
export default {
  layout: 'page',

  head() {
    return {
      title:
        'Features' + this.$config.app.titleSeparator + this.$config.app.title
    }
  }
}
</script>
