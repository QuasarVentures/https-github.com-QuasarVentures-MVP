const routes = [
  {
    path: '/',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/login.vue'),
        meta: { icon: 'PropertyPurchase.png' }
      },
      {
        path: '/login',
        component: () => import('pages/login.vue'),
        meta: { icon: 'PropertyPurchase.png' }
      },
      {
        path: '/register',
        component: () => import('pages/register.vue'),
        meta: { icon: 'PropertyPurchase.png' }
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/AuthLayout.vue'),
    meta: { auth: true },
    children: [
      {
        path: '/dashboard',
        component: () => import('pages/dashboard.vue'),
        meta: { icon: 'Waiter.png' }
      },
      {
        path: '/gigs',
        component: () => import('pages/gigs/gigs-list.vue'),
        meta: { icon: 'DeliveryMan.png' }
      },
      {
        path: '/gigs/create',
        component: () => import('pages/gigs/gigs-create-edit.vue'),
        meta: { icon: 'DeliveryMan.png' }
      },
      {
        path: '/gigs/:id/edit',
        component: () => import('pages/gigs/gigs-create-edit.vue'),
        meta: { icon: 'DeliveryMan.png' }
      },
      {
        path: '/users',
        component: () => import('pages/users/users-list.vue'),
        meta: { icon: 'Farmer.png' }
      },
      {
        path: '/profile',
        component: () => import('pages/users/profile.vue'),
        meta: { icon: 'Farmer.png' }
      },
      {
        path: '/profile/edit',
        component: () => import('pages/users/profile-edit.vue'),
        meta: { icon: 'Farmer.png' }
      },
      {
        path: '/stats',
        component: () => import('pages/stats.vue'),
        meta: { icon: 'PresentingProject.png' }
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
