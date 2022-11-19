import { RouteRecordRaw, createRouter, createWebHistory, RouterOptions } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/a',
    name: 'A',
    component: () => import('../views/a.vue')
  },
  {
    path: '/b',
    name: 'B',
    component: () => import('../views/b.vue')
  }
]

export const routeFun = (name: string) => {
  const router = createRouter({
    history: createWebHistory(name),
    routes,
    scrollBehavior(to: any, from: any) {
      if (to.path !== from.path) {
        return { top: 0 }
      }
    }
  } as RouterOptions)

  const realBaseRoute = `/${name}`

  router.beforeEach((to, from, next) => {
    if (typeof window.history.state?.current === 'string') {
      window.history.state.current = window.history.state.current.replace(new RegExp(realBaseRoute, 'g'), '')
    }
    next()
  })

  router.afterEach(() => {
    if (typeof window.history.state === 'object') {
      window.history.state.current = realBaseRoute + (window.history.state.current || '')
    }
  })

  return router
}
