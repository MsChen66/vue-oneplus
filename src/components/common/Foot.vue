<template lang="html">
  <div class="foot-box">
    <div class="foot-bottom">
       <el-collapse accordion class="foot">
      <el-collapse-item title = "一加产品">
        <div class="cont">Oneplus6T</div>
        <div class="cont">Oneplus6</div>
        <div class="cont">Oneplus5T</div>
        <div class="cont">Oneplus5</div>
      </el-collapse-item>
      <el-collapse-item title="热门活动">
        <div class="cont">推荐有礼</div>
        <div class="cont">以旧换新</div>
        <div class="cont">Shot on OnePlus</div>
      </el-collapse-item>
      <el-collapse-item title="关于一加">
        <div class="cont">了解OnePlus</div>
        <div class="cont">加入OnePlus</div>
        <div class="cont">H2OS</div>
        <div class="cont">云服务</div>
        <div class="cont">预置应用公示</div>
      </el-collapse-item>
      <el-collapse-item title="服务支持">
        <div class="cont">购买帮助</div>
        <div class="cont">用户手册</div>
        <div class="cont">寄修服务</div>
        <div class="cont">服务中心</div>
        <div class="cont">联系我们</div>
      </el-collapse-item>
    </el-collapse>
    <div class="tel">
        <div class="phone">
          <i class="fa fa-volume-control-phone"></i>
          <span>400-888-1111</span>
        </div>
        <div class="online">
          <a href="">在线客服</a>
        </div>
        <div class="worktime"><p>周一至周日 9:00 - 22:00</p></div>
        <div class="weibo"></div>
        <div class="language"></div>
        <div class="feedback"></div>
    </div>
    <div class="footer-tail-cn">
       <div class="row">
          <div class="col-sm-8 col-xs-12">
            <p class="copy-right"><span class="no-wrap">© 2013-2018 OnePlus. All Rights Reserved.</span> <span class="no-wrap">(粤ICP备13080605号-4)</span></p><br>
            <a class="under-supervision" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030402001407" target="_blank" track-key="d56663b49c29ea630fdebd39ba0a9acb" et-attached="1"><img src="https://statics.oneplus.cn/ov/assets/images/footer/badge.png" alt="粤公网安备 44030402001407号">粤公网安备 44030402001407号</a>
          </div>
          <div class="col-sm-4 col-xs-12">
            <div class="certificate-container">
              <a class="certificate-badge" href="https://image01.oneplus.cn/shop/201811/13/1139/4ac3b42ccae6aa15de8ca8ce6df0140b.jpg" target="_blank" track-data="电子营业执照">
        <img src="https://image01.oneplus.cn/shop/201811/13/835/51638e8fd2593c56856278feb794b506.png" alt="电子营业执照" title="电子营业执照" width="83" height="30">
              </a>
              <a class="certificate-badge" href="https://ss.knet.cn/verifyseal.dll?sn=e14063044030050707awmq000000&amp;ct=df&amp;a=1&amp;pa=20151014" track-key="97fd6aef8e1b0f732c6abdfd2ffbb811" et-attached="1" track-data="可信网站" target="_blank">
        <img src="https://statics.oneplus.cn/ov/assets/images/footer/cnnic.png" width="83" height="30" alt="可信网站">
              </a>
            </div>
          </div>
        </div>
     </div>
  
    </div>
   </div>
</template>

<script>
export default {
  name: "Foot",
   data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
};
</script>

<style lang="css">
.foot-box {
  width: 100%;
  position: relative;
  bottom: 0;
  left: 0;
}
.foot-box .foot .cont{
    color: #101920;
    height: 3rem;
    line-height: 3rem;
    padding: 0 2rem;
    font-size: 1rem
}
.el-collapse-item__header{
  background: #f9f9f9;
  border-top: 0.15rem solid #f6f6f6;
}
.foot-box .tel{
  margin-top: 10px;
  width: 100%;
  text-align: center;
}
.foot-box .tel .phone{
    font-size: 20px;
    text-align: center;
    margin: 15px 0;
}
.foot-box .tel .online{
    margin: auto;
    color: #101920;
    font-size: 20px;
    margin: 15px 0; 
}
.foot-box .tel .online a{
      border:0.1rem solid #101920;
      padding: 0.5rem 2rem;
}
.foot-box .tel .worktime{
  color: #828282;
  font-size: 1rem;
  margin: 15px 0; 
}
.footer-tail-cn{
  text-align: center;
  padding: 20px 0;
}
</style>