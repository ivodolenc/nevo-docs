<template>
  <header class="sticky top-0 z-70 border-t-1 border-dark-700 overflow-hidden">
    <div
      ref="headerBg"
      class="
        w-full
        bg-dark-700
        backdrop-filter backdrop-blur-6
        border-b-1 border-dark-200 border-opacity-20
      "
    >
      <div class="flex items-center justify-between h-20">
        <div
          class="
            flex
            items-center
            flex-shrink-0
            px-8
            sm:px-11
            xl:px-12
            lg:w-31
            xl:w-33
          "
        >
          <LogoDocs />
          <BadgeNevoVersion />
        </div>
        <div class="w-full max-w-screen-lg px-11 sm:px-19 xxl2:px-23">
          <SearchButton @click.native="openSearchWindow" />
        </div>
        <div class="flex flex-none justify-end px-8 sm:px-11 xl:px-12 xl:w-33">
          <LinkIcons />
        </div>
      </div>
    </div>
    <SearchWindow
      v-if="isSearchWindowActive"
      @closeSearch="closeSearchWindow"
    />
    <span v-else class="hidden"></span>
  </header>
</template>

<script>
import LogoDocs from './LogoDocs'
import BadgeNevoVersion from './BadgeNevoVersion'
import SearchButton from './SearchButton'
import SearchWindow from './SearchWindow'
import LinkIcons from './LinksIcons'

export default {
  components: {
    LogoDocs,
    BadgeNevoVersion,
    SearchButton,
    SearchWindow,
    LinkIcons
  },

  data() {
    return {
      isSearchWindowActive: false,
      isFirefox: this.$browser.is('firefox')
    }
  },

  mounted() {
    this.addOpacityToHeader()
    window.addEventListener('keydown', this.shortcutsKeyEvent)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.shortcutsKeyEvent)
  },

  methods: {
    openSearchWindow() {
      this.isSearchWindowActive = true
    },

    closeSearchWindow() {
      this.isSearchWindowActive = false
    },

    shortcutsKeyEvent(event) {
      if (event.metaKey && event.key === 'k') {
        this.openSearchWindow()
      }
    },

    addOpacityToHeader() {
      if (!this.isFirefox) {
        this.$refs.headerBg.classList.add('bg-opacity-20')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.xxl2\:px-23 {
  @include media($from: 1536px) {
    padding-left: theme('spacing', '23');
    padding-right: theme('spacing', '23');
  }
}
</style>
