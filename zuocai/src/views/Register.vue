<template>
  <div class="login">
   <section class="zhuce">
      <div class="zhuce_main">
        <div @keyup.13="shoujisignin()" class="zhuce_box"   v-show="isShow1">
            <ul class="zhuce_box_top">
                <li class="shoujizhuce" id="btnTab0">
                    <span>手机注册</span>
                </li>
                <li class="youxiangzhuce" @click="show1()">
                    <span>邮箱注册</span>
                </li>
            </ul>
            <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>手机号码：</span>
                    <input @blur="zhanghucf()" v-model="phone" id="Mobile" type="text"placeholder="请输入手机号码" class="input_text1">
                    <div class="shoujiyanzheng" v-show="phoneshow">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png" v-show="imgshow1">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshow2" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="phoneText"></span>
                    </div>
                </div>
            </div>
             <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>用户昵称：</span>
                    <input @blur="shoujinicheng" v-model="uname" id="Mobile" type="text"placeholder="6-8位汉字/数字/英文字母" class="input_text1">
                    <div class="shoujiyanzheng" v-show="unameshow">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png" v-show="imgshow3">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshow4" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="unameText"></span>
                    </div>
                </div>
            </div>
             <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>设置密码：</span>
                    <input  @blur="mimayanzhengsj" v-model="upwd" id="Mobile" type="text"placeholder="请输入6-10个阿拉伯数字" class="input_text1">
                    <div class="shoujiyanzheng" v-show="upwdshow">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png"v-show="imgshow5">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshow6" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="upwdText">请输入正确的密码</span>
                    </div>
                </div>
            </div>
             <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>确认密码：</span>
                    <input @blur="cfupwdyanzheng()" v-model="cfupwd" id="Mobile" type="text"placeholder="请再次输入密码" class="input_text1">
                    <div class="shoujiyanzheng" v-show="cfupwdshow">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png"v-show="imgshow7">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshow8" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="cfupwdText">密码和确认密码不一致</span>
                    </div>
                </div>
            </div>
            <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>图形验证：</span>
                    <input  @blur="tuxingyanzheng" v-model="tuxingyz" id="Mobile" type="text"placeholder="4位验证码" class="input_text1 input_size">
                    <img id="imgcode" src="http://127.0.0.1:3000/img/register_img/imgcode.jpg"
                    style=" margin-left: 0.4rem; height: 1.7rem; float: left; cursor: pointer;">
                    <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png" style="margin-top:0.5rem" v-show="imgshow9">
                </div>
            </div>
            <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>手机验证：</span>
                    <input id="Mobile" type="text"placeholder="4位验证码" class="input_text1 input_size">
                    <input v-model="codeMsg"  @click="getCode" :disabled="codeDisabled"type="button" value="获取验证码" class="input_button" id="GetMCheckCode">
                    <div class="shoujiyanzheng" style="display:none;">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png">
                        <span id="MobileErrorC">密码不正确</span>
                    </div>
                </div>
            </div>
            <div class="zhuce_ljzc">
                <input @click="suoding&&shoujisignin()" id="btnMRegister" type="button" v-model="value"  class="input_button" style="height: 1.7rem; cursor: pointer;">
                <input id="MAgree" type="checkbox" class="input_checkbox" @click="check($event)">
                <span>我已阅读并接受<router-link to="/zocaifuwu" >佐卡伊服务条款</router-link></span>
            </div>
        </div>
        


        <div  @keyup.13="youxiangsignin()" class="zhuce_box" v-show="isShow2" >
            <ul class="zhuce_box_top">
                <li class="shoujizhuce shoujizhucenone" id="btnTab0"  @click="show2()">
                    <span>手机注册</span>
                </li>
                <li class="youxiangzhuce youxiangzhucenone">
                    <span>邮箱注册</span>
                </li>
            </ul>
            <div class="zhuce_box_one">
                <div class="zhuce_one_yonghu">
                    <span>邮箱：</span>
                    <input @blur="youxiangzhanghucf()" v-model="email" id="Mobile" type="text"placeholder="请输入邮箱号码" class="input_text1">
                    <div class="shoujiyanzheng"  v-show="emailshow">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png"v-show="imgshowyx">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshowyx1" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="emailText">请填写正确的邮箱，以便接收订单通知，找回密码等</span>
                    </div>
                </div>
            </div>
             <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>用户昵称：</span>
                    <input v-model="uname1" @blur="youxiangnicheng()" id="Mobile" type="text"placeholder="6-8位汉字/数字/英文字母" class="input_text1">
                    <div class="shoujiyanzheng" v-show="unameshowed"">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png"v-show="imgshowfasle">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshowtrue" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="unameTexted">请您输入用户昵称</span>
                    </div>
                </div>
            </div>
             <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>设置密码：</span>
                    <input @blur="mimayanzhengyx" v-model="upwd1" id="Mobile" type="text"placeholder="请输入6-10个阿拉伯数字" class="input_text1">
                    <div class="shoujiyanzheng" v-show="upwdshowyx">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png"v-show="imgshowyxy">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="imgshowyxyx" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="upwdTextyx">请您输入正确的密码</span>
                    </div>
                </div>
            </div>
             <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>确认密码：</span>
                    <input @blur="cfupwdyanzhengyx()" v-model="cfupwd1" id="Mobile" type="text"placeholder="请再次输入密码" class="input_text1">
                    <div class="shoujiyanzheng" v-show="cfupwdshowyx">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png"
                        v-show="cfimgshowyx">
                        <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png" v-show="cfimgshowyxx" style="width:1rem;height:1rem">
                        <span id="MobileErrorC" v-text="cfupwdTextyxyx">密码和确认密码不一致</span>
                    </div>
                </div>
            </div>
            <div class="zhuce_box_one" style="display: block;">
                <div class="zhuce_one_yonghu">
                    <span>验证码：</span>
                    <input  id="Mobile" type="text"placeholder="6位验证码" class="input_text1 input_size">
                    <input v-model="codeMsg1" :disabled="codeDisabled1"  @click="getCode1" 
                    type="button" value="获取验证码" class="input_button" id="GetMCheckCode">
                    <div class="shoujiyanzheng" style="display:none;">
                        <img src="http://127.0.0.1:3000/img/register_img/shouji_yanzheng.png">
                        <span id="MobileErrorC">验证码有误</span>
                    </div>
                </div>
            </div>
            <div class="zhuce_ljzc">
                <input @click="suoding1&&youxiangsignin()" id="btnMRegister" type="button" v-model="value1" value="立即注册" class="input_button" style="height: 1.7rem; cursor: pointer;">
                <input id="MAgree" type="checkbox" class="input_checkbox">
                <span>我已阅读并接受
                <router-link to="/zocaifuwu" style="color: #577fbb">佐卡伊服务条款</router-link></span>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
 export default{
    data(){
         return {
             /*显示隐藏切换控制----只为形象，勿喷*/
                isShow1:true,
                isShow2:false,
             /*所有注册对象----只为形象，勿喷*/
                phone:"",
                uname:"",
                upwd:"",
                cfupwd:"",
                tuxingyz:"",
                uname1:"",
                upwd1:"",
                cfupwd1:"",
                email:"",
            /*倒计时对象----只为形象，勿喷*/
                // 是否禁用d倒计时按钮
                codeDisabled: false,
                codeDisabled1: false,
                // 倒计时秒数
                countdown: 60,
                countdown1: 60,
                // 按钮上的文字
                codeMsg: '获取验证码',
                codeMsg1: '获取验证码',
                // 定时器
                timer: null,
                timer1: null,
                /*验证提示对象*/
                phoneText:"请填写正确的手机号码，以便接收订单通知，找回密码等",
                phoneshow:false,
                imgshow1:true,
                imgshow2:false,
                unameshow:false,
                unameText:"请您输入昵称",
                imgshow3:true,
                imgshow4:false,
                imgshow5:true,
                imgshow6:false,
                upwdshow:false,
                imgshow7:true,
                imgshow8:false,
                upwdText:"",
                cfupwdText:"",
                cfupwdshow:false,
                imgshow9:false,
                tuxingyz:"",
                /*锁定登录*/
                suoding:true,
                value:"立即注册",
                value1:"立即注册",
                suoding1:true,

                /*邮箱注册区域*/
                emailshow:false,
                emailText:"",
                imgshowyx:true,
                imgshowyx1:false,
                unameTexted:"",
                unameshowed:"",
                imgshowtrue:false,
                imgshowfasle:true,
                upwdshowyx:false,
                imgshowyx:false,
                imgshowyxyx:true,
                upwdTextyx:"",
                cfupwdshowyx:false,
                cfupwdTextyxyx:"",
                cfimgshow:false,
                cfimgshow:true,
                cfimgshowyx:false,
                cfimgshowyxx:true,
                imgshowyxy:false,
                /*判断服务条款是否被阅读/勾选*/
                checked:"",
          }
        },
    created(){
    console.log(this.$store.state.currentUser);
      },
    methods:{
        check(e){
            let checked=e.target.checked;
            this.checked=checked;
            console.log(this.checked);
        }
        ,
        show1(){
            this.isShow1=false
            this.isShow2=true
        },
        show2(){
            this.isShow1=true
            this.isShow2=false
        },
        /*手机号注册按钮*/
        
        shoujisignin(){
            if(this.checked==false){
            alert("请仔细阅读杨晓旭服务条款并勾选");
        }else{
            this.axios.post(
          "http://127.0.0.1:3000/user/register",
          Qs.stringify({
            phone:this.phone,
            uname:this.uname,
            upwd:this.upwd,
            cfupwd:this.cfupwd,
            tuxingyz:this.tuxingyz
          })
        ).then(res=>{  
        if(res.data=="注册成功"){
            this.value=res.data
           this.$router.push("/login")
            location.reload([true])
        }else{
            this.value=res.data
            console.log(res)
        }
     })
     }
    },
     /*邮箱注册按钮*/
    youxiangsignin(){
        this.axios.post(
          "http://127.0.0.1:3000/user/registers",
          Qs.stringify({
            email:this.email,
            uname:this.uname1,
            upwd:this.upwd1,
            cfupwd:this.cfupwd1
          })
        ).then(res=>{
            console.log(res)
            if(res.data=="注册成功"){
            this.value=res.data
           this.$router.push("/index")
            location.reload([true])
        }else{
            this.value1=res.data
            console.log(res)
        }
     })
    },
    /*检测手机用户昵称是否输入格式正确*/
    shoujinicheng(){
        var nichenguanme=this.uname;
        console.log(nichenguanme)
         var nicheng=/^[\w\u4e00-\u9fa5]{6,8}$/
         if(nicheng.test(this.uname)&&this.uname!=""){
             this.suoding=true
             this.unameshow=true,
             this.imgshow4=true,this.imgshow3=false
                this.unameText="用户昵称可用"
         }else{
             this.suoding=false
             this.unameshow=true,
              this.imgshow4=false,this.imgshow3=true
                this.unameText="请检查您的昵称，6-8位汉字/数字/英文字母"
         }
    },
     /*检测邮箱用户昵称是否输入格式正确*/
    youxiangnicheng(){
        var nichenguanme=this.uname1;
        console.log(nichenguanme)
         var nicheng=/^[\w\u4e00-\u9fa5]{6,8}$/
         if(nicheng.test(this.uname1)&&this.uname1!=""){
             this.suoding1=true
             this.unameshowed=true,
             this.imgshowtrue=true,this.imgshowfasle=false
                this.unameTexted="用户昵称可用"
         }else{
             this.suoding1=false
             this.unameshowed=true,
              this.imgshowtrue=false,this.imgshowfasle=true
                this.unameTexted="请检查您的昵称，6-8位汉字/数字/英文字母"
         }
    },
    /*检查注册是否重复-检测账号是否输入格式正确*/
    zhanghucf(){
        var shouji =/^[1][0-9][0-9]{9}$/;
        var shoujiphone=this.phone;
             this.axios.post(
          "http://127.0.0.1:3000/user/registercf",
          Qs.stringify({
            phone:this.phone,
          })
        ).then(res=>{
        this.phoneshow=true
        this.phoneText=res.data
        if(res.data=="账号可用"&&shouji.test(shoujiphone)){
            this.suoding=true
        this.imgshow1=false,this.imgshow2=true
        }else if(res.data=="该账号已注册,请重新输入"){
            this.suoding=false
            this.imgshow1=true,this.imgshow2=false
                this.phoneText=res.data
        }
        else{         
            this.suoding=false
            this.imgshow1=true,this.imgshow2=false
            this.phoneText="请输入11位正规手机号"
            }
        })       
    },
    youxiangzhanghucf(){
        var youxiang = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
        var youxiangemail=this.email;
             this.axios.post(
          "http://127.0.0.1:3000/user/registercfs",
          Qs.stringify({
            email:this.email,
          })
        ).then(res=>{
        this.emailshow=true
        this.emailText=res.data
        if(res.data=="账号可用"&&youxiang.test(youxiangemail)){
            this.suoding1=true
        this.imgshowyx=false,
        this.imgshowyx1=true
        this.emailText="输入合法通过"
        }else if(res.data=="该账号已注册,请重新输入"){
            this.suoding1=false
            this.imgshowyx=true,this.imgshowyx1=false
                this.phoneText=res.data
        }
        else{         
            this.suoding1=false
            this.imgshowyx=true,this.imgshowyx1=false
            this.emailText="请输入合法邮箱"
            }
        })       
    },
    /*检测手机注册界面密码是否输入正确------------杨晓旭精品制作*/
    mimayanzhengsj(){
        var mima=/^\d{6,10}$/;
        var upwd=this.upwd;//获取密码
        if(mima.test(upwd)){
            this.suoding=true
            this.upwdshow=true
            this.imgshow5=false
            this.imgshow6=true
            this.upwdText="密码格式正确"
        }else{
            this.suoding=false
            this.upwdshow=true
            this.imgshow5=true
            this.imgshow6=false
            this.upwdText="密码格式错误，请输入6-10位数字密码"
        }
    },
    /*检测邮箱注册界面密码是否输入正确------------杨晓旭精品制作*/
    mimayanzhengyx(){
        var mima=/^\d{6,10}$/;
        var upwd=this.upwd1;//获取密码
        if(mima.test(upwd)){
            this.suoding1=true
            this.upwdshowyx=true
            this.imgshowyxy=false
            this.imgshowyxyx=true
            this.upwdTextyx="密码格式正确"
        }else{
            this.suoding1=false
            this.upwdshowyx=true
            this.imgshowyxy=true
            this.imgshowyxyx=false
            this.upwdTextyx="密码格式错误，请输入6-10位数字密码"
        }
    },
    /*检测手机注册界面重复密码是否输入正确------------杨晓旭精品制作*/
    cfupwdyanzheng(){
        if(this.cfupwd!=this.upwd){
            this.suoding=false
            this.cfupwdshow=true
            this.imgshow7=true
            this.imgshow8=false
            this.cfupwdText="重复密码输入错误，请检查信息"
     }
     else{
         if(this.cfupwd!=""){
            this.suoding=true
            this.cfupwdshow=true
            this.imgshow7=false
            this.imgshow8=true
            this.cfupwdText="重复密码正确" 
            }
     }
    },
    /*检测邮箱注册界面重复密码是否输入正确------------杨晓旭精品制作*/
    cfupwdyanzhengyx(){
        console.log(this.cfupwd1)
        if(this.cfupwd1!=this.upwd1){
            this.suoding1=false
            this.cfupwdshowyx=true
            this.cfimgshowyx=true
            this.cfimgshowyxx=false
            this.cfupwdTextyxyx="重复密码输入错误，请检查信息"
     }
     else {
         if(this.cfupwd1!=""){
            this.suoding1=true
            this.cfupwdshowyx=true
            this.cfimgshowyx=false
              this.cfimgshowyxx=true
            this.cfupwdTextyxyx="重复密码正确" 
            }  
        }
    },
    /*检测图形验证码是否输入正确------------杨晓旭精品制作*/
    tuxingyanzheng(){
        if(this.tuxingyz!="4371"){
              this.suoding=false
                this.imgshow9=true
        }else{
             this.suoding=true
             this.imgshow9=false
        }
    },
    /*发送验证码倒计时----能力到此，勿喷-只为形象逼真*/
    /*手机号注册界面*/
    // 获取验证码
        getCode() {
        // 验证码60秒倒计时
        if (!this.timer) {
        this.timer = setInterval(() => {
        if (this.countdown > 0 && this.countdown <= 60) {
            this.countdown--;
            if (this.countdown !== 0) {
            this.codeMsg = "重新发送(" + this.countdown + ")";
            } else {
            clearInterval(this.timer);
            this.codeMsg = "获取验证码";
            this.countdown = 60;
            this.timer = null;
            this.codeDisabled = false;
                }
            }
        }, 1000)
      }
    },
    /*邮箱注册界面*/
        getCode1() {
        // 验证码60秒倒计时
        if (!this.timer1) {
        this.timer1 = setInterval(() => {
        if (this.countdown1 > 0 && this.countdown1 <= 60) {
            this.countdown1--;
            if (this.countdown1 !== 0) {
            this.codeMsg1 = "重新发送(" + this.countdown1 + ")";
            } else {
            clearInterval(this.timer1);
            this.codeMsg1 = "获取验证码";
            this.countdown1 = 60;
            this.timer1 = null;
            this.codeDisabled1 = false;
                }
            }
        }, 1000)
      }
    },
  },
    mounted() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    },
 }
