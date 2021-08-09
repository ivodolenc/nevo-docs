const options = {
  '@fullhuman/postcss-purgecss': {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],

    styleExtensions: ['.css'],

    safelist: {
      standard: ['body', 'html', 'nuxt-progress', '__nuxt', '__layout'],
      deep: [
        /-(leave|enter|appear)(|-(to|from|active))$/, // Normal transitions
        /^nuxt-link(|-exact)-active$/, // Nuxt link classes
        /^link(|-exact)-active$/, // Nuxt link classes
        /^(?!cursor-move).+-move$/, // Move transitions
        /data-v-.*/, // Keep scoped styles
        /^lazy(load|loading|loaded)$/ // Lazysizes
      ]
    },

    extractors: [
      {
        extractor: content => {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            ''
          ) // Remove inline vue styles
          return contentWithoutStyleBlocks.match(/[\w-.:/]+(?<!:)/g) || []
        },
        extensions: ['html', 'vue', 'js']
      }
    ]
  }
}

const purgecss = process.env.NODE_ENV === 'development' ? null : options

export default purgecss
