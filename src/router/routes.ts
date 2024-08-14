import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/RawLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/LandingPage.vue') }],
    meta: {},
  },
  {
    path: '/impressum',
    component: () => import('layouts/RawLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/ImprintPage.vue') }],
    meta: {
      title: 'Impressum',
    },
  },
  {
    path: '/datenschutz',
    component: () => import('layouts/RawLayout.vue'),
    children: [{ path: '', component: () => import('src/pages/PrivacyPage.vue') }],
    meta: { title: 'Datenschutz' },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
    meta: { title: 'Seite nicht gefunden' },
  },
];

export default routes;
