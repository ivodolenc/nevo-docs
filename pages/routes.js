const routes = [
  {
    name: 'index',
    path: '/',
    component: 'pages/home/index.vue'
  },
  {
    name: 'docs',
    path: '/docs',
    component: 'pages/docs/index.vue'
  },
  {
    name: 'docs-slug',
    path: '/docs/:slug',
    component: 'pages/docs/_slug.vue'
  },
  {
    name: 'docs-integrations-slug',
    path: '/docs/integrations/:slug',
    component: 'pages/docs/integrations/_slug.vue'
  },
  {
    name: 'features',
    path: '/features',
    component: 'pages/features/index.vue'
  },
  {
    name: 'sponsor',
    path: '/sponsor',
    component: 'pages/sponsor/index.vue'
  }
]

export default routes
