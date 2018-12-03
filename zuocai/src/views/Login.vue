<template>
  <div class="login">
    <section class="denglu" @keyup.13=" signin()">
      <div class="denglu_main">
          <div class="denglu_box">
              <div class="denglu_box_bottom" style="display:block;">
                  <div class="denglu_box_bottom_one">
                      <h1>会员登入</h1>
                      <span>
                          <router-link to="/register">免费注册</router-link>
                      </span>
                  </div>
                  <div class="denglu_box_bottom_two">
                    <input @blur="sh_yxBlur" id="user_name" type="text" placeholder="手机号码/邮箱"             v-model="sh_yx"  class="input_zhanghu" style="background-image:url(http://127.0.0.1:3000/img/login_img/input_zhanghu.jpg) no-repeat center center">
                   
                    <!--登录账户验证-->
                    <div class="input_zhanghu_yanzheng" v-show="show">
                      <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng.png" alt="">
                      <span>账户名不存在，请重新输入</span>
                    </div>
                    <div class="input_zhanghu_yanzheng" v-show="dengluyanzheng" >
                      <img :style="dengluyanzheng1" v-show="dengluyanzheng1_1" src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png"alt="">
                      <img :style="dengluyanzheng1"  v-show="dengluyanzheng1_2" src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng3.png"alt="">
                      <span v-text="dengluyanzheng2"></span>
                    </div>


                    <input  @blur="upwdBlur()" id="user_pwd" type="password"  placeholder="密码" v-model="upwd" class="input_mima" >
                    
                    
                     <!--登录密码验证-->
                    <div class="input_zhanghu_yanzheng"  v-show="show1">
                      <img src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng.png" alt="">
                      <span>密码错误，请重新输入</span>
                    </div>
                    <div class="input_zhanghu_yanzheng" v-show="mimayanzheng" >
                      <img :style="mimayanzheng1" v-show="mimayanzheng1_1" src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng1.png"alt="">
                      <img :style="mimayanzheng1"  v-show="mimayanzheng1_2" src="http://127.0.0.1:3000/img/login_img/input_zhanghu_yanzheng3.png"alt="">
                      <span v-text="mimayanzheng2"></span>
                    </div>
                  </div>
                <div class="denglu_box_bottom_three"> 
                  <input type="checkbox" id="IsAuto" class="input_checkbox">	
                  <span class="denglu_box_bottom_three_span1">自动登入</span>
                  <span class="denglu_box_bottom_three_span2">
                    <a href="#">忘记密码</a>
                 </span>
                </div>
                <div class="denglu_box_bottom_four">
                  <input type="button" id="btnLogin" class="input_button"  @click="suodingdenglu&&signin()" v-model="dlts" style="cursor:pointer;">	
                </div>
                <div class="denglu_box_bottom_five">
                  <p>其他方式登陆</p>
                  <a href="#" class="denglu_qq"></a>	
                  <a href="#" class="denglu_weixin"></a>	
                  <a href="#" class="denglu_weibo"></a>	
                  <a href="#" class="denglu_zhifubao"></a>	
                </div>
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
            showshow:false,
         sh_yx:"",
          upwd:"",
          dlts:"立即登录",
           /*锁定登录按钮data*/
          suodingdenglu:false,
           /*账号验证data*/
          show:false,
          dengluyanzheng:false,
          dengluyanzheng1:"width:0.9rem",
          dengluyanzheng2:"输入正确",
          dengluyanzheng1_1:false,
          dengluyanzheng1_2:false,
          /*密码验证data*/
          show1:false,
          mimayanzheng:false,
          mimayanzheng1_1:false,
          mimayanzheng1_2:false,
          mimayanzheng1:"width:0.9rem",
          mimayanzheng2:"输入正确",
        }
      },
        /*账户失去焦点验证*/
    methods:{
        sh_yxBlur(){
            this.show1=false
            this.show=false
        var shouji =/^[1][0-9][0-9]{9}$/; //手机验证规则  
        var youxiang = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/ //邮箱验证规则 
        var sh_yx=this.sh_yx;//获取手机号或邮箱号码
        if(shouji.test(sh_yx)||youxiang.test(sh_yx)){
                this.dengluyanzheng=true
                this.dengluyanzheng1_1=true
                this.dengluyanzheng2="输入正确"
                this.dengluyanzheng1_2=false
                this.show=false   
            }
            else{
                this.dengluyanzheng=true
                this.dengluyanzheng2="请输入正确的11位手机号码或'@'邮箱"
                this.dengluyanzheng1_1=false
                this.dengluyanzheng1_2=true
                this.show=false
                this.suodingdenglu=false
                }
                if(this.dengluyanzheng2=="输入正确"&&this.mimayanzheng2=="输入正确"){
                    this.suodingdenglu=true
                }else{
                    this.suodingdenglu=false
                }
            },
        /*密码失去焦点验证*/
        upwdBlur(){
        this.show1=false
        var mima=/^\d{6,10}$/;
        var upwd=this.upwd;//获取密码
        if(mima.test(upwd)){
          this.show1=false
          this.mimayanzheng=true
          this.mimayanzheng1_1=true
          this.mimayanzheng1_2=false
          this.mimayanzheng2="输入正确"
        }
        else{
             this.mimayanzheng=true
                this.mimayanzheng2="请输入6-10位数字密码"
                this.mimayanzheng1_1=false
                this.mimayanzheng1_2=true
                this.show=false
                this.suodingdenglu=false
            }

        },
        /*登录按钮*/
     signin(){
         this.show=false
         this.show1=false
        this.dengluyanzheng=false;
        this.mimayanzheng=false;
        this.axios.post(
          "http://127.0.0.1:3000/user/login",
          Qs.stringify({
            phone:this.sh_yx,
            email:this.sh_yx,
            upwd:this.upwd
          })
        ).then(res=>{
            console.log(res)
             this.show=false
             this.show1=false
            this.dlts="登录中..."
            setTimeout(()=>{
             this.dlts=res.data.xinxi
             this.suodingdenglu=false

             if(this.upwd!=res.data.xinxi3){
                this.show1=true
            }
            if(this.sh_yx!=res.data.xinxi1||this.sh_yx!=res.data.xinxi2){
                this.show=true
                if(this.upwd!=res.data.xinxi3){
                this.show1=true
            }
            }
            if(this.sh_yx==res.data.xinxi1||this.sh_yx==res.data.xinxi2){
                this.show=false
            }
              if(res.data.xinxi=="登录成功"){
                console.log(res.data.uid)
                //将用户名和用户ID放入sessionStorage
                sessionStorage.setItem('userName',res.data.uname);
                sessionStorage.setItem('uid',res.data.uid);
                //将用户名放入vuex
                this.$store.dispatch("setUser",sessionStorage.setItem);
                //打印login状态
                //console.log(this.$store.state.currentUser)//sessionStorage.getItem("userName")) 
                location.reload(this.$router.push("/login/user"));
            }
            },1000)
          })
        }
      },
      computed:{
          beforeRouteEnter:(to,from,next)=>{
	            //组件内守卫
	            //已登录状态回到登录界面，即登出
                next(vm=>{
                        vm.$store.dispatch("setUser",null)
                })
            }
      },
    created(){
        sessionStorage.clear()
      },
    mounted() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    },
  }
