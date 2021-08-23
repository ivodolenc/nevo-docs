---
position: 2
category: Getting started
title: Installation
description: Follow simple guides and learn how to integrate Nevo Framework into your project.
---

## Quick Start

To install `nevo` in an existing sass project, simply run:

```bash
# via npm
npm install --save-dev nevo

# via yarn
yarn add --dev nevo
```

After installation, <nuxt-link to="#include-nevo-in-your-project">include</nuxt-link> Nevo in your scss file. That's it!

## Integration Guides

The installation process may be slightly different, depending on your development environment. Here are guides for a few popular frameworks:

<integration-guides></integration-guides>

## Include Nevo in your project

Manage a flexible structure and decide what best suits your project. You can import everything or select only specific parts to create a unique environment. It’s up to you.

### Import Everything

So the easiest way is to import everything into your main scss file:

_The `@use` rule is the primary replacement for `@import`. More info [here](https://sass-lang.com/documentation/at-rules/use)._

```bash
assets/
└── styles/
    └── main.scss
```

```scss
// main.scss
@use 'nevo' as *;
```

By default, that will include all major parts (settings, base and utilities).

### Import Specific Part

For a more customized approach, you can import only what you really need:

```bash
assets/
└── styles/
    └── main.scss
```

```scss
// main.scss
@use 'nevo/settings' as *;
@use 'nevo/base' as *;
@use 'nevo/utilities' as *;
```

That setup above will also import everything, just like the previous example, but with additional flexibility.

To make development easier, especially for larger project, it's possible to split everything into separate files and that way improve code readability.

**Split everything into separate files**

Create a new scss files for each import and organize your styles.

```bash
assets/
└── styles/
    │── _base.scss
    │── _settings.scss
    │── _utilities.scss
    └── main.scss
```

```scss
// _base.scss
@use 'nevo/base' as *;
```

```scss
// _settings.scss
@use 'nevo/settings' as *;
```

```scss
// _utilities.scss
@use 'nevo/utilities' as *;
```

```scss
// main.scss
@use 'settings';
@use 'base';
@use 'utilities';
```

Only `settings` are required. `base` and `utilities` are optional, but with a complete setup you can take full advantage of the framework.
