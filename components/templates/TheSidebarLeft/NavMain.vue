<template>
  <div id="sidebar-main-nav">
    <ul v-for="category in navigation" :key="category.id" class="-mx-6">
      <li v-for="(routes, title) in category" :key="title">
        <h5
          class="
            text-2
            leading-1
            px-6
            tracking-4
            pb-6
            uppercase
            weight-700
            text-gray-50
          "
        >
          {{ title }}
        </h5>
        <ul class="text-gray-400 text-2 weight-500 leading-4 tracking-2 pb-14">
          <li
            v-for="route in routes"
            :key="route.id"
            class="transition-colors hover:text-gray-50"
          >
            <NuxtLink
              v-if="route.path"
              :to="route.path"
              class="px-6 py-5 relative flex items-center justify-between"
            >
              {{ route.name }}
              <span
                v-if="route.new"
                class="
                  hidden
                  py-1
                  px-2
                  text-0.6
                  tracking-5
                  text-sky-400
                  bg-sky-700 bg-opacity-40
                  leading-3
                  weight-600
                  rounded-2
                  xl:inline-block
                "
                >NEW</span
              >
              <span v-else class="hidden"></span>
            </NuxtLink>
            <a
              v-else
              :href="route.href"
              rel="noopener noreferrer"
              target="_blank"
              class="px-6 py-5 relative block"
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
  position: relative;
  font-weight: theme('weight', '600');
  padding-left: theme('spacing', '14');
  color: theme('colors', 'sky', '500');

  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 15px;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: theme('colors', 'sky', '500');
    animation: ping 2s cubic-bezier(0, 0, 0.58, 1) infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 15px;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background-color: theme('colors', 'sky', '500');
  }
}

@keyframes ping {
  75%,
  100% {
    opacity: 0;
    transform: scale3d(3.3, 3.3, 3.3);
  }
}
</style>
