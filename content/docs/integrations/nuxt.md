---
title: Nuxt.js
description: Learn how to install Nevo into Nuxt project.
position: 2
category: Integration Guides
---

## Create your project

If you don’t have one, create a new project. For more info on how to create a Nuxt project, follow the official [instructions](https://github.com/nuxt/create-nuxt-app).

```bash
# via npx
npx create-nuxt-app <my-project>

# via npm
npm init nuxt-app@latest <my-project>

# via yarn
yarn create nuxt-app <my-project>
```

## Setting up Nevo

To use `nevo` in a Nuxt project, we need to install required packages:

```bash
# via npm
npm install -D nevo sass sass-loader@10 fibers @nuxtjs/style-resources

# via npm
yarn add -D nevo sass sass-loader@10 fibers @nuxtjs/style-resources
```

After installation, create your style setup in the assets directory:

```bash
assets/
└── styles/
    │── _settings.scss
    └── main.scss
```

```scss
// _settings.scss
@use 'nevo/settings' as *;
```

```scss
// main.scss
@use 'nevo/base' as *;
@use 'nevo/utilities' as *;
```

Include previously created styles into nuxt.config.js file:

```js
// nuxt.config.js

export default {
  buildModules: ['@nuxtjs/style-resources'],

  css: ['~/assets/styles/main.scss'],

  styleResources: {
    scss: '~/assets/styles/_settings.scss'
  }
}
```

That's it! Run your project and start developing.
