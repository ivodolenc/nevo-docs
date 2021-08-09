<template>
  <div
    id="sidebar-left"
    class="z-50 hidden bg-dark-700 flex-none lg:w-31 xl:w-33 lg:block"
  >
    <nav
      id="sidebar-left_nav"
      class="
        sticky
        top-20
        left-0
        overflow-y-auto
        scrollbar-hidden
        pt-14
        pb-8
        px-8
        border-r-1 border-dark-200 border-opacity-20
        sm:px-11
        xl:px-12
      "
    >
      <NavFeatured />
      <NavMain />
    </nav>
  </div>
</template>

<script>
import NavFeatured from './NavFeatured'
import NavMain from './NavMain'

export default {
  components: {
    NavFeatured,
    NavMain
  }
}
</script>

<style lang="scss" scoped>
#sidebar-left_nav {
  width: inherit;

  @include media($from: 'lg') {
    height: calc(100vh - 72px); // Screen height - Header height
    max-height: calc(100vh - 72px); // Screen height - Header height
  }
}
</style>
