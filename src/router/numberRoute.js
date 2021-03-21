const routes = [
  {
    path: '/1',
    name: 'Page 1',
    meta: {
      title: 'Page 1'
    },
    component: () => import('../views/1.vue')
  },
  {
    path: '/2',
    name: 'Page 2',
    meta: {
      title: 'Page 2',
      layout: 'no-header'
    },
    component: () => import('../views/2.vue')
  },
  {
    path: '/3',
    name: 'Page 3',
    meta: {
      title: 'Page 3',
      layout: 'no-navbar'
    },
    component: () => import('../views/3.vue')
  },
  {
    path: '/4',
    name: 'Page 4',
    meta: {
      title: 'Page 4',
      layout: 'no-footer'
    },
    component: () => import('../views/4.vue')
  },
  {
    path: '/5',
    name: 'Page 5',
    meta: {
      title: 'Page 5',
      layout: 'nothing'
    },
    component: () => import('../views/5.vue')
  }
]

export default routes
