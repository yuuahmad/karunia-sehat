import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tentang',
      name: 'tentang',
      // route level code-splitting
      // this generates a separate chunk (tentang.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/tentang.vue')
    },
    {
      path: '/penghitung',
      name: 'penghitung',
      component: () => import('../views/penghitung.vue')
    },
    {
      path: '/daftar',
      name: 'daftar',
      component: () => import('../views/daftar.vue')
    }
  ]
})

export default router
