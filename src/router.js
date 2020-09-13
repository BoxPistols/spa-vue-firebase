import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contents from './Contents.vue'
import Users from './components/Basic/Users'
import Parent from './components/Parent'
import TextCounter from './components/TextCounter'

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
    {
      path: '/Users',
      name: 'Users',
      component: Users,
    },
    {
      path: '/Parent',
      name: 'Parent',
      component: Parent,
    },
    {
      path: '/TextCounter',
      name: 'TextCounter',
      component: TextCounter,
    },
  ],
})
