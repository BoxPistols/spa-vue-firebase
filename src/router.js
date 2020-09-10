import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contents from './Contents.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/Contents',
      name: 'Contents',
      component: Contents,
    },
  ],
})