</script>
<style scoped>
.denglu{
    width: 100%;
    float: left;
    height: 35rem;
    background: url(http://127.0.0.1:3000/img/login_img/denglu.jpg) no-repeat center center;
}
.denglu_main{
    width: 59rem;
    margin: auto;
    height: 35rem;
}
.denglu_main .denglu_box{
    width: 25.5rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    background: #fff;
    opacity: 0.9;
    margin-top:5.5rem;
    float: right;
}
.denglu_box_bottom{
    float: left;
    width:20.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
}
.denglu_box_bottom_one{
    width: 20.5rem;
    float: left;
}
.denglu_box_bottom_one h1{
    float: left;
    font-family: Microsoft YaHei;
    font-weight: normal;
    font-size: 1.5rem;
    margin-left: 6.65rem;
    color: #577fbb;
}
.denglu_box_bottom_one span{
    float: right;
    font-size: 0.7rem;
    color: #333333;
    margin-top: 1.1rem;
}
.denglu_box_bottom_one span a{color:#333}
.denglu_box_bottom_one span a:hover{
    color: #577bb5;
}
.denglu_box_bottom_two{
    width: 20.5rem;
    margin-top: 1rem;
    float: left;
}
.input_zhanghu{
    width: 20.5rem;
    height: 1.3rem;
    padding-top: 0.25rem;
    padding-bottom:  0.25rem;
    line-height: 1.3rem;
    font-size: 0.7rem;
    background: url(http://127.0.0.1:3000/img/login_img/input_zhanghu.jpg) no-repeat center center;
    border: none;
    text-indent: 2.5rem;
    color: #666;
}
.input_zhanghu_yanzheng{
    margin-top: 0.25rem;
    color: #ff0000;
}
.input_zhanghu_yanzheng img{
    float:left;
}
.input_zhanghu_yanzheng span{
    float: left;
    margin-left: 0.25rem;
}
.input_mima{
    width: 20.5rem;
    margin-top: 1rem;
    font-size: 0.7rem;
    height: 1.3rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    line-height: 1.3rem;
    background: url(http://127.0.0.1:3000/img/login_img/input_mima.jpg) no-repeat center center !important;
    border: none;
    text-indent: 2.5rem;
    color: #666;
}
.denglu_box_bottom_three{
    margin-top: 1rem;
    width: 20.5rem;
    float: left;
    color: #333;
    font-size: 0.7rem;
}
.input_checkbox{
    float: left;
	margin:0.15rem 0.15rem 0.15rem 0.2rem;
}
.denglu_box_bottom_three_span1{float: left;}
.denglu_box_bottom_three_span2{float:right}
.denglu_box_bottom_three_span2	a{
	color:#333;
}
.denglu_box_bottom_three_span2	a:hover{
	color: #577bb5;
}
.denglu_box_bottom_four{
    width: 20.5rem;
    margin-top: 1rem;
    float: left;
}
.denglu_box_bottom_four .input_button{
    width: 20.5rem;
    background: #577fbb;
    font-size: 0.8rem;
    font-weight: bold;
    border: none;
    height: 1.6rem;
    text-align: center;
    color: #fff;
}
.denglu_box_bottom_five{
    width: 20.5rem;
    float: left;
    margin-top: 1rem;
}
.denglu_box_bottom_five p{
    width:20.5rem;
    background: url(http://127.0.0.1:3000/img/login_img/denglu_box_bottom_five.jpg) no-repeat center center;
    font-size: 0.7rem;
    color: #333;
    text-align: center;
    height: 0.9rem
}
.denglu_box_bottom_five a{
    width: 1.9rem;
    height: 1.5rem;
    float: left;
    margin-top: 1rem;
    display: block;
    overflow: hidden;
}
.denglu_qq{
    margin-left: 2.65rem;
    background: url(http://127.0.0.1:3000/img/login_img/denglu_qq.png) no-repeat;
}
.denglu_weixin{
    margin-left: 2.65rem;
	background: url(http://127.0.0.1:3000/img/login_img/denglu_weixin.png) no-repeat;
}
.denglu_weibo{
    margin-left:2.65rem;
	background: url(http://127.0.0.1:3000/img/login_img/denglu_weibo.png) no-repeat;
}
.denglu_zhifubao{
    margin-left:2.65rem;
	background: url(http://127.0.0.1:3000/img/login_img/denglu_zhifubao.png) no-repeat;
}
</style>
