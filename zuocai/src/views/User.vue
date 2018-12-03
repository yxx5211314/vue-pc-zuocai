<template>
  <div class="login">
    <div class="container">
        <div class="border-02 mt10">
            <div style="float:left;" v-for="(item,url) in img">
                <router-link :to="item.path" target="_blank" rel="nofollow">
                    <img alt="臻美裸钻" :src="item.url">
                </router-link>
            </div>
        </div>
        <div class="container_min">
            <div class="border-08 mt10">
                <div class="title-user">交易管理</div>
                <div class="text-list">
                    <ul>
                        <li class="cur">
                            <router-link to="" class="cur1 cur2">官网订单</router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">我的购物车</span></router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">综合渠道订单</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-08 mt10">
                <div class="title-user">帐户管理</div>
                <div class="text-list">
                    <ul>
                        <li class="cur">
                            <router-link to="" class="cur1 cur2">个人信息</router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">修改密码</span></router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">发货地址</span></router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">优惠券信息</span></router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">我的积分</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-08 mt10">
                <div class="title-user">服务与评价</div>
                <div class="text-list">
                    <ul>
                        <li class="cur">
                            <router-link to="" class="cur1 cur2">官网商品评论</router-link>
                        </li>
                        <li>
                            <router-link to="" class="cur1"><span class="hover1">晒单</span></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container_min1">
            <div class="select-area user-center">
                <p>
                尊敬的
                <span class="acolor ft14 fb" id="mRank"></span> 
                会员 
                <span class="acolor ft14 fb" v-text="uname"></span>
                 ，欢迎您！  
                </p>
                <ul class="mt10">
                    <li>
                        <span>·</span>
                        您在佐卡伊官网上已消费 
                        <span class="acolor">￥ 0.00</span>
                         元，积分：
                         <span class="acolor" id="activeJifen" style=" cursor:pointer">激活积分</span>
                    </li>
                    <li>
                        <span>·</span>
                        已在佐卡伊官网完成订单 
                        <span class="acolor">0</span>
                          个，未支付订单 
                         <span class="acolor" id="activeJifen" style=" cursor:pointer">0</span>
                          个
                    </li>
                    <li>
                        <span style="margin-left:-8.2rem">·</span>
                        可用余额   
                         <span class="acolor">￥ 0.00</span>
                          元
                    </li>
                </ul>
            </div>
            
            <router-link to="">
                <img src="http://127.0.0.1:3000/img/user_img/container_min1_img1.jpg" class="container_min1_img1">
            </router-link>
            <div class="select-area mt10">
                <div class="user-title">我的佐卡伊官网订单</div>
                <div class="order-tab">
                    <div class="order_status">
                        <router-link to="" class="a active" id="AllOrder">所有订单</router-link>
                        <router-link to="" class="a" id="NoPayed">未付款</router-link>
                        <router-link to="" class="a" id="HasPayed">已付款</router-link>
                        <router-link to="" class="a" id="OrderFinished">交易完成</router-link>
                        <router-link to="" class="a" id="OrderCanceled">已取消</router-link>
                    </div>
                    <table class="order_list">
                        <tbody>
                            <tr>
                                <th v-for="lis in orderList" v-text="lis.th"></th>
                            </tr>
                        </tbody>
                        <tbody id="orderList">
                            <tr>
                                <td colspan="6">暂时没有订单信息
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
        return { 
            img:[
                {"url":"http://127.0.0.1:3000/img/user_img/container_top_img1.jpg","path":"/header"},
                {"url":"http://127.0.0.1:3000/img/user_img/container_top_img2.jpg","path":"/header"},
                {"url":"http://127.0.0.1:3000/img/user_img/container_top_img3.jpg","path":"/header"},
                {"url":"http://127.0.0.1:3000/img/user_img/container_top_img4.jpg","path":"/header"},
                {"url":"http://127.0.0.1:3000/img/user_img/container_top_img4.jpg","path":"/header"}
             ],
            orderList:[{"th":"订单号"},{"th":"下单时间"},{"th":"产品金额(元)"},{"th":"应付(元)"},{"th":"状态"},{"th":"查看详情"},{"th":"操作"}],
            uname:"",
        }
    },
    computed:{
      isLogin(){
        //通过sessionstorage获取vuex里islogin的状态
        if(sessionStorage.getItem("uame")){
        this.$store.commit("userStatus",sessionStorage.getItem("uname"));
        }else{
          this.$store.commit("userStatus",null);
        }
        return this.$store.getters.isLogin;
      }
    }, created(){
      var uname=sessionStorage.getItem("userName");
        this.uname=uname;  
    },
    mounted() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    },
  }
