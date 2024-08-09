import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/RawLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/LandingPage.vue') }],
  },
  {
    path: '/impressum',
    component: () => import('layouts/RawLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ImprintPage.vue') }],
  },
  {
    path: '/datenschutz',
    component: () => import('layouts/RawLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/PrivacyPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
