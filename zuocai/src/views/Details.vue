<template>
  <div class="details">
    <!--当前位置-->
    <div class="zhudao">
        <div class="zhudao_nr">
            <img src="http://127.0.0.1:3000/img/details_img/zhudao_nr_img.jpg">
            <span>当前位置：<a href="#">佐卡伊珠宝网</a> > <a href="#">戒指</a></span>
        </div>
    </div>
    <!--产品-->
    <div class="product">
        <div class="product_nr">
            <div class="product_left">
                <div class="product_l_one"style="display:block;box-sizing:border-box">
                     <pic-zoom :url="spxx" :scale="3" id="d555"></pic-zoom>
                </div>
                <div class="product_tupian" id="smallImgs">
                    <div class="next">
                        <h1>商品展示：</h1>
                    </div>
                    <div class="product_neirong">
                        <ul class="product_mil">
                            <li  :class="{active:s==1}"v-for="s in details_mm_pic">
                                <a class="cloud-zoom-gallery">
                                    <img style="width:82px;height:82px" class="zoom-tiny-image" :src="s">
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="pre" id="btnDown">
                        <img src="http://127.0.0.1:3000/img/details_img/img_02.jpg">
                    </div>
                </div>
            </div>
            <div class="product_right">
                <div class="product_r_one">
                    <div class="l_r_o_text1">
                        <span v-text="spxx1.product_name"></span> 
                        <span id="title"v-text="spxx1.product_title"></span>
                        <span style="color:#999;font-size:12px;">【款号：<span v-text="spxx1.details_kuanhao"></span>】</span>
                    </div>
                    <div class="l_r_o_text2"></div>
                    <div class="l_r_o_text3">
                        <span id="txtprice" style="font-size:20px;">佐卡伊价：</span>
                        <span id="sprice" style="color:#a10000;">￥<span v-text="spxx1.product_price"></span> </span>
                    </div>
                    <div class="l_r_o_text3"></div>
                </div>
                <div class="product_xian"></div>
                <div class="product_pengyouquan">
                    <p>
                        <span>主钻重量(ct)：<b id="showcarat"v-text="spxx1.product_zzxx_zhongliang"></b></span>
                        <span>主钻颜色(color)：<b id="showcolor"v-text="spxx1.product_zzxx_color"></b></span>
                    </p>
                    <p>
                        <span>主钻净度(clarity)：<b id="showcarat"v-text="spxx1.details_clarity">20分以下不分级</b></span>
                        <span>主钻切工(cut)：<b id="showcut"v-text="spxx1.details_cut">VG</b></span>
                    </p>
                </div>
                <div class="product_three">
                    <div class="l_three_shoucun">
                        <span>选择指圈：</span>
                        <select name="size" id="sizeSelect"class="text_select">
                            <option value="0">指圈待定</option>
                            <option :value="o+4" v-for="o in 28" v-text="o+4"></option>
                        </select>
                        <a href="#">如何测量指圈号?</a>
                    </div>
                </div>
                <div class="stage">
                    <span class="title">分期详细：</span>
                    <ul id="stage">
                        <li data-stage="0":class="active1" @click="activea">不分期</li>
                        <li data-stage="3":class="active2" @click="activeb">
                        3个月
                            <span class="stage-tag">
                            限时免息
                            </span>
                        </li>
                        <li data-stage="6":class="active3" @click="activec">6个月</li>
                        <li data-stage="12":class="active4" @click="actived">12个月</li>
                    </ul>
                    <span class="title">
                        月
                        <span style="width: 22px; display: inline-block;">供：</span>
                    </span>
                    <div style="margin: 10px 20px 10px 0; float: left; width: 468px; line-height:22px;">
                        <span style="float: left; ">￥</span>
                        <span class="amount" id="stage_amount" v-text="price"></span>
                        <img style=" float: left; margin: 0 10px; margin-top: 0px; width: 22px; cursor: pointer;" class="tubiao_img1" src="http://127.0.0.1:3000/img/details_img/tubiao_img1.png">
                        <a style=" float: left; color: #a10000; text-decoration: underline;cursor:pointer;" @click="fenqi1">分期乐新用户免息，
                            <b>首单立减30元</b>
                        </a>
                        <div class="fenqi" v-show="fenqi">
                            <img src="http://127.0.0.1:3000/img/details_img/fenqi.png">
                        </div>
                    </div>
                </div>
                <div class="product_r_four">
                    <input type="button" value="立即购买" class="button_txt1" id="bi" @click="lijigoumai">
                    <input type="button" value="加入购物车" @click="jiarugouwuche" class="button_txt2" id="ab">
                </div>
                <div class="product_five">
                    <img src="http://127.0.0.1:3000/img/details_img/product_five.jpg">
                    <div class="product_pengyouquan2">配送方式：可配送至全国，顺丰速递或中国邮政EMS（全国保险）</div>
                </div>
                <div class="product_r_six">
                    <div class="product_six_saoma_active">
                        <img  style="float:left"src="http://127.0.0.1:3000/img/details_img/shoujierweima.jpg">
                        <span>手机扫码打开</span>
                        <div class="shoujierweima"><img src="http://127.0.0.1:3000/img/details_img/erweima.png" ></div>
                    </div>
                    <div class="product_six_saoma2">
                        <img  src="http://127.0.0.1:3000/img/details_img/shoucang.jpg">
                        <span>收藏</span>
                    </div>
                    <div class="product_six_saoma2" style="float:left;margin-left:6px;">
                        <a href="#" title="分享到QQ空间">
                            <img style="margin-top: -4px;" src="http://127.0.0.1:3000/img/details_img/kongjian.png">
                        </a>
                    </div>
                    <div class="product_six_saoma2" style="float:left;margin-left:-8px;">
                        <a href="#" title="分享到微博">
                            <img style="margin-top: -4px;" src="http://127.0.0.1:3000/img/details_img/weibo.png">
                        </a>
                    </div>
                    <div class="product_six_saoma2" style="float:left;margin-left:-8px;">
                        <a href="#" title="更多平台">
                            <img style="margin-top: -4px;" src="http://127.0.0.1:3000/img/details_img/gengduofenxiang.png">
                        </a>
                        <div class="gdpt">
                            <img src="http://127.0.0.1:3000/img/details_img/gdpt.png">
                        </div>
                    </div>
                    <div class="product_six_saoma2" style="float:left;margin-left:3px;">
                        <span>分享</span>
                    </div>
                </div>
            </div>
        </div>
        <!--分割线-->
        <div class="fenge">
            <div class="fenge_nr"></div> 
        </div>
        <!--最佳搭配-->
        <div class="dapei">
            <div class="dapei_nr">
                <div class="dapei_biaoti">相关推荐</div>
                <div class="dapei_product">
                    <div class="dapei_text" v-for="(xgtj,o) in 5" :key="o">
                        <a href="">
                            <img src="http://127.0.0.1:3000/img/details_img/xgtj01.jpg" width="130" height="130">
                        </a>
                        <p>【简约】</p>
                        <p>佐卡伊价：<span>￥999.00</span></p>
                    </div>
                </div>
            </div>
        </div>
        <!--主内容信息-->
        <div class="shangpin">
            <div class="shangpin_nr">
                <div class="shangpin_daohangtiao">
                    <div class="shangpin_qiehuan" id="tab">
                        <div class="shangpin_100" id="fudong_daohang" style="position: static; top: 1196px;">
                            <ul class="num">
                                <li :class="{active:item==0}" v-for="(li,item) in fuwu">
                                    <a style=" cursor:pointer;" v-text="li"></a> 
                                    <span style=" text-align:center;margin-left:30px;float:left;">|</span>
                                </li>
                                <span style=" float:right;cursor:pointer;">
                                    <img src="http://127.0.0.1:3000/img/details_img/daohang_jrgwc.jpg">
                                </span>
                            </ul>
                        </div>
                        <!--商品详情-->
                        <div class="pro_xiangqing" id="tab1">
                            <div class="pro_xq_xinxi">
                                <p>
                                    <span class="xinxi_biaoti">产品参数</span>
                                    <span class="span_1">产品编号：</span>
                                    <span class="span_2" style="    margin-top: 3px;" v-text="spxx1.details_bianhao"></span>
                                    <span class="span_1">产品材质：</span>
                                    <span class="span_2" id="showmetal2"v-text="spxx1.product_cpxx_caizhi">精钢</span>
                                    <span class="span_1" style="margin-left:48px">金属重量：</span>
                                    <span class="span_2">约 <span v-text="spxx1.product_zzxx_zhongliang"></span>克</span>
                                    <span class="span_1" style="margin-left:30px">产品证书：</span>
                                    <span class="span_2">GIC鉴定证书</span>
                                </p>
                                <p>
                                    <span class="xinxi_biaoti">主钻信息</span>
                                    <span class="span_1">形状：</span>
                                    <span class="span_2" v-text="spxx1.product_zzxx_xingzhuang"></span>
                                    <span class="span_1">数量：</span>
                                    <span class="span_2" id="showmetal2"><span v-text="spxx1.product_zzxx_num"></span> 颗</span>
                                    <span class="span_1" style="margin-left:114px">重量：</span>
                                    <span class="span_2"><span v-text="spxx1.product_zzxx_zhongliang"></span>克</span>
                                    <span class="span_1" style="margin-left:30px">颜色：</span>
                                    <span class="span_2" style="margin-top:2px;"v-text="spxx1.product_zzxx_color"></span>
                                    <span class="span_1" style="margin-left:114px;
                                    magrin-top:3px;">净度：</span>
                                    <span class="span_2" v-text="spxx1.product_zzxx_jingdu"></span>
                                    <span class="span_1" style="margin-left:30px">切工：</span>
                                    <span class="span_2" v-text="spxx1.details_cut">VG</span>
                                </p>
                            </div>
                             <div class="pro_xq_tupian">
                                <h3 v-text="spxx1.product_name"></h3>
                                <p style="line-height:24px;"v-text="spxx1.details_quanshi"></p>
                                <br>
                                <p style="text-align: center;">
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq1.jpg"style="width: 790px; height: 220px; display: block;">
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq2.jpg"style="width: 790px; height: 593px; display: block;">
                                </p>
                                <p style="text-align: center;">
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq3.jpg"style="width: 790px; height: 593px; display: block;">
                                </p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq4.jpg"style="width: 790px; height: 72px; display: block;">
                                </p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">&nbsp;</p>
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq12.jpg"style="width: 790px; height: 998px; display: block;">
                                </p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">&nbsp;</p>
                                <p style="text-align: center;">
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq13.jpg"style="width: 790px; height: 745px; display: block;">
                                    <img src="http://127.0.0.1:3000/img/details_img/spxq14.jpg"style="width: 790px; height: 1116px; display: block;">
                                </p>
                            </div>
                            <div style="margin:0 auto;">
                                <img src="http://127.0.0.1:3000/img/details_img/chima.jpg" style="margin:0 auto;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm01.jpg" style="margin:0 195px;float:left">
                                <img src="http://127.0.0.1:3000/img/details_img/cm02.gif"width="213px" style="margin-left:-195px;float:left;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm03.jpg" style="float:left;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm04.gif"width="213px" style="float:left;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm03.jpg" style="float:left;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm05.gif"width="213px" style="float:left;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm06.png" style="float:left;width:13px;height:125px;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm07.png" style="margin:0 auto;">
                                <img src="http://127.0.0.1:3000/img/details_img/cm08.jpg" style="margin:0 auto;">
                            </div> 
                            <!--分割线-->
                            <div class="fenge">
                                <div class="fenge_nr"></div> 
                            </div>
                            <!--热门分类-->
                            <div class="reimen">
                                <div class="reimen_nr">热门分类</div>
                                <div class="reimen_wenzi">
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">戒指:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石戒指</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">宝石戒指</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">铂金戒指</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">k金戒指</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">结婚戒指</a></span>
                                    </div>
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">钻戒:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">铂金戒指</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K金戒指</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">30分钻戒</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">50分钻戒</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">70分钻戒</a></span>
                                    </div>
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">对戒:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石对戒</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">铂金对戒</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K金对戒</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">玫瑰金对戒</a></span>
                                    </div>
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">吊坠:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石吊坠</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">宝石吊坠</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">铂金吊坠</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K金吊坠</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">碧玺吊坠</a></span>
                                    </div>
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">耳钉:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石耳钉</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">铂金耳钉</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K金耳钉</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">玫瑰金耳钉</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">碧玺耳钉</a></span>
                                    </div>
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">耳环:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石耳环</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">玫瑰金耳环</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K宝石耳环</a></span>
                                    </div>
                                    <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">项链:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石项链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K金项链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">玫瑰金项链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">宝石项链</a></span>
                                    </div>
                                     <div class="reimen_wz_text1">
                                        <span class="span_biaoti">
                                            <a href="#">手链:</a>
                                        </span>
                                        <span class="span_neirong"><a href="#">钻石手链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">K金手链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">碧玺手链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">铂金手链</a></span>
                                        <span class="span_">|</span>
                                        <span class="span_neirong"><a href="#">玫瑰金手链</a></span>
                                    </div>
                                </div>
                            </div>
                            <!--分割线-->
                            <div class="fenge">
                                <div class="fenge_nr"></div> 
                            </div>
                            <!--品牌门店-->
                            <div class="pinpai">
                                <div class="pinpai_nr">
                                    <div class="pinpai_biaoti">品牌门店</div>
                                    <div class="pinpai_b_left">
                                        <img src="http://127.0.0.1:3000/img/details_img/pinpai_b_left_img.jpg">
                                    </div>
                                    <div class="pinpai_b_right">
                                        <img style="margin-top: 18px;margin-left: 112px;"src="http://127.0.0.1:3000/img/details_img/yuyue.png">
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--主内容信息-->
    </div>
  </div>