</script>
<style scoped>
.zhuce{
    width: 100%;
    float: left;
    height: 35rem;
    background: url(http://127.0.0.1:3000/img/register_img/zhuce.jpg) no-repeat center center;
}
.zhuce_main{
    width: 59rem;
    margin: auto;
    height: 35rem;
}
.zhuce .zhuce_main .zhuce_box{
    width: 20.55rem;
    padding: 1.5rem 2.5rem;
    background: #fff;
    filter: alpha(opacity=90);
    -moz-opacity: 0.9;
    -khtml-opacity: 0.9;
    opacity: 0.9;
    margin-top: 3rem;
    float: right;
    /* border:0.05rem solid red;*/
    }
.shoujizhuce{
    float: left;
    width: 10.25rem;
    height:2.25rem;
    background: url(http://127.0.0.1:3000/img/register_img/shoujizhuce.png) no-repeat center center;
}
#btnTab0 span,.youxiangzhuce span{
    float: left;
    margin-left: 4.25rem;
    margin-top: 0.65rem;
    font-size: 0.9rem;
    color: #333;
    font-family: Microsoft YaHei;
}
.youxiangzhuce{
    float: left;
    width: 10.3rem;
    height: 2.25rem;
    background: url(http://127.0.0.1:3000/img/register_img/youxiangzhuce.png) no-repeat center center;
}
.zhuce_box .zhuce_box_one{
    width: 20.55rem;
    float: left;
    font-size: 0.7rem;
}
.zhuce_box .zhuce_box_one .zhuce_one_yonghu{
    width: 20.55rem;
    float: left;
    margin-top: 1rem;
}
.zhuce_box .zhuce_box_one .zhuce_one_yonghu>span{
    width: 4rem;
    float: left;
    padding-top: 0.5rem;
}
.input_text1{
    width: 16.35rem;
    font-size: 0.7rem;
    height: 1.3rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    float: left;
    border: 0.05rem solid #cae7ff;
    text-indent: 0.25rem;
    color: #666;
    background: #f2f8fd;
}
.zhuce_one_yonghu .shoujiyanzheng {
    margin-left: 4rem;
    float: left;
    width: 16.55rem;
    margin-top: 0.25rem;
}
.shoujiyanzheng img{
    float: left;
}
.shoujiyanzheng span{
    float: left;
    padding-top: 0.05rem;
    margin-left: 0.25rem;
    color: #ff0000;
    font-size: 0.6rem;
}  
.zhuce_one_yonghu>.input_size{
        width: 11.35rem;
}
#GetMCheckCode{
  width: 4.5rem;
    margin-left: 0.5rem;
    float: left;
    background: #577fbb;
    border: none;
    height: 1.7rem;
    color: #fff;
    font-weight: bold;
    font-size: 0.7rem;
    text-align: center;
}
.zhuce_box .zhuce_ljzc{
    width: 22.05rem;
    float: left;
    margin-top: 1rem;
} 
.zhuce_box .zhuce_ljzc .input_checkbox{    
    float: left;
    margin-left: 5rem;
    margin-top: 1.125rem;
}
.zhuce_box .zhuce_ljzc .input_button{
    width: 22.05rem;
    float: left;
    background: #577fbb;
    border: none;
    height: 1.6rem;
    color: #fff;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
}
.zhuce_box .zhuce_ljzc>span{
    float: left;
    margin-top: 1rem;
}
.zhuce_box .zhuce_box_top .shoujizhucenone{
    background: url(http://127.0.0.1:3000/img/register_img/shoujizhucenone.png) no-repeat center center;
}
.zhuce_box .zhuce_box_top .youxiangzhucenone{
    background: url(http://127.0.0.1:3000/img/register_img/youxiangzhucenone.png) no-repeat center center;
}
</style>