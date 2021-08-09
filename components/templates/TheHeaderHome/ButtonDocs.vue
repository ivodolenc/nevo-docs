<template>
  <div>
    <span
      class="
        hidden
        text-1 text-gray-600
        weight-600
        tracking-0
        mr-6
        lg:text-2 lg:mr-10
        sm:inline-block
      "
      >v{{ $config.nevo.version }}</span
    >
    <NuxtLink
      to="/docs/installation"
      role="button"
      class="
        inline-block
        px-6
        py-5
        leading-1
        bg-dark-500
        rounded-4
        text-white text-1
        weight-500
        tracking-3
        sm:tracking-2 sm:text-2
        md:px-7 md:py-6
        xxl:rounded-5 xxl:py-7 xxl:px-8
        transition-colors
        hover:bg-dark-400
      "
      >Get Started</NuxtLink
    >
  </div>
</template>

<script>
export default {}
</script>
