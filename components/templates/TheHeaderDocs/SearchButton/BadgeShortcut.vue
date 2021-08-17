<template>
  <div class="flex items-center">
    <span
      ref="iconMac"
      class="
        hidden
        ml-11
        py-3
        px-3
        text-dark-100 text-opacity-50
        border-1 border-dark-100 border-opacity-40
        rounded-3
      "
    >
      <IconCommand class="h-5" />
    </span>
    <span
      ref="iconWin"
      class="
        hidden
        ml-11
        py-3
        px-3
        text-dark-100 text-opacity-50
        border-1 border-dark-100 border-opacity-40
        rounded-3
      "
    >
      <IconWindows class="h-5" />
    </span>
  </div>
</template>

<script>
import IconCommand from './icons/IconCommand'
import IconWindows from './icons/IconWindows'

export default {
  components: {
    IconCommand,
    IconWindows
  },

  data() {
    return {
      desktopMac: this.$browser.is('desktop') && this.$browser.is('macos'),
      desktopWin: this.$browser.is('desktop') && this.$browser.is('windows')
    }
  },

  mounted() {
    this.showIconsOnSpecificPlatform()
  },

  methods: {
    showIconsOnSpecificPlatform() {
      if (this.desktopMac) {
        this.$refs.iconMac.classList.add('md:inline-block')
      } else if (this.desktopWin) {
        this.$refs.iconWin.classList.add('md:inline-block')
      }
    }
  }
}
</script>
