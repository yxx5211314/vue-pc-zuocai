<template>
  <div class="cart" v-cloak>
    <!--导航-->
    <div class="wodegouwuche">
        <div class="wdgwc_nr">
            <img src="http://127.0.0.1:3000/img/cart_img/wdgwc_nr_img1.jpg">
            <img src="http://127.0.0.1:3000/img/cart_img/wdgwc_nr_img2.jpg">
            <span style="width:60px;">全国免运费</span>
            <span>|</span>
            <a href="#" style="color:#577bb5;" target="_blank">快递详见》</a>
        </div>
    </div>
    <!--购物车-->
    <div class="gouwuche_pro">
        <div class="gw_pro_nr">
            <div class="gw_pro_top">
            <input type="checkbox" class="checkbox input_checkbox" name="1"@click="fff($event)" ref="py" />
                <span class="span_1">全选</span>
                <span class="span_2" style="text-align:center;">商品</span>
                <span>手寸</span>
                <span>个性定制</span>
                <span>数量</span>
                <span>价格</span>
                <span>小计</span>
                <span>操作</span>
            </div>
            <div class="gw_pro_center">
                <ul id="cartItem">
                    <li v-for="(item, index) in shopping"  >
                        <div class="gw_pro_c_one">
                            <div class="one_text1">
                            <input type="checkbox" name="cartselect" class="input_checkbox2"  @click="sss($event,index)" :data-id="111">
                                <span>
                                    <a>
                                        <img :src="item.product_img" style="width:112px">
                                    </a>
                                </span>
                            </div>
                            <div class="one_text2">
                                <p>&nbsp;</p>
                                <p>
                                    <a href="#"><span v-text="item.product_name"></span>  <span v-text="item.product_title"></span></a>
                                </p>
                                <p>&nbsp;</p>
                                <p>石重：<span v-text="item.product_zzxx_zhongliang">0.01</span>克拉 净度：<b v-text="item.product_zzxx_jingdu"></b></p>
                                <p>颜色：<span v-text="item.product_zzxx_color"></span> 形状：<span v-text="item.product_zzxx_xingzhuang">圆形</span> 切工：VG</p>
                            </div>
                            <div class="one_text3">
                                <p>
                                    <select class="input_option">
                                        <option value="0">指圈待定</option>
                                        <option :value="o+4" v-for="o in 28" v-text="o+4"></option>
                                    </select>
                                </p>
                            </div>
                            <div class="one_text4">
                                <div>暂无</div>
                            </div>
                            <div class="one_text5">
                                <p>
                                    <select name="num" class="input_select"@click="shuliang($event,index)" :disabled="disabled">
                                        <option  v-for="o in 28" v-text="o" class="ddd"></option>
                                    </select>
                                </p>
                            </div>
                            <div class="one_text6">
                                ￥
                                <span v-text="item.product_price"></span>
                            </div>
                            <div class="one_text7">
                                ￥
                                <span v-text="item.cprice" class="cp"></span>
                            </div>
                            <div class="one_text8">
                                <p>移到收藏夹</p>
                                <p class="deleteItem" style=" cursor:pointer;" @click="shanchu(index)">删除</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="gw_pro_bottom">
                <div class="gw_pro_b_noe">
                    <span><a href="#">继续逛逛</a></span>
                    <span><a href="#" style="cursor:pointer;">清空购物车</a></span>
                </div>
                <div class="gw_pro_b_two">已选商品  <span id="num">0</span>  件</div>
                <div class="gw_pro_b_three">
                    订单总额(不含运费) ：
                    <span>￥</span>
                    <span id="total" v-text="zongjia"></span>
                </div>
                <div class="gw_pro_b_four" id="jiesuan" style="cursor:pointer;" @click="jiesuan">
                结算
                </div>
            </div>
        </div>
    </div>
    <!--猜你喜欢-->
    <div class="cainixihuan" style=" margin-bottom:10px; height:300px">
        <div class="xihuan_nr"> 
            <div>
                <router-link to="/product"><img src="http://127.0.0.1:3000/img/cart_img/zhuangshi.png"></router-link>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        name: 'App',
        data:function(){
            return {
                pic:["http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg","http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg","http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg","http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg",
                "http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg","http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg","http://127.0.0.1:3000/img/product_img/product_18.jpg","http://127.0.0.1:3000/img/product_img/product_19.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg","http://127.0.0.1:3000/img/product_img/product_20.jpg",],
                shopping:"",  //请求所有信息
                myval:"1",
                zongjia:0,  //总价
                num:"",//数量
                jia:"",//临时转换价格
                disabled:true  //锁定数量按钮
            }
        },
        methods:{
            /*总价格计算*/
            ppp(){
                var num=0;
                var price_1=document.getElementsByClassName("cp");
                for(var i=0;i<price_1.length;i++){
                    num+=parseInt(price_1[i].innerHTML);
                }
                this.jia=num;
                this.zongjia=this.jia 
            },
            /*实现反选→全选按钮*/
            sss(e,index){
                !e.target.checked;
                let Array=[];
                let  check=document.getElementsByClassName("input_checkbox2");
                    for(var s=0;s<check.length;s++){
                        if(check[s].checked==true){
                        Array.push(check[s].dataset.id)
                        if(Array.length==check.length){
                            this.$refs.py.checked=true;
                        }
                        }else {
                            this.$refs.py.checked=false;
                        }
                    }
                    var num1=parseInt(this.shopping[index].cprice) 
                    var  nn=document.getElementsByClassName("input_checkbox2")[index].checked;
                    if(nn==true){
                    this.zongjia+=num1;
                    this.disabled=true;
                    alert("关闭当前选项即可选择数量")
                    }else{
                    this.zongjia-=num1;
                    this.disabled=false;
                    }
                },
            /*实现全选→反选按钮*/
            fff(e){
                this.ppp();
                let  check=document.getElementsByClassName("input_checkbox2");
                    for(var s=0;s<check.length;s++){
                        if(this.$refs.py.checked==true){
                        check[s].checked=true;
                    }else{
                        check[s].checked=false;
                        this.zongjia=0;
                    }    
                }    
            },
            shuliang(e,index){
                console.log(e.target.value);
                var num1,
                    num2;
                num1=this.shopping[index].product_price 
                num2=e.target.value;
                this.shopping[index].cprice=num1*num2
            },
            /*实现商品删除,直接请求删除数据库的当前product_id内容*/
            shanchu(index){
                var uid=sessionStorage.getItem("uid");
                var product_id=this.shopping[index].product_id;
                 this.axios.get(
                "http://127.0.0.1:3000/cart/delete",{
                    params:{
                        uid:uid,
                        product_id
                }}
            ).then(res=>{
                    console.log(res.data);
                    location.reload();
                })
            },
            /*结算按钮*/
            jiesuan(){
                if(this.zongjia<=0){
                    alert("请勾选商品后再进行结算，谢谢您的光临")
                }
            }
        },created(){
            /*实现商品获取页面创建自动加载*/
            /*1:获取sessionStorage里的用户ID并发送请求获取其购物车信息*/
            var uid=sessionStorage.getItem("uid");
            this.axios.get(
                "http://127.0.0.1:3000/cart/cart",{
                    params:{
                        uid:uid
                }}
            ).then(res=>{
              //console.log(res.data[0]);
                this.shopping=res.data;
                if(res.data.length<=0){
                var p=confirm("您的购物车空空如也~，快去选购吧");
                console.log(p)
                if(p==true)
                    this.$router.push("/product");
                }
            })
            this.zongjia=0;
        },
        mounted() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        },
}
</script>
<style scoped>
[v-cloak] {
            display: none !important;
        }
