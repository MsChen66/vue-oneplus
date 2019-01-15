<template>
    <div class="home-box">
        <Banner />
        <Activity />
        <Promos />
        <Service />
    </div>
</template>
<script>
import Banner from './Banner'
import Activity from './Activity'
import Promos from './Promos'
import Service from './Service'

export default {
  name: 'Home',
  components: {
      Banner,Activity,Promos,Service
    },
    
}
</script>
