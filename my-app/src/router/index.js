// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Education from '@/views/Education.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/Education', component: Education },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
