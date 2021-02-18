import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
]

Vue.use(VueRouter)



const router = new VueRouter({
  routes
})

router.beforeEach((to, from,next) => {
  if (to.path == '/login') return next()
  const tokenStr = windows.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
 })

export default router