.wodegouwuche,.gouwuche_pro{
    width: 100%;
    float: left;
}
.wodegouwuche .wdgwc_nr {
    width: 1180px;
    margin: auto;
    height: 73px;
}
.wodegouwuche .wdgwc_nr img {
    float: left;
}
.wodegouwuche .wdgwc_nr a {
    margin-top: 34px;
    float: left;
    text-decoration: none;
}
.wodegouwuche .wdgwc_nr span {
    float: left;
    width: 20px;
    text-align: center;
    margin-top: 34px;
}
.gouwuche_pro .gw_pro_nr {
    width: 1180px;
    margin: auto;
}
.gouwuche_pro .gw_pro_nr .gw_pro_top {
    width: 1180px;
    float: left;
}
.gouwuche_pro .gw_pro_nr .gw_pro_top .input_checkbox {
    width: 14px;
    height: 14px;
    margin-top: 5px;
    float: left;
    margin-left: 20px;
}
input[type="checkbox" i] {
    margin: 3px 3px 3px 4px;
}
 input[type="checkbox" i] {
    -webkit-appearance: checkbox;
    box-sizing: border-box;
}
input[type="radio" i], input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
}
.gouwuche_pro .gw_pro_nr .gw_pro_top .span_1 {
    width: 180px;
    float: left;
    text-align: left;
    height:20px;
    padding-top:5px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_top .span_2 {
    width: 240px;
    float: left;
    text-align: left;
    height:20px;
    padding-top:5px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_top span {
    width: 120px;
    float: left;
    height: 20px;
    padding-top: 5px;
    text-align: center;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center {
    width: 1178px;
    float: left;
    background: #fcfcfc;
    border: 1px solid #e6e6e6;
    border-bottom: none;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one {
    width: 1180px;
    float: left;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center li {
    width: 1180px;
    float: left;
    border-top: 1px solid #e6e6e6;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text1 {
    width: 214px;
    float: left;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text1 .input_checkbox2 {
    width: 14px;
    height: 14px;
    float: left;
    margin-left: 40px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text1 span {
    float: left;
    margin-left: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text2 {
    width: 240px;
    float: left;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text1 {
    width: 214px;
    float: left;
    margin-top: 10px;
}
a {
    color: #56595c;
    text-decoration: none;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text3 {
    width: 140px;
    float: left;
    text-align: left;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text3 .input_option {
    float: right;
    margin-right: 20px;
    width: 80px;
    height: 20px;
    color: #56595c;
    border: 1px solid #aaaaaa;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text5 .input_select {
    width: 60px;
    height: 25px;
    border: 1px solid #aaaaaa;
    text-indent: 4px;
    color: #56595c;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text4 {
    border: 1px dashed #f2f8fd;
    width: 110px;
    float: left;
    height: 122px;
    text-align: center;
    padding-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text5 {
    width: 120px;
    float: left;
    text-align: center;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text6 {
    width: 120px;
    float: left;
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text7 {
    width: 120px;
    float: left;
    text-align: center;
    color: #577bb5;
    font-size: 16px;
    font-weight: bold;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text8 {
    width: 110px;
    float: left;
    text-align: center;
    margin-top: 10px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center .gw_pro_c_one .one_text8 p {
    text-align: center;
    height: 30px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_center {
    width: 1178px;
    float: left;
    background: #fcfcfc;
    border: 1px solid #e6e6e6;
    border-bottom: none;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_noe {
    float: left;
    margin-left: 25px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_noe span {
    float: left;
    width: 70px;
    margin-top: 15px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom {
    width: 1180px;
    float: left;
    height: 50px;
    background: #e5e5e5;
    font-size: 14px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_two {
    float: left;
    margin-left: 300px;
    margin-top: 15px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_two span {
    color: #577bb5;
    font-size: 16px;
    font-weight: bold;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_three {
    float: left;
    margin-left: 30px;
    margin-top: 6px;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_three span {
    color: #577bb5;
    font-weight: bold;
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
}
.gouwuche_pro .gw_pro_nr .gw_pro_bottom .gw_pro_b_four {
    float: right;
    width: 256px;
    height: 38px;
    background: #577bb5;
    color: #fff;
    font-family: Microsoft YaHei;
    font-size: 20px;
    text-align: center;
    padding-top: 12px;
}
.cainixihuan {
    width: 100%;
    float: left;
    margin-top: 20px;
}
.cainixihuan .xihuan_nr {
    width: 1180px;
    margin: auto;
}
.cainixihuan .xihuan_nr .xihuan_biaoti {
    font-size: 14px;
    color: #577fbb;
    border-bottom: 2px solid #e6e6e6;
    width: 1180px;
    height: 25px;
}
.lili li{
    float:left;
}
</style>
