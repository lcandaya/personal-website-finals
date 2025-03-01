// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Education from '@/views/Education.vue';
import Resources from '@/views/Resources.vue';
import AboutMe from '@/views/AboutMe.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/Education', component: Education },
  { path: '/Resources', component: Resources },
  { path: '/AboutMe', component: AboutMe },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
