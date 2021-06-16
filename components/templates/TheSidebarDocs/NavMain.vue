<template>
  <div id="sidebar-main-nav">
    <ul v-for="category in navigation" :key="category.id" class="-mx-6">
      <li v-for="(routes, title) in category" :key="title">
        <h5
          class="
            text-1
            leading-1
            px-6
            tracking-3
            pb-6
            uppercase
            weight-700
            text-gray-900
          "
        >
          {{ title }}
        </h5>
        <ul class="text-gray-500 text-2 weight-500 leading-4 tracking-1 pb-14">
          <li
            v-for="route in routes"
            :key="route.id"
            class="transition-colors hover:text-gray-900"
          >
            <NuxtLink
              v-if="route.path"
              :to="route.path"
              class="px-6 py-4 relative block"
            >
              {{ route.name }}
            </NuxtLink>
            <a
              v-else
              :href="route.href"
              rel="noopener noreferrer"
              target="_blank"
              class="px-6 py-4 relative block"
            >
              {{ route.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { navMain } from '~/utils/navigation/docs'

export default {
  data() {
    return {
      navigation: navMain
    }
  }
}
</script>

<style lang="scss" scoped>
#sidebar-main-nav .link-exact-active {
  color: theme('colors', 'gray', '900');
  background-color: rgba(#f7f7f7, 1);
  padding-top: theme('spacing', '4');
  padding-bottom: theme('spacing', '4');
  border-radius: theme('rounded', '3');
}
</style>
