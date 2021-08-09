<template>
  <div class="pb-14">
    <h5
      class="text-2 leading-1 tracking-4 pb-6 uppercase weight-700 text-gray-50"
    >
      On this page
    </h5>
    <ul class="text-gray-400 text-2 weight-500 leading-4 tracking-1">
      <li
        v-for="link of toc"
        :key="link.id"
        :class="{
          'ml-8': link.depth === 3
        }"
        class="py-4"
      >
        <NuxtLink
          :to="`#${link.id}`"
          class="transition-colors hover:text-gray-50"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.link-exact-active {
  color: theme('colors', 'gray', '50');
  font-weight: theme('weight', '600');
}
</style>
