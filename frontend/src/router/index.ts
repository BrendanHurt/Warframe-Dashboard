import { createRouter, createWebHistory } from 'vue-router'
import FoundryView from '../views/FoundryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FoundryView,
    },
  ],
})

export default router
