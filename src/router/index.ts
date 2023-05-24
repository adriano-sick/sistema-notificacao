import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: HomeView
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/LoginView.vue')
    }
  ]
});

export default router;
