<template>
  <div class="flex w-full">
    <article
      class="
        z-30
        w-full
        max-w-screen-lg
        overflow-x-hidden
        mx-auto
        pt-18
        pb-18
        px-8
        sm:px-11
        lg:px-19
        xxl2:px-23
      "
    >
      <div class="w-full pb-13 mb-13">
        <p class="text-3 weight-700 tracking-3 uppercase mb-4 text-sky-500">
          {{ page.category }}
        </p>
        <h1
          class="
            flex
            items-center
            pb-8
            text-11
            weight-700
            text-gray-50
            -tracking-1
          "
        >
          <span>
            {{ page.title }}
          </span>
          <span
            v-if="page.badge"
            class="
              text-3
              tracking-1
              weight-500
              text-sky-400
              bg-sky-700 bg-opacity-40
              px-8
              py-3
              rounded-6
              ml-12
            "
            >{{ page.badge }}</span
          >
          <span v-else class="hidden"></span>
        </h1>
        <p class="text-6 text-gray-50 tracking-3">{{ page.description }}</p>
      </div>
      <NuxtContent :document="page" />
      <NavPrevNext :prev="prev" :next="next" />
    </article>
    <TheSidebarRight :toc="page.toc" />
  </div>
</template>

<script>
import NavPrevNext from '~/components/blocks/NavPrevNext'
import TheSidebarRight from '~/components/templates/TheSidebarRight'

/* eslint-disable */
import TableGenerateBetween from '~/components/blocks/TableGenerateRules/TableGenerateBetween'
import TableGenerateColors from '~/components/blocks/TableGenerateRules/TableGenerateColors'
import TableGenerateCommon from '~/components/blocks/TableGenerateRules/TableGenerateCommon'
import TableGenerateContainer from '~/components/blocks/TableGenerateRules/TableGenerateContainer'
import TableGenerateTheme from '~/components/blocks/TableGenerateRules/TableGenerateTheme'
/* eslint-enable */

export default {
  components: {
    NavPrevNext,
    TheSidebarRight,

    /* eslint-disable */
    TableGenerateBetween,
    TableGenerateColors,
    TableGenerateCommon,
    TableGenerateContainer,
    TableGenerateTheme
    /* eslint-enable */
  },

  layout: 'docs',

  async asyncData({ $content, params, error }) {
    try {
      const page = await $content('docs', params.slug).fetch()
      const [prev, next] = await $content('docs')
        .only(['title', 'slug'])
        .sortBy('position')
        .surround(params.slug)
        .fetch()

      return { page, prev, next }
    } catch (err) {
      error({
        statusCode: 404
      })
    }
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
.xxl2\:px-23 {
  @include media($from: 1536px) {
    padding-left: theme('spacing', '23');
    padding-right: theme('spacing', '23');
  }
}
</style>
