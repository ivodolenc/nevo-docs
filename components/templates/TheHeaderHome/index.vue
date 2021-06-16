<template>
  <header class="relative top-0 z-100 border-t-1 border-white">
    <div
      class="w-full bg-white border-b-1 border-gray-200 border-opacity-60 xl:border-transparent"
    >
      <div class="mx-auto lg:max-w-screen-xxl">
        <div class="py-11 flex items-center sm:py-12">
          <div
            class="w-17 text-gray-900 flex items-center pl-8 sm:pl-11 lg:pl-13 sm:w-24 lg:w-31 xl:w-33"
          >
            <LogoNevo />
          </div>
          <div
            class="flex-auto flex justify-end items-center px-8 sm:px-11 lg:px-13"
          >
            <div class="mr-11 text-3 text-gray-500 weight-500 sm:mr-14">
              <NuxtLink
                to="/docs"
                class="transition-colors hover:text-gray-900"
              >
                <span class="sm:hidden">Docs</span>
                <span class="hidden sm:inline">Documentation</span>
              </NuxtLink>
            </div>
            <div class="flex justify-end items-center text-gray-400">
              <IconGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoNevo from './LogoNevo'
import IconGithub from './IconGithub'

export default {
  components: {
    LogoNevo,
    IconGithub
  }
}
</script>
