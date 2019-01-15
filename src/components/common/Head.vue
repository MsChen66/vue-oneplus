<template lang="html">
  <div class="head-box">
    <ul class="head-top">
        <li class="head-l fa fa-reorder"></li>
        <li class="head-c fa fa-television"></li>
        <li class="head-r fa fa-shopping-bag"></li>
    </ul>
    <div class="nav-fixed">
        <nav class="nav container-text">
            <div class="nav-top"><i class="fa fa-times fa-2x"></i></div>
            <ul>
              <li class="user-brief-info">
                <a href="" class="info">欢迎访问一加官网，请<span class="text-blue">登录</span></a>
              </li>
              <li class="page">
                <a href="https://www.oneplus.com/cn/6t">OnePlus 6T <sup class="text-red" >New</sup></a>
              </li>
              <li class="page">
                <a href="https://www.oneplus.com/cn/6">OnePlus 6</a>
              </li>
              <li class="page">
                <a href="https://www.oneplus.com/cn/5T">商城</a>
              </li>
              <li class="page">
                <a href="https://www.oneplus.com/cn/5">品牌</a>
              </li>
              <li class="page">
                <a href="https://www.oneplus.com/cn/5">服务</a>
              </li>
              <li class="page">
                <a href="https://www.oneplus.com/cn/5">论坛</a>
              </li>

            </ul>
        </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Head",
};

</script>

<style lang="css">
.nav-fixed{display: none}
 .head-top{
   height: 3.5rem;
   width: 100%;
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   text-align: center;
   position: relative;
 }
 .head-l{
   justify-content: flex-start;
   color: #828282;
   font-size: 1.6rem;
   line-height: 3.5rem;
   margin: 0 1.5rem
 }
  .head-c{
   justify-content: center;
   color: #eb0028;
   font-size: 1.6rem;
   line-height: 3.5rem;
   margin: 0 1.5rem
 }
  .head-r{
   justify-content: flex-end;
   color: #828282;
   font-size: 1.3rem;
   line-height: 3.5rem;
   margin: 0 1.5rem
 }
 .nav-fixed .nav{
    height: 6s80px;
 }
.nav-fixed .nav-top{
  height: 4rem;
  width: 100%;
  background: #f6f6f6;
  position: absolute;
  top:0;
  left: 0;
}
.nav-fixed .nav-top i{
  margin: 1rem 1rem;
}
.nav-fixed ul{
  color: #101920;
  margin-bottom: 40px;
}
.nav-fixed ul li{
  color: #101920;
  font-size: 16px; 
  display: block; 
  min-width: 50px; 
  line-height: 50px; 
  height: 50px; 
}
.nav-fixed ul .user-brief-info{
  background: #f6f6f6;
  height:3rem;
  padding: 1rem;
  border:1px solid #f6f6f6;
}
.nav-fixed ul li{
  border:1px solid #f6f6f6;
  padding:0 1rem;
  
}
.text-red{
  margin-left: 2px;
  color: red
}
.text-blue{
  color:blue
}
</style>