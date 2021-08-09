<template>
  <div id="__docs">
    <TopBarDocs />
    <TheHeaderDocs />
    <div class="flex z-30 bg-dark-700 relative left-0 w-full">
      <TheSidebarLeft />
      <Nuxt />
    </div>
  </div>
</template>

<script>
import TopBarDocs from '~/components/blocks/TopBarDocs'
import TheHeaderDocs from '~/components/templates/TheHeaderDocs'
import TheSidebarLeft from '~/components/templates/TheSidebarLeft'

import { canonical, facebook, twitter } from '~/utils/getHeadData'

export default {
  components: {
    TopBarDocs,
    TheHeaderDocs,
    TheSidebarLeft
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
