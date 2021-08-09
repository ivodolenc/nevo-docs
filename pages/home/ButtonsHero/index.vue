<template>
  <div class="flex flex-col justify-center items-center mt-18 sm:flex-row">
    <NuxtLink
      to="/docs"
      role="button"
      class="
        h-18
        mb-10
        w-full
        inline-flex
        items-center
        justify-center
        px-6
        leading-1
        bg-sky-600
        rounded-5
        text-white text-3
        weight-500
        tracking-2
        sm:mb-0 sm:mr-10 sm:w-auto sm:text-4 sm:px-12
        transition-colors
        hover:bg-opacity-90
      "
      >Explore Nevo</NuxtLink
    >
    <button
      class="
        h-18
        w-full
        inline-flex
        items-center
        justify-center
        px-6
        leading-1
        bg-dark-500
        rounded-5
        text-gray-300
        tracking-1
        weight-400
        font-mono
        text-2
        weight-500
        sm:text-3 sm:px-12 sm:w-auto
        transition-colors
        hover:bg-dark-400
      "
      @click="copyToClipboard"
    >
      <span class="text-gray-500">$</span>
      <span class="ml-8 text-gray-300">
        npm install -D <span class="text-sky-400">nevo</span>
      </span>
      <input
        ref="npm"
        type="text"
        value="npm install -D nevo"
        class="sr-only"
      />
      <span><IconCopy class="ml-11 text-gray-600" /></span>
    </button>
  </div>
</template>

<script>
import IconCopy from './icons/IconCopy'

export default {
  components: {
    IconCopy
  },

  methods: {
    copyToClipboard() {
      this.$refs.npm.select()
      document.execCommand('copy')
    }
  }
}
</script>
