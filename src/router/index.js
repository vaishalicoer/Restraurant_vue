const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/menu', name: 'Menu', component: Menu },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/cart', name: 'Cart', component: Cart },
    { path: '/checkout', name: 'Checkout', component: Checkout },
    { path: '/login', name: 'Login', component: Login },
    { path: '/signup', name: 'Signup', component: Signup },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true }
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  // ✅ Global Navigation Guard
  router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('loggedIn')
    if (to.meta.requiresAuth && !loggedIn) {
      alert('You must be logged in to access admin panel.')
      next('/login')
    } else {
      next()
    }
  })
  
  export default router
  