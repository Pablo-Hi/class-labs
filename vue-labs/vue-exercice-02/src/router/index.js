import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/johnnie&joe',
      name: 'johnnie&joe',
     
      component: () => import('../views/Johnnie&Joe.vue')
    },
    {
      path: '/beer&papajohns',
      name: 'beer&papajohns',
     
      component: () => import('../views/Beer&PapaJohns.vue')
    }
  ]
})

export default router
