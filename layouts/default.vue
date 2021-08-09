<template>
  <div id="__default">
    <TheHeaderHome />
    <Nuxt />
  </div>
</template>

<script>
import TheHeaderHome from '~/components/templates/TheHeaderHome'

import { canonical, facebook, twitter } from '~/utils/getHeadData'

export default {
  components: {
    TheHeaderHome
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
