import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'
import NewService from "@/views/service/NewService.vue";

const routes = [
  {
    path: '/',
    redirect: '/tabs/dashboard'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/TabDashboard.vue')
      },
      {
        path: 'list',
        component: () => import('@/views/TabCarList.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/TabSearch.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  },
  {
    path: '/service/',
    component: NewService,
    children: [
      {
        path: '',
        redirect: '/service/new'
      },
      {
        path: 'new',
        component: () => import('@/views/service/NewService.vue')
      },
      {
        path: 'edit',
        component: () => import('@/views/service/EditService.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
