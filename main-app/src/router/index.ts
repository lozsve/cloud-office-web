import { RouteRecordRaw, createRouter, createWebHistory, RouterOptions } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/layout/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/layout/index.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
} as RouterOptions)

router.beforeEach((to, from, next) => {
  const token: string = window.sessionStorage.getItem('token') || ''
  if (to.name !== 'Login' && !token) next({ name: 'Login' })
  else next()
})
