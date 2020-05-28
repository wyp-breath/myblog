import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import cmsLogin from '../views/CMS/Login.vue'
import cmsIndex from '../views/CMS/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/cms/login',name: 'cmsLogin',component: cmsLogin},
  {path: '/cms/cmsindex',name: 'cmsIndex',component: cmsIndex},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
