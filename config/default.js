export default {
  isDev: process.env.NODE_ENV === 'development',

  nuxt: {
    routerBase: '/',
    globalName: 'nuxt',
    publicPath: '/_nuxt/',

    filename: {
      app: 'scripts',
      chunk: 'scripts',
      css: 'styles',
      img: 'images',
      font: 'fonts',
      video: 'videos',
      icon: 'icons'
    }
  },

  app: {
    name: 'Nevo Framework',
    shortName: 'Nevo',
    description:
      'A modern SASS framework for building responsive user interfaces.',
    author: 'Ivo Dolenc',

    title: 'Nevo',
    titleSeparator: ' — ',
    titleTemplate:
      'A modern SASS framework for building responsive user interfaces.',

    charset: 'utf-8',
    lang: 'en-US',
    locale: 'en_US',
    type: 'website',
    themeColor: '#171717',
    backgroundColor: '#f5f5f5'
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1440px'
  },

  nevo: {
    version: '1.9.0'
  }
}