</template>
<script>
import PicZoom from 'vue-piczoom'//vue引入放大镜插件
  export default{
        name: 'App',
        components: {//注册放大镜
            PicZoom
        },
    data(){
        return { 
           fenqi:false,
           fuwu:["商品详情","购买评价","常见问题","售后服务"],
           active1:"",
           active2:"",
           active3:"",
           active4:"active",
           spxx:"",
           spxx1:"",
           details_mm_pic:"",
           price:"",
           islogin:"",//是否登录
           product_id:"",//当前商品ID
           cprice:"",//当前商品价格
        }
     },
     methods:{
         fenqi1(){
             this.fenqi=true;
             setTimeout(()=>{
                 this.fenqi=false;
             },1000)
         },
         activea(){
            this.active1="active"
            this.active2=""
            this.active3=""
            this.active4=""
            this.price=this.spxx1.details_fq_price;
         },
         activeb(){
            this.active2="active"
            this.active3=""
            this.active4=""
            this.active1=""
            this.price=this.spxx1.details_fq_price_3;
         },
         activec(){
            this.active3="active"
            this.active4=""
            this.active2=""
            this.active1=""
            this.price=this.spxx1.details_fq_price_6;
         },
         actived(){
            this.active4="active"
            this.active3=""
            this.active2=""
            this.active1=""
            this.price=this.spxx1.details_fq_price_12;
         },
         lijigoumai(){
             var islogin=sessionStorage.getItem("uid");
             this.islogin=islogin;
             console.log(this.islogin)
             if(this.islogin==undefined){
                 alert("系统检测您未登录，登录后即可购物，祝您购物愉快~")
                 this.$router.push("/login")
                    console.log(123)
             }else if(this.islogin!=undefined){
                 /*如果检测登录了，先查询当前id在cart里面有没有存在，不存在再插入数据*/
                 this.axios.get("http://127.0.0.1:3000/cart/selectProduct",{
                  params: { 
                    uid:islogin,
                    product_id:this.product_id,
                    }
                })
                .then(res=>{ 
                    if(res.data=="无重复"){
                /*如果无重复了，就请求后台数据把当前点击的uid和product_id等插入数据库，那边去掉*/
                    this.axios.get("http://127.0.0.1:3000/cart/inserte",{  //params参数必写 , 如果没有参数传{}也可以
                    params: { 
                    uid:islogin,
                    product_id:this.product_id,
                    cprice:this.cprice,
                    count:1
                    }
                    })
                    .then(res=>{ 
                    console.log(res);
                    });
                    this.$router.push("/product/details/cart");
                    location.reload();
                    }else{
                        this.$router.push("/product/details/cart")
                    }
                });
             }
         },
         jiarugouwuche(){
             this.lijigoumai();
         }
     },
    mounted() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    },
    created(){
        var id=this.$route.params.id
        this.product_id=id;
        this.axios.get("http://127.0.0.1:3000/details/details",{  //params参数必写 , 如果没有参数传{}也可以
                  params: { 
                    id:id
                  }
              })
        .then(res=>{ 
            this.spxx=res.data[0].details_ld_pic;
            this.spxx1=res.data[0]
            this.details_mm_pic=res.data[0].details_mm_pic.split(',');
            this.price=res.data[0].details_fq_price_12;
            this.cprice=res.data[0].details_fq_price;
        })
        
    }
  }
