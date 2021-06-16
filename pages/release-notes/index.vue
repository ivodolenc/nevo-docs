<template>
  <div class="flex w-full">
    <article
      class="flex-auto pt-13 pb-18 px-8 sm:px-11 xl:px-13 overflow-x-hidden"
    >
      <div
        class="border-b-1 border-gray-200 border-opacity-60 w-full pb-13 mb-13"
      >
        <h1 class="pb-1 text-8 weight-700 text-gray-900 -tracking-2">
          {{ page.title }}
        </h1>
        <p class="text-4 text-gray-500 tracking-1">{{ page.description }}</p>
      </div>
      <NuxtContent :document="page" />
    </article>
    <NavTableOfContents :toc="page.toc" />
  </div>
</template>

<script>
import NavTableOfContents from '~/components/blocks/NavTableOfContents'

export default {
  components: {
    NavTableOfContents
  },

  layout: 'docs',

  async asyncData({ $content }) {
    const page = await $content('docs/release-notes').fetch()
    return { page }
  },

  head() {
    return {
      title:
        this.page.title +
        this.$config.app.titleSeparator +
        this.$config.app.title,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nuxt-content {
  ul {
    list-style: disc;
    padding-left: theme('spacing', '15');
    color: theme('colors', 'gray', '900');
  }
}
</style>
