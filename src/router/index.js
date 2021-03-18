import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'
/*import * as path from "path";*/

const routes = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'street_courts',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'map',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
