<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-12">
    <NuxtLink to="/docs/integrations/vue">
      <div
        class="
          flex
          items-center
          justify-center
          bg-dark-600
          rounded-6
          transition-colors
          hover:bg-dark-500
        "
      >
        <div class="flex flex-col py-12">
          <LogoVue class="h-17" />
          <p class="text-3 text-center text-gray-50 weight-500 mt-10">Vue.js</p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/docs/integrations/nuxt">
      <div
        class="
          flex
          items-center
          justify-center
          bg-dark-600
          rounded-6
          transition-colors
          hover:bg-dark-500
        "
      >
        <div class="flex flex-col py-12">
          <LogoNuxt class="h-17" />
          <p class="text-3 text-center text-gray-50 weight-500 mt-10">
            Nuxt.js
          </p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/docs/integrations/gridsome">
      <div
        class="
          flex
          items-center
          justify-center
          bg-dark-600
          rounded-6
          transition-colors
          hover:bg-dark-500
        "
      >
        <div class="flex flex-col py-12">
          <LogoGridsome class="h-17" />
          <p class="text-3 text-center text-gray-50 weight-500 mt-10">
            Gridsome.js
          </p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/docs/integrations/react">
      <div
        class="
          flex
          items-center
          justify-center
          bg-dark-600
          rounded-6
          transition-colors
          hover:bg-dark-500
        "
      >
        <div class="flex flex-col py-12">
          <LogoReact class="h-17" />
          <p class="text-3 text-center text-gray-50 weight-500 mt-10">
            React.js
          </p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/docs/integrations/next">
      <div
        class="
          flex
          items-center
          justify-center
          bg-dark-600
          rounded-6
          transition-colors
          hover:bg-dark-500
        "
      >
        <div class="flex flex-col py-12">
          <LogoNext class="h-17" />
          <p class="text-3 text-center text-gray-50 weight-500 mt-10">
            Next.js
          </p>
        </div>
      </div>
    </NuxtLink>
    <NuxtLink to="/docs/integrations/gatsby">
      <div
        class="
          flex
          items-center
          justify-center
          bg-dark-600
          rounded-6
          transition-colors
          hover:bg-dark-500
        "
      >
        <div class="flex flex-col py-12">
          <LogoGatsby class="h-17" />
          <p class="text-3 text-center text-gray-50 weight-500 mt-10">
            Gatsby.js
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
import LogoVue from './icons/LogoVue'
import LogoNuxt from './icons/LogoNuxt'
import LogoGridsome from './icons/LogoGridsome'
import LogoReact from './icons/LogoReact'
import LogoNext from './icons/LogoNext'
import LogoGatsby from './icons/LogoGatsby'

export default {
  components: {
    LogoVue,
    LogoNuxt,
    LogoGridsome,
    LogoReact,
    LogoNext,
    LogoGatsby
  }
}
</script>
