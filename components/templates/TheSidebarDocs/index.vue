<template>
  <aside id="sidebar" class="z-50 hidden flex-none lg:w-31 xl:w-33 lg:block">
    <nav
      id="sidebar-nav"
      class="fixed overflow-y-auto pt-13 pb-7 px-13 scrollbar-hidden"
    >
      <NavFeatured />
      <NavMain />
    </nav>
  </aside>
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
#sidebar-nav {
  width: inherit;

  @include media($from: 'lg') {
    max-height: calc(100vh - 82px);
  }
}
</style>
