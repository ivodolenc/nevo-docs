<template>
  <div>
    <h1 class="text-11">Nevo Features</h1>
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
