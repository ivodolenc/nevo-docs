<template>
  <div class="hidden flex-none w-30 mx-13 xl:block">
    <div id="table-of-contents" class="fixed overflow-y-auto scrollbar-hidden">
      <div class="pt-16 pb-18">
        <h5
          class="
            text-1
            leading-1
            tracking-3
            pb-6
            uppercase
            weight-700
            text-gray-900
          "
        >
          Contents
        </h5>
        <scrollactive
          tag="ul"
          :offset="100"
          highlight-first-item
          active-class="text-gray-900"
          class="text-gray-500 text-2 weight-500 leading-4 tracking-1"
        >
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
              class="
                scrollactive-item
                text-gray-500
                transition-colors
                hover:text-gray-900
              "
            >
              {{ link.text }}
            </NuxtLink>
          </li>
        </scrollactive>
      </div>
    </div>
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
#table-of-contents {
  width: inherit;

  @include media($from: 'lg') {
    max-height: calc(100vh - 82px);
  }
}

// #table-of-contents .link-exact-active {
//   color: theme('colors', 'gray', '900');
// }
</style>
