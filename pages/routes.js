const routes = [
  {
    path: '/',
    component: '~/pages/home/index.vue',
    name: 'index'
  },
  {
    path: '/docs',
    component: '~/pages/docs/index.vue',
    name: 'docs'
  },
  {
    path: '/docs/:slug',
    component: '~/pages/docs/_slug.vue',
    name: 'docs-slug'
  },
  {
    path: '/features',
    component: '~/pages/features/index.vue',
    name: 'features'
  },
  {
    path: '/sponsor',
    component: '~/pages/sponsor/index.vue',
    name: 'sponsor'
  }
]

export default routes
