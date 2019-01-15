<template lang="html">
    <div class="login-box">
       <div class="login-main">
           <div class="login-content">
               <div class="login-form">
                   <h5>登录</h5>
                   <div class="input-box">
                       <input type="text" placeholder="手机／邮箱／用户名">
                       <input type="password" placeholder="密码">
                    </div>
                    <div class="login-btn">
                        <button class="login-reg-btn">登录</button>
                    </div>
               </div>
               <div class="reg">
                   <ul>
                       <span><a href="javascript:;" >手机短信登录</a></span>
                       <span>|</span>
                       <span><a href="javascript:;" >注册</a></span>
                       <span>|</span>
                       <span><a href="javascript:;" >忘记密码</a></span>
                   </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="css">
    .login-box{
        background: #f6f6f6;
    }
    .login-main{
       
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
