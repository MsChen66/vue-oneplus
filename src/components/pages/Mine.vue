<template lang="html">
  <div class="mine-box">
    <div class="content">
      <div class="user-hd">
			    <div class="my-avatar">
			        <a href="#填写个人修改头像地址">
							<img src="https://image01.oneplus.cn/shop/201610/10/1982/1f2e6df4c7c0542667ca331a09eec2f4.jpg" alt="">        	
			            
			        </a>
			    </div>                
			    <div class="my-nickname">
			        <span>
           				 <a href="https://account.oneplus.com/cn">陈卷卷</a>
			        </span>
			    </div>

			</div>
      <div class="user-bd">
        <div class="user-aside">
            <div class="user-menu">
                <dt>个人中心</dt>
                <dd><a href="javascript:;"><i class="fa fa-file-text "></i>我的订单</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-tag "></i>优惠劵</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-file-text "></i>礼品劵</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-map-o "></i>邀请码 </a></dd>
                <dd><a href="javascript:;"><i class="fa fa-map-marker "></i>收货地址</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-gift "></i>我的奖品</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-money "></i>推荐返利</a></dd>
            </div>
             <div class="user-menu">
                <dt>售后服务</dt>
                <dd><a href="javascript:;"><i class="fa fa-file-text "></i>一加加多保</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-tag "></i>退货单</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-file-text "></i>换货单</a></dd>
                <dd><a href="javascript:;"><i class="fa fa-map-o "></i>维修单 </a></dd>
            </div>
        </div>
        <div class="user-content">
            <div class="logout">
                <a href="javascript:;"><i class="fa fa-power-off"></i>退出登录</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine"
};
</script>

<style lang="css" scoped>
.mine-box{
    background: #f3f3f3;
}
.user-hd {
  padding: 20px 0;
  text-align: center;

}
.user-hd .my-avatar {
  width: 60px;
  height: 60px;
  margin: auto;
  position: relative;
}
.user-hd .my-avatar img {
  border-radius: 50%;
  width: 100%;
}
.user-hd .my-nickname {
  padding: 20px 0 0;
  font-size: 14px;
}

.user-bd {
  width: 100%;
}
.user-bd .user-aside {
  width: 100%;
}
.user-bd .user-aside .user-menu {
  margin-bottom: 10px;
  background: #fbfafa;
}
.user-bd .user-aside .user-menu dt {
  padding-left: 12px;
}
.user-aside .user-menu dt {
  font-size: 12px;
  height: 60px;
  line-height: 60px;
  color: #666;
}
.user-bd .user-aside .user-menu dd {
  border-bottom: 1px solid #ededed;
  font-weight: 300;
  line-height: 1.5;
  font-size: 14px;
}
.user-bd .user-aside .user-menu a {
    padding: 10px 0;
    color: #333;
    font-size: 12px;
}
.user-bd .user-aside .user-menu i {
    margin-left: 12px;
    opacity: .5;
    font-size: 18px;
    padding: 0.8rem 0.5rem; 
}
.user-content {
    width: 100%;
}
.user-bd .logout {
    padding: 10px 10px 20px;
    text-align: center;
    font-size: 14px;
}
.user-bd .logout a {
    display: block;
    height: 50px;
    line-height: 50px;
    background: #ccc;
}
.user-bd .logout i {
    vertical-align: middle;
    margin-right: 5px;
    display: inline-block;
    width: 14px;
    height: 14px;
}
</style>
