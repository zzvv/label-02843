import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FlashSale from '../views/FlashSale.vue'
import Brands from '../views/Brands.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/flash-sale',
    name: 'FlashSale',
    component: FlashSale,
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

export default router


