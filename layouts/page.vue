<template>
  <div id="__page">
    <TopBarDocs />
    <TheHeaderDocs />
    <div class="flex z-30 bg-dark-700 relative left-0 w-full">
      <TheSidebarLeft />
      <div class="flex w-full">
        <Nuxt
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
        />
        <TheSidebarRight />
      </div>
    </div>
  </div>
</template>

<script>
import TopBarDocs from '~/components/blocks/TopBarDocs'
import TheHeaderDocs from '~/components/templates/TheHeaderDocs'
import TheSidebarLeft from '~/components/templates/TheSidebarLeft'
import TheSidebarRight from '~/components/templates/TheSidebarRight'

import { canonical, facebook, twitter } from '~/utils/getHeadData'

export default {
  components: {
    TopBarDocs,
    TheHeaderDocs,
    TheSidebarLeft,
    TheSidebarRight
  },

  head() {
    const { path } = this.$route

    return {
      meta: [...facebook(path), ...twitter()],

      link: [...canonical(path)]
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
