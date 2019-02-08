const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/register', component: () => import('pages/register.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    meta: { auth: true },
    children: [
      {
        path: '/dashboard',
        component: () => import('pages/dashboard.vue')
      },
      {
        path: '/gigs',
        component: () => import('pages/gigs/gigs-list.vue')
      },
      {
        path: '/gigs/create',
        component: () => import('pages/gigs/gigs-create-edit.vue')
      },
      {
        path: '/gigs/:id/edit',
        component: () => import('pages/gigs/gigs-create-edit.vue')
      },
      {
        path: '/users',
        component: () => import('pages/users/users-list.vue')
      },
      {
        path: '/stats',
        component: () => import('pages/stats.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
