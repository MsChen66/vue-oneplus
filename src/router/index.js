import Vue from 'vue'
import Router from 'vue-router'

import Head from '../components/common/Head'
import Foot from '../components/common/Foot'
import List from '../components/common/List'
import Banner from '../components/home/Banner'
import Product from '../components/common/Product'
import Home from '../components/home/Home'
import Activity from '../components/home/Activity'
import Promos from '../components/home/Promos'
import Service from '../components/home/Service'
import Reg from '../components/pages/Reg'
import Cart from '../components/pages/Cart'
// import Detail from '../components/pages/Detail'
import Login from '../components/pages/Login'
import Mine from '../components/pages/Mine'
import Error from '../components/pages/Error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home,
      name: 'home'
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/reg',
      component: Reg,
      name: 'reg'
    },
    {
      path: '/list',
      component: List,
      name: 'list'
    },
    {
      path: '/mine',
      component: Mine,
      name: 'mine'
    },
    {
      path: '/product',
      component: Product,
      name: 'product'
    },
    {
      path: '/cart',
      component: Cart,
      name: 'cart'
    },
    // {
    //   path: '/detail/:id',
    //   component: Detail,
    //   name: 'detail'
    // },
    {
      path: '/error',
      component: Error,
      name: 'error'
    },
    {
      path: '**',
      redirect: '/error'
    }
  ]
})
