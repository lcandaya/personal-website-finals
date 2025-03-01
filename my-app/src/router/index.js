// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '@/views/Welcome.vue';
import Education from '@/views/Education.vue';
import Resources from '@/views/Resources.vue';
import AboutMe from '@/views/AboutMe.vue';
import Gallery from '@/views/Gallery.vue';
import Guestbook from '@/views/Guestbook.vue';

const routes = [
  { path: '/', component: Welcome },
  { path: '/Education', component: Education },
  { path: '/Resources', component: Resources },
  { path: '/AboutMe', component: AboutMe },
  { path: '/Gallery', component: Gallery },
  { path: '/Guestbook', component: Guestbook },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
