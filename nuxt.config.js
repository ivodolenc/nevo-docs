import config from './config'

export default {
  target: 'static',

  modern: !config.isDev && 'client',

  components: false,

  loading: false,

  telemetry: false,

  globalName: config.nuxt.globalName,

  dir: {
    static: 'public'
  },

  server: {
    port: config.server.port,
    host: config.server.hostname
  },

  watch: ['~/config/*'],

  modules: [
    '@nuxt/content',
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/netlify-files',
    'nuxt-font-loader',
    'nuxt-purgecss'
  ],

  css: ['~/assets/styles/app.scss'],

  styleResources: {
    scss: '~/assets/styles/settings/_nevo-settings.scss'
  },

  plugins: ['~/plugins/vue-scrollactive.js'],

  head: {
    htmlAttrs: {
      lang: config.app.lang
    },

    bodyAttrs: {},

    /**
     * Corrects the page title when routes have a delayed transition
     * @link https://github.com/nuxt/vue-meta/issues/621
     */
    title: null,
    titleTemplate: null,

    meta: [
      {
        hid: 'charset',
        charset: config.app.charset
      },
      {
        hid: 'http-equiv',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width,initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: config.app.description
      },
      {
        hid: 'robots',
        name: 'robots',
        content:
          'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
      }
    ]
  },

  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active'
  },

  build: {
    publicPath: config.nuxt.publicPath,

    extractCSS: true,

    filenames: {
      app: ({ isDev }) =>
        isDev ? '[name].js' : `${config.nuxt.filename.app}/[contenthash:7].js`,
      chunk: ({ isDev }) =>
        isDev
          ? '[name].js'
          : `${config.nuxt.filename.chunk}/[contenthash:7].js`,
      css: ({ isDev }) =>
        isDev
          ? '[name].css'
          : `${config.nuxt.filename.css}/[contenthash:7].css`,
      img: ({ isDev }) =>
        isDev
          ? '[path][name].[ext]'
          : `${config.nuxt.filename.img}/[contenthash:7].[ext]`,
      font: ({ isDev }) =>
        isDev
          ? '[path][name].[ext]'
          : `${config.nuxt.filename.font}/[contenthash:7].[ext]`,
      video: ({ isDev }) =>
        isDev
          ? '[path][name].[ext]'
          : `${config.nuxt.filename.video}/[contenthash:7].[ext]`
    },

    templates: [
      {
        src: 'templates/app.html',
        dst: 'views/app.template.html'
      }
    ]
  },

  generate: {
    dir: 'dist',
    fallback: true // Error 404 page
  },

  publicRuntimeConfig: {
    app: {
      url: config.app.url,
      name: config.app.name,
      title: config.app.title,
      titleSeparator: config.app.titleSeparator,
      titleTemplate: config.app.titleTemplate,
      description: config.app.description,
      type: config.app.type
    },
    breakpoints: config.breakpoints,
    nevo: {
      version: config.nevo.version
    }
  },

  privateRuntimeConfig: {},

  pwa: {
    icon: {
      targetDir: config.nuxt.filename.icon,
      source: 'assets/favicons/icon.png',
      fileName: 'icon.png',
      sizes: [64, 192, 512]
    },

    meta: {
      author: config.app.author,
      mobileApp: true,
      ogType: false,
      ogTitle: false,
      ogSiteName: false,
      ogDescription: false
    },

    manifest: {
      name: config.app.name,
      short_name: config.app.shortName,
      description: config.app.description,
      lang: config.app.lang,
      theme_color: config.app.themeColor,
      background_color: config.app.backgroundColor,
      orientation: 'portrait',
      display: 'standalone',
      useWebmanifestExtension: false
    }
  },

  robots: {
    UserAgent: () => ['*'],
    Disallow: () => [
      `${config.nuxt.publicPath}${config.nuxt.filename.font}/`,
      `/${config.nuxt.filename.font}/`
    ],
    Sitemap: () => [`${config.app.url}/sitemap.xml`]
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: config.app.url,
    gzip: true,
    exclude: ['/.git'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    }
  },

  netlifyFiles: {
    copyExistingFiles: false,

    netlifyToml: {
      build: {
        publish: 'dist',
        command: 'npm run generate'
      },

      headers: [
        {
          for: '/*',
          values: {
            'Referrer-Policy': 'origin',
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block'
          }
        },
        {
          for: `${config.nuxt.publicPath}*`,
          values: {
            'Cache-Control': 'public, max-age=31536000, immutable'
          }
        },
        {
          for: '/sw.js',
          values: {
            'Cache-Control': 'no-cache'
          }
        },
        {
          for: '/favicon.ico',
          values: {
            'Cache-Control': 'public, max-age=86400'
          }
        }
      ],

      redirects: [
        {
          from: `${config.app.baseUrl}/*`,
          to: `${config.app.url}/:splat`,
          status: 301
        }
      ]
    }
  },

  purgeCSS: {
    whitelistPatterns: [
      /^link(|-exact)-active$/, // Nuxt link classes
      /^lazy(load|loading|loaded)$/ // Lazysizes
    ]
  },

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: false
      }
    }
  },

  fontLoader: {
    url: '/fonts/font-face.css'
  }
}
