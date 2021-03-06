import { createRouter, createWebHistory } from 'vue-router';

//Routes
import About from '../views/test.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('../views/design.vue'),
  },
  {
    path: '/test',
    meta: { title: 'test' },
    component: About,
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/About.vue')
  },
  {
    path: '/:page',
    component: NotFound,
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
