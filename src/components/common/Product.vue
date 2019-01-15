<template lang="html">
    <div class="product-box">
        <div class="product">
            <div class="detail-content">
                <div class="width-wrap">
                    <ul class="img-show">
                        <li style="z-index:1"><img src="https://image01.oneplus.cn/ebp/201810/26/70/27560794579b80fcb876ae5f8800c685.png">
                        </li>
                        <li style="z-index:2"><img src="https://image01.oneplus.cn/ebp/201810/26/1417/8289272e38fd5e385e133241c743cf28.png">
                        </li>
                    </ul>
                </div>
                <div class="product-show">
                    <div class="title-show">
                        <h3>OnePlus 6T 悦耳套装</h3>
                    </div>
                        <ul>
                            <li class="pro-list">
                                <div class="list-header">
                                    <div class="title-headline">OnePlus 6T 3D钢化玻璃保护膜</div>
                                    <div class="title-version">1个版本</div>
                                    <div class="title-select ">黑色</div>
                                </div>
                                <span class="list-img"><img src="https://image01.oneplus.cn/ebp/201810/27/1310/f74eb34edf8d395c800ee229259b3d17_200_200.png"></span>
                            </li>
                            <li class="pro-list">
                                <div class="list-header">
                                    <div class="title-headline">一加云耳机</div>
                                    <div class="title-version">1个版本</div>
                                    <div class="title-select ">黑色</div>
                                </div>
                                <span class="list-img"><img src="https://image01.oneplus.cn/ebp/201810/28/800/12c096a121ab9a86d8ac9b02dc3d7a4c_200_200.png"></span>
                            </li>
                        </ul>
                    </div>
                </div> 
                <div class="product-buy">
                    <div class="pro-price-buy">
                        <div class="buy-price">
                            <span class="old-price">¥248.00</span><span class="now-price">¥229.00</span>
                        </div>
                        <div class="join-cart">
                            <a class="buy-btn" href="javascript:;" id="buyBtn">加入购物车</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Product",
};

</script>

<style lang="css">
.detail-content{
    padding-top: 80px;
    background: #f6f6f6;
}
.detail-content .width-wrap{
    width: 90%;
    padding-bottom:0.5rem; 
    margin: 0 auto;
    position: relative;
    height: 22rem;
    
}
.detail-content .width-wrap .img-show {
}
.detail-content .width-wrap .img-show li{
    position: absolute ;
}
.detail-content .width-wrap img{
    width: 100%
} 
.detail-content .title-show{
     padding:0 1rem;
}
.detail-content .title-show h3{
    font-size: 1.2rem;
    padding: 0.5rem 0;
    margin-bottom: 10px;
    border-bottom: 0.1rem solid #ccc;
    text-align: start
}

.product-show{
}
.product-show .pro-list{
    display: flex;
    justify-content: space-between;
    position: relative;
    background: #fff;
    border-bottom: 0.1rem solid #f6f6f6
}
 .list-header{
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-left: 30px;
    line-height: 28px;
    text-align: left;
    justify-content: center;
    flex: 1;
    padding: 20px 0;
    margin-left: 20px;
}
 .title-headline{
    line-height: 28px;
    text-align: left;
    font-size: 1.1rem;
}
 .title-version{
    line-height: 28px;
    text-align: left;
    font-size: 0.8rem;
    color: #999;
}
.title-select{
    line-height: 28px;
    text-align: left;
    font-size: 0.9rem;
    color: #09c;
}
.list-img{
        width: 100px;
display: inline-flex;
    align-items: center;
    margin-right: 10px;
    opacity: 1;
    transform: translate3d(0,0,0);
}
.list-img img{
    width: 100%
} 
.pro-price-buy{
    padding: 20px 20px 60px;
    background: #f6f6f6
}
.product-buy .buy-price{
    margin-bottom: 10px;
    font-size: 24px;
}
.product-buy .buy-price .old-price{
   font-size: 16px;
    color: #999;
    text-decoration: line-through;
    margin-right: 15px;
}
.product-buy .join-cart{

}
.product-buy .join-cart .buy-btn{
    width: 100%;
    display: inline-block;
    height: 56px;
    line-height: 56px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    background: #eb0028;
    color: #fff;
    border: 1px solid #d70226;
    border-radius: 2px;
}
</style>
