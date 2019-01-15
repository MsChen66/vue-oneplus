<template lang="html">
    <div class="banner-box">
      <mt-swipe :auto="4000">
        <mt-swipe-item class="banner-img1">
            <div class="banner-show">
              <h2><span class="title1" style="">OnePlus 6T 迈凯伦定制版<br class="hidden-xs"></span>
                <span class="title2">
                  <span style="">以速度之名</span>
                     <span class="title2-text"> Warp 闪充 30  |  10GB 超大内存  |  McLaren 设计灵感</span>
                </span>
              </h2>
              <h4 class="title3">￥4599</h4>
              <h3></h3>
              <a href="https://www.oneplus.com/cn/mclaren" class="button btn-lg  title-btn"><span>了解更多</span></a>
              <p class="title5" style="font-weight:500">12月25日 10:00 全速开售</p>
              <a href="https://www.oneplus.com/cn/mclaren" class="learn-more-cta" style="color: #fff; ">
              </a>
            </div>
        </mt-swipe-item>
        <mt-swipe-item class="banner-img2">
          <div class="banner-show" >
              <h2><span class="title1" style="">OnePlus 6T <br></span>
                <span class="title2">
                <span style="">全速旗舰 一触即发</span>
                     <span class="title2-tex"></span>
                </span></h2>
              <h4 class="title3">￥ 3399 起</h4>
              <h3></h3>
              <a href="https://rush.oneplus.com/cn/oneplus6t?from=homepage" class="title-btn" ><span>立即购买</span></a>
              <p class="title5" style="font-weight:500"></p>
              <a href="https://www.oneplus.com/cn/6t?from=homepage" class="learn-more-cta">
                <span style="font-size:18px;">了解更多</span>
              </a>
            </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
</script>

<style lang="css">
.banner-box{
  height: 45rem;
}
.banner-img1{
  height: 5rem;
  width: 100%;
  background: url(https://image01.oneplus.cn/shop/201812/10/277/a5259f8494ab42dda7809da431d96c31.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}
.banner-img2{
  height: 5rem;
  width: 100%;
  background:url(https://image01.oneplus.cn/shop/201811/04/5/e295e77deb403b4f7d3a43084df8e697.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.banner-show{
  color: #fff; 
  border-color: #fff;
  left: 18%;
  text-align: center;
  margin-top: 2rem
}

.banner-show h2{
  font-size: 24px;
  margin-bottom: 0.5rem;
}
.banner-show h2 span {
    display: block;
    text-align: center;
}
.banner-show h2 .title2 span{
    display: block;
    text-align: center;
    font-size: 1.8rem;
}
.banner-show h2 .title2 .title2-text{
    display: block;
    text-align: center;
    font-size: 0.9rem;
}
.banner-show h4{
    font-size: 1.8rem;
    text-align: center;
}

.title-btn{
  color: #fff; 
  border-color: #fff;
}

.mint-swipe-indicator{
  width: 2.5rem;
  height: 0.2rem;
  border-radius: 0;
  margin: 0 0.5rem
}
</style>
