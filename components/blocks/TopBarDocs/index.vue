<template>
  <div
    class="
      top-bar
      relative
      top-0
      w-full
      py-5
      px-6
      flex
      items-center
      text-1
      tracking-3
      text-white
      weight-400
      justify-center
      overflow-hidden
      sm:text-2
    "
  >
    <span
      >Explore the framework and start creating with your preferred system
      <span class="text-3 ml-3 leading-1 sm:text-5">✨</span>
    </span>
    <NuxtLink
      to="/docs/installation"
      class="
        py-4
        px-8
        bg-sky-900 bg-opacity-50
        text-1
        uppercase
        leading-3
        weight-600
        text-white
        tracking-2
        rounded-4
        ml-12
        whitespace-nowrap
        sm:ml-14
      "
      >Get Started</NuxtLink
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.top-bar {
  background: rgb(139, 47, 224);
  background: linear-gradient(
    60deg,
    rgba(139, 47, 224, 1) 0%,
    rgba(39, 105, 219, 1) 50%,
    rgba(61, 196, 245, 1) 100%
  );
}
</style>
