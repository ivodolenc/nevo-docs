<template>
  <div
    id="sidebar-right"
    class="z-50 hidden bg-dark-700 flex-none xl:w-33 xl:block"
  >
    <nav
      id="sidebar-right_nav"
      class="
        sticky
        top-20
        right-0
        overflow-y-auto
        scrollbar-hidden
        pt-14
        pb-18
        px-8
        border-l-1 border-dark-200 border-opacity-20
        sm:px-11
        xl:px-12
      "
    >
      <NavTableOfContents v-if="toc" :toc="toc" />
      <SponsoredAd />
    </nav>
  </div>
</template>

<script>
import NavTableOfContents from './NavTableOfContents'
import SponsoredAd from '~/components/blocks/SponsoredBlocks/SidebarRight'

export default {
  components: {
    NavTableOfContents,
    SponsoredAd
  },

  props: {
    toc: {
      type: Array,
      default: () => null
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebar-right_nav {
  width: inherit;

  @include media($from: 'lg') {
    height: calc(100vh - 72px); // Screen height - Header height
    max-height: calc(100vh - 72px); // Screen height - Header height
  }
}
</style>