</script>
<style scoped>
.zhudao {
    width: 100%;
    float: left;
    height: 24px;
    margin-top: 20px;
}
.zhudao .zhudao_nr {
    width: 1180px;
    margin: auto;
    height: 24px;
}
.zhudao .zhudao_nr img {
    float: left;
}
img {
    display: block;
    border: 0;
}
.zhudao .zhudao_nr span {
    float: left;
    margin-top: 5px;
    margin-left: 5px;
    font-size: 14px;
}
.product {
    width: 100%;
    float: left;
    margin-top: 20px;
}
.product .product_nr {
    width: 1180px;
    margin: auto;
    color: #555;
}
.product .product_nr .product_left {
    width: 500px;
    float: left;
}
img{
    display:block;
    border: 0;
}
.product .product_nr .product_left .product_l_one {
    width: 500px;
    height: 500px;
    float: left;
    border: 1px solid #ccc;
    overflow:hidden;
}
#d5{
    width:50px;
}
.mousetrap{
    background: url(http://127.0.0.1:3000/img/details_img/mousetrap.gif) no-repeat;
    z-index: 3;
    position: absolute;
    width: 500px;
    height: 500px;
    left: 0px;
    top: 0px;
    cursor: move;
}
a {
    color: #434343;
    text-decoration: none;
}
.product .product_nr .product_left .product_tupian {
    overflow: hidden;
    width: 500px;
    clear: both;
}
.product .product_nr .product_left .product_tupian .next {
    padding-top: 35px;
    float: left;
}
.product .product_nr .product_left .product_tupian .product_neirong {
    width: 470px;
    height: 85px;
    position: relative;
    overflow: hidden;
    display: block;
    float: left;
    margin-top: 10px;
}
.product .product_nr .product_left .product_tupian .product_neirong .product_mil {
    position: absolute;
}
.product .product_nr .product_left .product_tupian .product_mil .active {
    float: left;
    margin: 0px 5px;
    cursor: pointer;
    border: 1px solid #A6D2F7;
}
.product .product_nr .product_left .product_tupian .pre {
    padding-top: 35px;
    float: right;
}
.product .product_nr .product_left .product_tupian .product_mil li {
    float: left;
    margin: 0px 5px;
    cursor: pointer;
    border: 1px solid #eaeaea;
}
.product .product_nr .product_right {
    width: 588px;
    float: left;
    text-align:left;
    margin-left: 80px;
}
.product .product_nr .product_right .product_r_one {
    width: 599px;
    float: left;
}
.product .product_nr .product_right .product_r_one .l_r_o_text1 {
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #555;
}
.product .product_nr .product_right .product_r_one .l_r_o_text2 {
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: #a10000;
    margin-top: 13px;
}
.product .product_nr .product_right .product_r_one .l_r_o_text3 {
    font-size: 14px;
    font-family: Microsoft YaHei;
    color: #555;
    margin-top: 13px;
}
.product .product_nr .product_right .product_r_one .l_r_o_text3 span {
    font-size: 20px;
    color: #a10000;
}
.product .product_nr .product_right .product_xian {
    width: 599px;
    float: left;
    border-top: 1px solid #56595c;
    margin-top: 10px;
}
.product .product_nr .product_right .product_pengyouquan {
    width: 599px;
    float: left;
    font-size: 14px;
}
.product .product_nr .product_right .product_pengyouquan p {
    width: 599px;
    float: left;
    margin-top: 10px;
    text-align:left;
}
.product .product_nr .product_right .product_pengyouquan p span {
    width: 240px;
    float: left;
}
b{
    font-weight:normal;
}
.product .product_nr .product_right .product_three {
    width: 599px;
    float: left;
    color: #555;
    margin-top: 20px;
}
.product .product_nr .product_right .product_three .l_three_shoucun {
    width: 599px;
    float: left;
    font-size: 12px;
    background: #f2f8fe;
    padding-top: 10px;
    text-indent: 10px;
    padding-bottom: 10px;
}
.product .product_nr .product_right .product_three .l_three_shoucun span {
    float: left;
    margin-top: 5px;
}
.product .product_nr .product_right .product_three .l_three_shoucun .text_select {
    width: 140px;
    height: 24px;
    float: left;
    border: 1px solid #c0def5;
}
.product .product_nr .product_right .product_three .l_three_shoucun a {
    color: #555;
    text-decoration: none;
    margin-top: 4px;
    float: left;
    text-indent: 5px;
}
.stage {
    margin: 10px 0px;
    float: left;
    background-color: #fff;
    width: 599px;
}
.stage .title {
    margin-top: 16px;
    float: left;
    width: 70px;
    text-align: center;
}
.stage ul {
    width: 490px;
    float: left;
}
.stage li {
    float: left;
    padding: 7px 20px;
    border: 1px solid #c5c2c2;
    margin: 10px 20px 10px 0;
    cursor: pointer;
    position: relative;
}
.stage .stage-tag {
    font-size: 12px;
    background-color: #FE4979;
    color: #fff;
    line-height: 10px;
    padding: 2px;
}
.stage li.active {
    border: 1px solid #0051d8;
}
.stage .title {
    margin-top: 16px;
    float: left;
    width: 70px;
    text-align: center;
}
.stage .amount {
    font-size: 20px;
    color: #a10000;
    display: inline-block;
    float: left;
    font-weight: bold;
}
.product .product_nr .product_right .product_r_four {
    width: 599px;
    height: 37px;
    float: left;
    margin-top: 20px;
}
.product .product_nr .product_right .product_r_four .button_txt1 {
    cursor: pointer;
    width: 145px;
    height: 37px;
    float: left;
    background: #a10000;
    border: none;
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #fff;
}
.product .product_nr .product_right .product_r_four .button_txt2 {
    cursor: pointer;
    width: 145px;
    height: 37px;
    float: left;
    background: #ffe7e7;
    border: 1px solid #a10000;
    margin-left: 20px;
    font-size: 20px;
    font-family: Microsoft YaHei;
    color: #a10000;
}
.product .product_nr .product_right .product_five {
    width: 599px;
    float: left;
    height: 29px;
    margin-top: 30px;
}
.product .product_nr .product_right .product_pengyouquan2 {
    width: 599px;
    float: left;
    margin-top: 30px;
    font-size: 12px;
}
.product .product_nr .product_right .product_r_six {
    width: 270px;
    float: right;
    margin-top: 68px;
}
.product .product_nr .product_right .product_r_six .product_six_saoma_active span {
    float: left;
    padding-top: 5px;
    padding-left: 5px;
    color: #a10000;
}
.product .product_nr .product_right .product_r_six .product_six_saoma2 img {
    float: left;
    padding-top: 7px;
    padding-left: 10px;
}
.product .product_nr .product_right .product_r_six .product_six_saoma2 span {
    float: left;
    padding-top: 5px;
    padding-left: 5px;
}
.bshare-custom {
    font-size: 13px;
    line-height: 16px !important;
}
div.bshare-custom .bsPromo.bsPromo2 {
    background: url("http://127.0.0.1:3000/img/details_img/bsPromo.gif") no-repeat;
    cursor: pointer;
}
a.bshareDiv .bsPromo, div.bshare-custom .bsPromo {
    display: none;
    position: absolute;
    z-index: 100;
}
.bshare-custom .bshare-qzone {
    background: url("http://127.0.0.1:3000/img/details_img/top_logos_sprite.png") no-repeat 0 -234px;
    display: inline-block;
}
.shoujierweima,.gdpt{
    width:160px;
    height:170px;
    position: absolute;
    display: none;
    margin-top: 31px;
    z-index:5000
}
.gdpt{
    margin-top: -295px; 
}
.product_six_saoma_active:hover .shoujierweima{
    display:block;
    visibility:visible; opacity:1;
}
.product_six_saoma2:hover .gdpt{
    display:block;
}
.fenqi{
    margin-left:14.45rem;
    margin-top:-9px;
    width:226px;
    height:93px;
    position:absolute;
}
.fenge {
    width: 100%;
    float: left;
    margin-top: 30px;
}
.fenge .fenge_nr {
    border-top: 2px solid #dddede;
    margin: auto;
    width: 1180px;
    height: 2px;
}
.dapei {
    width: 100%;
    float: left;
    margin-top: 30px;
}
.dapei .dapei_nr {
    width: 1180px;
    margin: auto;
}
.dapei .dapei_nr .dapei_biaoti {
    width: 1180px;
    float: left;
    font-size: 14px;
    text-align:left;
}
.dapei .dapei_nr .dapei_product {
    width: 1140px;
    float: left;
    margin-left: 20px;
}
.dapei .dapei_nr .dapei_product .dapei_text {
    width: 140px;
    height: 180px;
    float: left;
    margin-right: 48px;
    margin-left: 40px;
}
.dapei .dapei_nr .dapei_product .dapei_text img {
    float: left;
}
.dapei .dapei_nr .dapei_product .dapei_text p {
    text-align: center;
    padding-top: 5px;
}
.dapei .dapei_nr .dapei_product .dapei_text span {
    color: #a10000;
}
.shangpin {
    width: 100%;
    float: left;
    margin-top: 20px;
}
.shangpin .shangpin_nr {
    margin: auto;
}
.shangpin .shangpin_nr .shangpin_daohangtiao {
    float: left;
    padding-top: 10px;
    background: #fff;
    width: 100%;
    margin: auto;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan {
    margin: auto;
    color: #555;
    width: 100%;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .shangpin_100 {
    width: 100%;
    height: 30px;
    background: #e4f1fd;
    padding-top: 10px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .shangpin_100 .num {
    width: 1180px;
    margin: auto;
    height: 30px;
    background: #e4f1fd;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan li {
    width: 120px;
    float: left;
    font-size: 14px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan a {
    float: left;
    text-decoration: none;
    color: #555;
    font-weight: bold;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .active a {
    color: #5f8dda;
    font-weight: bold;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xiangqing {
    width: 1180px;
    margin: auto;
    margin-top: 20px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xiangqing .pro_xq_xinxi {
    width: 1180px;
    float: left;
    background: #f2f8fe;
    margin-bottom: 20px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xiangqing .pro_xq_xinxi p {
    padding-top: 10px;
    height: 20px;
    background: #f2f8fe;
    color: #666;
    padding-bottom: 5px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xiangqing .pro_xq_xinxi .xinxi_biaoti {
    font-weight: bold;
    color: #000;
    width: 90px;
    float: left;
    text-indent: 20px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xiangqing .pro_xq_xinxi .span_1 {
    float: left;
    color: #000;
    width: 60px;
     margin-left:10px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xiangqing .pro_xq_xinxi .span_2 {
    float: left;
    color: #666;
    margin-left:2px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xq_tupian {
    margin: auto;
    width: 1180px;
    text-align:left;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan .pro_xq_tupian img {
    margin: auto;
}
.reimen {
    width: 100%;
    float: left;
    margin-top: 30px;
}
.reimen_nr {
    width: 1180px;
    margin: auto;
    font-size: 14px;
    text-align:left;
}
.reimen .reimen_wenzi{
    width: 1180px;
    border: 1px solid #7f7f7f;
    float: left;
    margin-top: 2px;
}
.reimen .reimen_wz_text1 {
    width: 580px;
    float: left;
    text-indent: 10px;
    height: 20px;
    padding-top: 10px;
    padding-bottom: 5px;
    margin-left: 5px;
}
.reimen .reimen_wenzi .reimen_wz_text1 .span_biaoti {
    font-weight: bold;
    font-size: 15px;
    float: left;
    width: 50px;
    height: 25px;
    color: #585858;
}
.reimen  .reimen_wenzi .reimen_wz_text1 a {
    color: #585858;
    text-decoration: none;
}
.span_neirong{
    float:left;
    margin-top:2px;
}
.span_{
    float:left;
    margin-top:3px;
    margin-left:25px;
}
.shangpin .shangpin_nr .shangpin_daohangtiao .shangpin_qiehuan  a:hover{
    color:#3979AA;
}
.pinpai {
    width: 100%;
    float: left;
    margin-top: 30px;
    margin-bottom: 30px;
}
.pinpai .pinpai_nr {
    width: 1180px;
    margin: auto;
}
.pinpai .pinpai_nr .pinpai_biaoti {
    font-size: 16px;
    float: left;
    width: 1180px;
    height: 24px;
    text-align:left;
}
.pinpai .pinpai_nr .pinpai_b_left {
    width: 587px;
    height: 346px;
    float: left;
}
.pinpai .pinpai_nr .pinpai_b_right {
    background: url("http://127.0.0.1:3000/img/details_img/pinpai_b_right_img.jpg") no-repeat center;
    width: 593px;
    height: 346px;
    float: left;
}
.pinpai .pinpai_nr .pinpai_b_right .pinpai_b_right_top {
    font-size: 22px;
    font-family: Microsoft YaHei;
    float: left;
    margin-left: 200px;
    width: 393px;
    margin-top: 15px;
} 
 #stage li{
     box-sizing:border-box;
 }
 #stage li:hover{
    box-shadow:3px 5px 6px #0033ff;
    border:1px solid #0033ff 
 }
</style>