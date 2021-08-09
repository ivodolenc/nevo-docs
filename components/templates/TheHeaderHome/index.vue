<template>
  <header
    class="
      absolute
      top-0
      left-0
      w-full
      z-70
      border-t-1 border-transparent
      overflow-hidden
    "
  >
    <div class="max-w-screen-xxl mx-auto border-b-1 border-transparent">
      <div class="flex items-center justify-between h-21 xl:h-22">
        <div
          class="
            flex
            items-center
            pl-8
            sm:pl-11
            xl:pl-12
            md:w-29
            lg:w-32
            xl:w-34
          "
        >
          <LogoHome />
        </div>
        <div class="hidden px-12 md:block">
          <NavFeatured />
        </div>
        <div class="text-right pr-8 sm:pr-11 xl:pr-12 md:w-29 lg:w-32 xl:w-34">
          <ButtonDocs />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import LogoHome from './LogoHome'
import NavFeatured from './NavFeatured'
import ButtonDocs from './ButtonDocs'

export default {
  components: {
    LogoHome,
    NavFeatured,
    ButtonDocs
  }
}
</script>
