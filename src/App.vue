<template>
  <div id="app">
    <Head />
    <!-- <Home /> -->
    <!-- <List /> -->
    <!-- <Product /> -->
    <!-- <Login /> -->
    <!-- <Reg /> -->
    <!-- <Cart /> -->
    <!-- <Mine /> -->
    <router-view></router-view>
    <Foot />
  </div>
</template>

<script>

import Head from './components/common/Head'
import Foot from './components/common/Foot'
// import Product from './components/common/Product'
//  import Home from './components/home/Home'
// import List from './components/pages/List'
// import Login from './components/pages/Login'
// import Reg from './components/pages/Reg'
// import Cart from './components/pages/Cart'
// import Mine from './components/pages/Mine'
export default {
  components: {
      //Home List  Product Login Reg Cart Mine
      Head,Foot
    },
    
}
</script>

<style>
</style>
