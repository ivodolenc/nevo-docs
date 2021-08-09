<template>
  <ul class="pb-14 text-2 weight-500 text-gray-400 leading-4 tracking-1">
    <li v-for="route in navigation" :key="route.id">
      <NuxtLink
        v-if="route.path"
        :to="route.path"
        class="flex items-center py-5 transition-colors hover:text-gray-100"
      >
        <span v-if="route.icon" class="w-10 mr-6">
          <component :is="route.icon" />
        </span>
        <span>
          {{ route.name }}
        </span>
      </NuxtLink>
      <a
        v-else
        :href="route.href"
        rel="noopener noreferrer"
        target="_blank"
        class="flex items-center py-5 transition-colors hover:text-gray-100"
      >
        <span v-if="route.icon" class="w-10 mr-6">
          <component :is="route.icon" />
        </span>
        <span>
          {{ route.name }}
        </span>
      </a>
    </li>
  </ul>
</template>

<script>
import IconDocs from './IconDocs'
import IconFeatures from './IconFeatures'
import IconChangelog from './IconChangelog'
import IconSponsor from './IconSponsor'
import { navFeatured } from '~/utils/navigation/docs'

export default {
  components: {
    IconDocs,
    IconFeatures,
    IconChangelog,
    IconSponsor
  },

  data() {
    return {
      navigation: navFeatured
    }
  }
}
</script>
