<template>
  <div
    id="prev-next-nav"
    class="flex pt-10 pb-18 mt-16 text-4 weight-500 tracking-1"
  >
    <div class="flex flex-1">
      <div v-if="prev" class="flex flex-col items-start">
        <span class="text-2 text-gray-400 text-opacity-60 mb-6 tracking-3"
          >Previous</span
        >
        <NuxtLink
          :to="{ params: { slug: prev.slug } }"
          class="
            flex
            items-center
            text-sky-500
            transition-colors
            hover:text-sky-600
          "
        >
          <span>
            <ChevronLeft class="h-6 mr-6" />
          </span>
          <span>
            {{ prev.title }}
          </span>
        </NuxtLink>
      </div>
    </div>
    <div class="flex flex-1 justify-end">
      <div v-if="next" class="flex flex-col items-end">
        <span class="text-2 text-gray-400 text-opacity-60 mb-6 tracking-3"
          >Next</span
        >
        <NuxtLink
          :to="{ params: { slug: next.slug } }"
          class="
            flex
            items-center
            text-sky-500
            transition-colors
            hover:text-sky-600
          "
        >
          <span>
            {{ next.title }}
          </span>
          <span>
            <ChevronRight class="h-6 ml-6" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from './icons/IconChevronLeft'
import ChevronRight from './icons/IconChevronRight'

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
