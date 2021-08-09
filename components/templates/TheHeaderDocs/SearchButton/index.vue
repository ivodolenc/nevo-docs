<template>
  <button
    class="
      flex
      w-full
      items-center
      py-5
      text-gray-400
      outline-none
      transition-colors
      hover:text-gray-50
    "
  >
    <IconSearch />
    <span class="ml-6 tracking-1 sm:ml-10 md:hidden">Search docs</span>
    <span class="hidden ml-6 tracking-1 sm:ml-10 md:inline-block"
      >Search the documentation</span
    >
    <BadgeShortcut />
  </button>
</template>

<script>
import IconSearch from './icons/IconSearch'
import BadgeShortcut from './BadgeShortcut'

export default {
  components: {
    IconSearch,
    BadgeShortcut
  }
}
</script>
