import Vue from 'vue'
import VueRouter from 'vue-router'
import Benvinguda from '@/views/Benvinguda.vue'
import Pressupost from '@/views/Pressupost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'benvinguda',
    component: Benvinguda
  },
  {
    path: '/pressupost',
    name: 'pressupost',
    component: Pressupost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
