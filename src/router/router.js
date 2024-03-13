import { createRouter, createWebHistory } from 'vue-router';

import Home from "../views/home";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    meta: {
      layout: "auth",
    },
    component: () => import ("@/views/register.vue"),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: "auth",
    },
    component: () => import("../views/login.vue"),
  },
  {
    path: '/productdetail',
    name: 'ProductDetail',
    meta: {
      layout: "auth",
    },
    component: () => import("../components/productDetail.vue"),
  },
  {
    path: '/admin/create',
    name: 'AdminCreate',
    meta: {
      layout: "auth",
    },
    component: () => import("../admin/form.vue"),
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      layout: "auth",
    },
    component: () => import("../admin/list.vue"),
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {
      layout: "auth",
    },
    component: () => import("../views/profile.vue"),
  },
  {
    path: '/logout',
    name: 'Logout',
    meta: {
      layout: "auth",
    },
    component: () => import("../views/logout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
