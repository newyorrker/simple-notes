import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/edit/:note_id',
    name: 'Edit',
    component: () => import('../views/EditOrCreate.vue')
  },
  {
    path: '/create',
    name: 'Create',
    component: () => import('../views/EditOrCreate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
