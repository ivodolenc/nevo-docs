<template>
  <div
    class="
      table-wrapper
      relative
      overflow-auto
      mb-18
      pt-6
      pb-10
      rounded-6
      bg-dark-500
      scrollbar-hidden
    "
  >
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.table-wrapper {
  max-height: 33rem;
  font-size: 13px;
}
</style>
