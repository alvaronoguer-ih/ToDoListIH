import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import DashboardPage from '../views/DashboardPage.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    meta: {
      requiereAuth: true,
    },
  },
  {
    path: '/',
    name: 'auth',
    component: LoginPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
