import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Menu from '../views/Menu.vue'
import Contact from '../views/Contact.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu', name: 'Menu', component: Menu },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
