import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/how',
  },
  {
    path: '/how',
    name: 'HowItWorks',
    component: () => import(/* webpackChunkName: "HowItWorks" */ '@/views/HowItWorks.vue'),
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import(/* webpackChunkName: "AboutUs" */ '@/views/AboutUs.vue'),
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: () => import(/* webpackChunkName: "ContactUs" */ '@/views/ContactUs.vue'),
  },
  {
    path: '/login',
    name: 'LogIn',
    component: () => import(/* webpackChunkName: "LogIn" */ '@/views/LogIn.vue'),
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import(/* webpackChunkName: "SignUp" */ '@/views/SignUp.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