</script>
<style scoped>
.container{
    width: 59rem;
    margin: 0 auto;
    /*overflow: hidden;*/
    height: 100%;
}
.border-02{
    border: #cacaca 0.05rem solid;
    background: #fff;
    overflow: hidden;
    height: 100%;
}
a{
    color: #434343;
    text-decoration: none;
}
a img{
    border:none;
}
.container_min{
    width:11.5rem;
    float: left;
    margin-right: 0.5rem;
}
.border-08{
    border: #cacaca 0.1rem solid;
    background: #fff;
    padding:0.15rem;
    overflow: hidden;
    height: 100%;
}
.title-user{
    background: none repeat scroll 0 0 #F3F3F3;
    color: #950100;
    font-size: 0.7rem;
    font-weight: bolder;
    line-height: 1.5rem;
    padding-left: 0.5rem;
    text-align:left;
}
.text-list{
    line-height: 1.45rem;
    margin: 0.3rem 0;
    padding: 0 0.25rem;
}
.text-list li{
    border-bottom: 0.05rem solid #EAEAEA;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align:left;
}
.cur{
    background: none repeat scroll 0 0 #F7F7F7;
    font-weight: bolder;

}
.text-list .cur .cur1{
    color: #860200;
}
.text-list li .cur1{
    background: url(http://127.0.0.1:3000/img/user_img/cur1.png) no-repeat scroll -14.3rem -2.05rem transparent;
    color: #797979;
    padding-left: 0.9rem;
}
.container_min1{
    margin-top: 0.5rem;
    width: 59rem;
    margin-right: 0;
}
.select-area{
    background: none repeat scroll 0 0 #FFF;
    border: 0.4rem solid #EFEFEF;
    height: 100%;
    overflow: hidden;
    padding: 0.25rem 0.6rem;
}
.fb{
    font-weight: 700;
}
.ft14 {
    font-size: 0.7rem;
}
.acolor {
    color: #8d0000;
}
.user-center ul{
    background: none repeat scroll 0 0 #F7F7F7;
    border: 0.05rem solid #EFEFEF;
    height: 100%;
    line-height: 1.2rem;
    overflow: hidden;
}
.mt10{
    margin-top: 0.5rem;
}
.user-center ul li{
    float: left;
    width: 34%;
}
.user-center ul li span{
    font-family: å®‹ä½“;
}
.container_min1_img1{
    width:100%;
}
.container_min1 {
    width: 47rem;
    margin-left:12rem;
}
.select-area{
    background: none repeat scroll 0 0 #FFF;
    border: 0.4rem solid #EFEFEF;
    height: 100%;
    overflow: hidden;
    padding: 0.25rem 0.6rem;
}
.user-title{
    border-bottom: 0.1rem solid #CCC;
    color: #950000;
    font-size: 0.7rem;
    font-weight: bolder;
    line-height: 1.2rem;
    padding-left: 0.5rem;
}
.order-tab{
    line-height: 1.2rem;
    padding: 0.5rem;
}
.order_status{
    border-left: 0.05rem solid #DFDFDF;
    height: 100%;
    line-height: 1.2rem;
    overflow: hidden;
}
.order_status .active {
    background: none repeat scroll 0 0 #DFDFDF;
    color: #770101;
}
.order_status .a{
    border-right: 0.05rem solid #DFDFDF;
    border-top: 0.05rem solid #DFDFDF;
    display: block;
    float: left;
    padding: 0 0.5rem;
}
.order_list{  
    border-collapse: collapse;
    border-right: 0.05rem solid #DFDFDF;
    border-spacing: 0;
    border-top: 0.05rem solid #DFDFDF;
    margin-bottom: 0.5rem;
    text-align: center;
    width: 100%;
}
table{
    font: normal 0.6rem/1.5'Tahoma','simsun';
    color: #333;
}
.order_list th{
    background: none repeat scroll 0 0 #F5F5F5;
    border-bottom: 0.05rem solid #DFDFDF;
    border-left: 0.05rem solid #DFDFDF;
    font-weight: 400;
    height: 1.5rem;
    line-height: 1.5rem;
    padding: 0 0.25rem;
}
.order_list td{
    border-bottom: 0.05rem solid #DFDFDF;
    border-left: 0.05rem solid #DFDFDF;
    height: 1.8rem;
    line-height: 1.8rem;
    padding: 0 0.25rem;
    text-align:left;
}
.hover1:hover{
    color:#950100;
}
</style>
