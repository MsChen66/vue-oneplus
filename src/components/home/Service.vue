<template lang="html">
    <div class="service-box">
        <div class="service">
           <ul>
               <li>
                   <a href="">
                       <i class="i-7d"></i>
                       <span>7天无理由退货</span>
                   </a>
               </li>
               <li>
                   <a href="">
                       <i class="i-7d"></i>
                       <span>15天退货保障</span>
                   </a>
               </li>
               <li>
                   <a href="">
                       <i class="i-7d"></i>
                       <span>30天换货保障</span>
                   </a>
               </li>
               <li>
                   <a href="">
                       <i class="i-7d"></i>
                       <span>99元全场包邮</span>
                   </a>
               </li>
           </ul>
        </div>
    </div>
</template>

<script>
</script>

<style lang="css">
    .service-box{
        width: 100%;  
        background: #fff;
    }
    .service{
       width: auto;
       margin: auto 20px;
       display: flex;
   }
   .service ul{
        margin: 0 1rem
   }
    .service ul li{
       width: 50%;
       padding: 30px 0;
       float: left;
    }
    .service ul li a{
        display: block;
    }
    .service ul li a .i-7d{
       display: block;
       background: gray; 
       height: 80px;
       width: 80px;
    }
    .service ul li span {
    display: block;
    padding-top: 15px;
    width: 80px;
}
</style>
