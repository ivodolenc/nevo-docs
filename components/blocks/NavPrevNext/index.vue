<template>
  <div
    id="prev-next-nav"
    class="
      pt-10
      pb-18
      mt-16
      border-t-1 border-gray-200 border-opacity-70
      text-3
      weight-500
      text-gray-400
      flex
    "
  >
    <div class="flex flex-1">
      <div
        v-if="prev"
        class="flex items-center transition-colors hover:text-gray-900"
      >
        <ChevronLeft class="h-6 mr-6" />
        <NuxtLink :to="{ params: { slug: prev.slug } }">
          {{ prev.title }}
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-1 justify-end">
      <div
        v-if="next"
        class="flex items-center transition-colors hover:text-gray-900"
      >
        <NuxtLink :to="{ params: { slug: next.slug } }">
          {{ next.title }}
        </NuxtLink>
        <ChevronRight class="h-6 ml-6" />
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'

export default {
  components: {
    ChevronLeft,
    ChevronRight
  },

  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
