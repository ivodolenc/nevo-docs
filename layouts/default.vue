<template>
  <div id="__default">
    <TheHeaderHome />
    <div class="flex w-full mx-auto lg:max-w-screen-xxl">
      <Nuxt />
    </div>
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
