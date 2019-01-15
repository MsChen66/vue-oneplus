<template lang="html">
    <div class="cart-box">
       <div class="my-cart">
           <div class="my-cart-head">
					<em>我的购物车</em>
					<span>全场满99免运费</span>
			</div>
            <div class="goods-list">
               <div class="goods-list-box">
                   <div class="list-body">
                       <div class="main-goods ">
                           <ul class="cart-product">
                                <li>
                                    <a href="" target="_blank"><img class="goods-img" src="https://image01.oneplus.cn/ebp/201810/28/96/6dc09ed83f7320092f463fdc39a77e19_100_100.png" alt="OnePlus 6T 悦耳套装"></a>
                                    <span class="name-info">
                                        <span><a href=''>OnePlus 6T 悦耳套装</a></span>
                                    </span>
                                    <span class="fa fa-times delete-btn" ></span>
                                </li>
                                <li class="price">
                                    <div>
                                        <p>¥ 229.00</p>
                                    </div>
                                </li>
                                <li>
                                    <ul class="suit-details-list">
                                            <li class="suit-details" >
                                                <span>一加银耳2T 黑色</span>
                                            </li>
                                            <li class="suit-details" >
                                                <span>OnePlus 6T 3D钢化玻璃保护膜 黑色</span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="goods-number">
                                    <span class="goods-num">
                                        <span class="goods-minus disabled">-</span>
                                        <input type="text" value="1">
                                        <span class="goods-plus disabled">+</span>
                                    </span>
                                </li>
                                <li class="total-price">¥ 229.00</li>
                            </ul>
                        </div>
                   </div>
               </div>
            </div>

            <div class="total-panel">
               <div class="total-list">
                   <div class="total-content">
                       <p class="freight-tip">
		                    已选择 <span class="total-goods-num">1</span> 件商品
	                    </p>
                        <dl>
                            <dt>购物车商品小计</dt>
                            <dd class="all-price">¥ 229.00</dd>
                            <dt>运费</dt>
                            <dd>¥ 0</dd>
                        </dl>
                        <dl class="amount-to">
                            <dt>总价</dt>
                            <dd class="amount-price">¥ 229.00</dd>
                        </dl>
                    </div>
                    <div class="checkout-btn-bar">
                        <a href="https://store.oneplus.com/cn/order/tocheckout"><span id="goOrderBtn">去结算</span></a>
                        <a class="go-store-btn" href="https://store.oneplus.com/cn" >继续购物</a>
                        
                    </div>
               </div>
            </div>

       </div>
    </div>
</template>

<script>
export default {
  name: "Cart",
};
</script>

<style lang="css">
.cart-box {
  overflow: hidden;
}
.my-cart-head {
  padding: 20px 0 20px 10px;
  border-bottom: 1px solid #dfdfdf;
  color: #333;
  background: #f6f6f6;
}
.my-cart-head em {
  font-size: 16px;
}
.my-cart-head span {
  font-size: 12px;
  color: #999;
}
.goods-list {
}
.goods-list .goods-list-box {
  font-size: 14px;
  width: 100%;
}
.goods-list .goods-list-box .list-body {
}
.list-body .main-goods {
  padding: 15px 5.33333% 13px 26.66667%;
  position: relative;
  color: #333;
}
.main-goods .cart-product {
  position: relative;
}
.cart-product li:first-child {
  width: 38.68132%;
  text-align: left;
}
li:first-child .name-info {
  padding-left: 0;
  font-size: 14px;
  padding-right: 20px;
  line-height: 1.4;
}
.cart-product .goods-img {
  width: 95px;
  left: -100px;
  top: 0;
  position: absolute;
}
.cart-product li {
  padding-top: 2px;
  padding-bottom: 2px;
}
.goods-list .price p {
  display: inline-block;
  margin-right: 5px;
  color: #666;
}
.goods-list .suit-details-list li {
  font-size: 12px;
  list-style: disc inside;
  height: auto;
  line-height: 1.8;
  color: #999;
}
.goods-number {
  border: 1px solid #c1c1c1;
  width: 5rem;
  margin-top: 1rem;
}
.goods-number .disabled {
  padding: 0.5rem;
  font-size: 700;
}
.goods-number input {
  border: none;
  width: 1rem;
  text-align: center;
}
.cart-product li.total-price {
  text-align: right;
  font-size: 14px;
}
.suit-details-list {
  border-bottom: 1px solid #c1c1c1;
  padding-bottom: 0.5rem;
}
.delete-btn {
  position: absolute;
  right: 0;
  top: 2px;
  color: #c1c1c1;
}

.total-panel {
  border-top: none;
  margin-top: 6px;
  margin-bottom: 0;
  background-color: #fff;
  padding: 10px;
  position: relative;
  background: #fff;
}
.total-list {
  float: none;
  width: 100%;
  margin-right: 0;
  text-align: left;
}
.total-content {
  text-align: left;
}
.total-list .freight-tip {
  position: static;
  margin-left: 0;
  border-bottom: 1px solid #dfdfdf;
  padding-bottom: 10px;
  line-height: 1.8;
}
.total-goods-num {
  font-size: 14px;
  color: #333;
}

.total-list dl {
  line-height: 1.6;
  font-size: 14px;
}
.total-list dl dt {
  float: left;
  color: #999;
  font-size: 12px;
  text-align: left;
}
.total-list dl dd {
  float: right;
  color: #333;
  text-align: right;
}
.total-list dl dt {
  float: left;
  color: #999;
  font-size: 12px;
  text-align: left;
  width: 50%;
  padding-top: 10px;
}
.total-list dl dd {
  float: right;
  color: #333;
  text-align: right;
  width: 50%;
  padding-top: 10px;
  font-size: 16px;
}
.total-list .amount-to {
  margin-top: 10px;
}
.total-list .amount-to dt {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}
.total-list .amount-to dd {
  font-size: 30px;
  vertical-align: bottom;
}

.total-list .checkout-btn-bar {
  position: relative;
  min-height: 50px;
  margin: 10px 0;
}
#goOrder {
  position: absolute;
  top: 0;
}
#goOrderBtn {
  display: inline-block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  background: #eb0028;
  color: #fff;
  border: 1px solid #d70226;
  border-radius: 2px;
  transition: color 0.15s ease 0s;
  position: relative;
  z-index: 1;
}
.go-store-btn {
  display: inline-block;
  height: 48px;
  width: 100%;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
  background: 0 0;
  color: #333;
  border: 1px solid #d6d6d6;
  position: relative;
  z-index: 1;
  margin: 1rem 0;
}
</style>
