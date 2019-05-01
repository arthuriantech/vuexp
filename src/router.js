import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Index from './views/Index'
import PcView from './views/PcView'
import Basket from './views/Basket'
import Checkout from './views/Checkout'
import Thanks from './views/Thanks'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  //base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/pc/:productId',
      name: 'PCView',
      component: PcView,
      props: true
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ]
})
