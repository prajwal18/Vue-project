import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue';
import Form from '../components/Form.vue';
import Contact from '../components/Contact.vue';
import About from '../components/About.vue';
import Directives from '../components/Directives.vue';
import ToDo from '../components/ToDo.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/form',
    name: 'form',
    component: Form
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/practice',
    name: 'practice',
    component: Directives
  },
  {
    path: '/todo',
    name: 'todo',
    component: ToDo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router





/**
 * Remove conformation                        --Done
 * Make Nft cars to an individual componenet  --Done
 * search filter                              --Done
 * Vue lifecylce
 */