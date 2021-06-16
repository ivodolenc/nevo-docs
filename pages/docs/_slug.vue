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
      <NavPrevNext :prev="prev" :next="next" />
    </article>
    <NavTableOfContents :toc="page.toc" />
  </div>
</template>

<script>
import NavTableOfContents from '~/components/blocks/NavTableOfContents'
import NavPrevNext from '~/components/blocks/NavPrevNext'

export default {
  components: {
    NavTableOfContents,
    NavPrevNext
  },

  layout: 'docs',

  async asyncData({ $content, params }) {
    const page = await $content('docs', params.slug)
      .where({ slug: { $ne: 'release-notes' } })
      .fetch()
    const [prev, next] = await $content('docs')
      .where({ slug: { $ne: 'release-notes' } })
      .only(['title', 'slug'])
      .sortBy('position')
      .surround(page.slug)
      .fetch()

    return { page, prev, next }
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
