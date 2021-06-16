<template>
  <div></div>
</template>

<script>
export default {
  layout: 'default',

  head() {
    return {
      title:
        this.$config.app.title +
        this.$config.app.titleSeparator +
        this.$config.app.titleTemplate
    }
  }
}
</script>
