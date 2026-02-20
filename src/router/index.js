import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Home // Placeholder - replace with actual component
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Home // Placeholder - replace with actual component
  },
  {
    path: '/about',
    name: 'About',
    component: Home // Placeholder - replace with actual component
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home // Placeholder - replace with actual component
  },
  {
    path: '/services',
    name: 'Services',
    component: Home // Placeholder - redirect to services section
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router