<template>
  <div id="__docs">
    <TheHeaderDocs />
    <div class="w-full max-w-screen-xxl mx-auto lg:flex">
      <TheSidebarDocs />
      <div
        id="content"
        class="
          z-50
          min-w-0
          w-full
          flex-auto
          lg:static lg:max-h-full lg:overflow-visible
        "
      >
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeaderDocs from '~/components/templates/TheHeaderDocs'
import TheSidebarDocs from '~/components/templates/TheSidebarDocs'

import { canonical, facebook, twitter } from '~/utils/getHeadData'

export default {
  components: {
    TheHeaderDocs,
    TheSidebarDocs
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
