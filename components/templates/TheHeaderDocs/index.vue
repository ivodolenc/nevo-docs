<template>
  <header class="sticky top-0 z-100 border-t-1 border-white">
    <div
      class="w-full bg-white border-b-1 border-gray-200 border-opacity-60 glass"
    >
      <div class="mx-auto lg:max-w-screen-xxl">
        <div class="py-11 flex items-center sm:py-12">
          <div
            class="w-17 text-gray-900 flex items-center pl-8 sm:w-24 sm:pl-11 lg:pl-13 lg:w-31 xl:w-33"
          >
            <LogoNevo />
          </div>
          <div
            class="flex-auto px-8 flex justify-end items-center sm:px-11 lg:px-13"
          >
            <div class="mr-11 text-3 text-gray-500 weight-500 sm:mr-14">
              <span>v{{ $config.nevo.version }}</span>
            </div>
            <div class="flex justify-end items-center">
              <IconGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoNevo from '../TheHeaderHome/LogoNevo'
import IconGithub from '../TheHeaderHome/IconGithub'

export default {
  components: {
    LogoNevo,
    IconGithub
  }
}
</script>

<style lang="scss" scoped>
.glass {
  background-color: rgba(#fff, 0.95);
}

@supports (backdrop-filter: blur(50px)) {
  .glass {
    background-color: rgba(#fff, 0.5);
    backdrop-filter: blur(50px);
  }
}
</style>
