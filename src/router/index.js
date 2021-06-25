import { createRouter, createWebHistory } from '@ionic/vue-router';

import Tabs from '../views/toolbar/Toolbar.vue'
import NewService from "@/views/service/NewService.vue";
import Login from "@/views/user/Login";

import store from "@/store";

const routes = [
  {
    path: '/',
    redirect: '/tabs/dashboard'
  },
  {
    path: '/tabs/',
    component: Tabs,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/toolbar/TabDashboard.vue')
      },
      {
        path: 'list',
        component: () => import('@/views/toolbar/TabServiceList.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/toolbar/TabSearch.vue')
      },
      {
        path: 'other',
        component: () => import('@/views/toolbar/TabOther.vue')
      }
    ]
  },
  {
    path: '/service/',
    component: NewService,
    meta: { requiresAuth: true },
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
    ],
  },
  {
    path: '/customer/:id',
    component: () => import('@/views/customer/CustomerDetailsView'),
    meta: { requiresAuth: true }
  },
  {
    path: '/car/:id',
    component: () => import('@/views/car/CarDetails'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { requiresUnAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth &&  !store.getters['isUserAuthenticated']) {
    next('/login');
  } else if (to.meta.requiresUnAuth && store.getters['isUserAuthenticated']) {
    next('/tabs/dashboard');
  } else {
    next();
  }
});

export default router;
