<template>
  <main class="relative max-w-screen-xxl mx-auto px-8 sm:px-11 xl:px-12">
    <section class="min-h-screen flex items-center justify-center">
      <div class="my-28">
        <TextHero />
        <ButtonsHero />
      </div>
    </section>
    <FooterHero />
  </main>
</template>

<script>
import TextHero from './TextHero'
import ButtonsHero from './ButtonsHero'
import FooterHero from './FooterHero'

export default {
  components: {
    TextHero,
    ButtonsHero,
    FooterHero
  },

  layout: 'default',

  head() {
    return {
      title:
        this.$config.app.title +
        this.$config.app.titleSeparator +
        this.$config.app.titleTemplate
    }
  }
}
</script>
