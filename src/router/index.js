import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/page/home'
import first from '@/page/first'
import second from '@/page/second'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/first',
      name: 'first',
      component: first
    },
    {
      path: '/second',
      name: 'second',
      component: second
    },
  ]
})
