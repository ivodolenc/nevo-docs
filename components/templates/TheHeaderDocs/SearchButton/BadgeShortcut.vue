<template>
  <span
    v-if="$browser.is('desktop') && $browser.is('macos')"
    class="
      ml-11
      py-3
      px-3
      text-dark-100 text-opacity-50
      border-1 border-dark-100 border-opacity-40
      rounded-3
      md:inline-block
    "
  >
    <IconCommand class="h-5" />
  </span>
  <span
    v-else-if="$browser.is('desktop') && $browser.is('windows')"
    class="
      ml-11
      py-3
      px-3
      text-dark-100 text-opacity-50
      border-1 border-dark-100 border-opacity-40
      rounded-3
      md:inline-block
    "
  >
    <IconWindows class="h-5" />
  </span>
  <span v-else class="hidden"></span>
</template>

<script>
import IconCommand from './icons/IconCommand'
import IconWindows from './icons/IconWindows'

export default {
  components: {
    IconCommand,
    IconWindows
  }
}
</script>
