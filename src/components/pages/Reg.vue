<template lang="html">
    <div class="reg-box">
       <div class="login-main">
           <div class="login-content">
               <div class="login-form">
                   <h5>注册</h5>
                   <div class="input-box">
                       <input id="input-tel" name="input-tel" type="text" placeholder="手机号" autocomplete="off" autofocus="autofocus" class="input">
                       <input type="password" placeholder="密码">
                    </div>
                    <div class="login-btn">
                        <button class="login-reg-btn">创建账号</button>
                    </div>
               </div>
               <div class="reg">
                       <span><a href="javascript:;" >登录</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Reg",
};
</script>

<style lang="css">
    .reg-box{
        background: #f6f6f6;
    }
    .reg-main{
       
    }
    .login-main .login-content{
        padding: 20px 20px 53px;
    }
    .login-form{
        text-align: center
    }
    .login-form h5{
        font-weight: 700;
        color: #101920;
        font-size: 1.5rem
    }
    .login-form .input-box{
        width: 80%;
       margin: 0.5rem auto;
    }
    .login-form .input-box input{
       display: block;
        margin: 0.5rem auto;
        height: 2rem;
        width: 100%;
        border: 1px solid  gray;
        font-size: 16px;
        font-weight: 100;
        padding: 0 0.5rem;
    }
    .login-form .input-box input:focus {
        outline:none;
        border: 1px solid #eb0028;
    }
    .login-btn{
        margin: 1rem 0.6rem;
        width: 100%
    }
     .login-reg-btn{
        background-color: #eb0028;
        color: #fff;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        width: 86%;
        margin-bottom: 0;
        font-weight: 300;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        background-image: none;
        white-space: nowrap;
        border: 1px solid transparent;
        border-radius: 2px;
        padding: 0 1em;
        user-select: none;
        text-decoration: none;
    }
    .login-content .reg{
        text-align: center;
        margin: 2rem
    }
    .login-content .reg span{
        color: #09c;
        font-weight: 300;
        font-size: 14px;
        line-height: 1.7;
    }
    .login-content .reg span a{
         color: #09c;
    }
</style>
