<template>
  <div class="product">
    <div class="main-content">
      <div class="container">
        <div class="span-6" style="margin-right:9px;">
          <div class="border-01 mt10">
            <div class="title-categories">
              <img src="http://127.0.0.1:3000/img/product_img/dazhong1.png">
              <div class="categories">
                <h2 class="diamond">
                  <router-link title="戒指" to="/product">戒指</router-link>
                  <router-link title="戒指" to="/product">女戒</router-link>
                  <router-link title="戒指" to="/product">男戒</router-link>
                </h2>
                <ul>
                   <li>
                    <a  href="#" v-for="i in categories_li" v-text="i"></a>
                   </li> 
                </ul>
                <h2 class="diamond">
                  <router-link title="戒指" to="/product">钻戒</router-link>
                </h2>
                <ul>
                   <li>
                    <a  href="#" v-for="i in categories_li_1" v-text="i"></a>
                   </li> 
                </ul>
                <h2 class="diamond">
                  <router-link title="戒指" to="/product">对戒</router-link>
                  <router-link title="戒指" to="/product">婚戒</router-link>
                </h2>
                <ul>
                   <li>
                    <a  href="#" v-for="i in categories_li_2" v-text="i"></a>
                   </li> 
                </ul>
                <h2 class="diamond">
                  <router-link title="耳钉" to="/product">耳钉</router-link>
                  <router-link title="耳环" to="/product">耳环</router-link>
                </h2>
                <ul>
                   <li>
                    <a  href="#" v-for="i in categories_li_3" v-text="i"></a>
                   </li> 
                </ul>
                <h2 class="diamond">
                  <router-link title="吊坠" to="/product">吊坠</router-link>
                  <router-link title="项链" to="/product">项链</router-link>
                </h2>
                <ul>
                   <li>
                    <a  href="#" v-for="i in categories_li_4" v-text="i"></a>
                   </li> 
                </ul>
                <h2 class="diamond">
                  <router-link title="手链" to="/product">手链</router-link>
                </h2>
                <ul>
                   <li>
                    <a href="#" >钻石手链</a>
                    <a  href="#" >K金手链</a>
                   </li> 
                </ul>
              </div>
            </div>
          </div>
          <div class="span-6">
            <div class="rank-box" style=" margin-top:0px;">
              <div id="tcb">
                <ul class="tit">
                  <li rel="nofollow" class="active" @mouseenter="addActive($event)"  @mouseleave="removeActive($event)">
                    热销款式
                  </li>
                  <li style="left:118px;" @mouseenter="addActive($event)"  @mouseleave="removeActive($event)">
                    新近款式
                  </li>
                </ul>
                <div class="rank-list"id="tcb1" style="display: block;">
                  <ul>
                    <li>
                      <div class="num">
                        <span class="num-1"></span>
                      </div>
                      <div class="wen">
                        <p>
                          <router-link to="#">【传世经典】  PT950铂金钻石戒指</router-link>
                        </p>
                        <p>
                          <span class="fl">
                          售价：￥26999.00
                          </span>
                        </p>
                      </div>
                      <div class="clear center">
                        <router-link to="#" title="【传世经典】">
                          <img src="http://127.0.0.1:3000/img/product_img/rementuijian.jpg" class="rementuijian">
                        </router-link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="border-08 mt10">
            <img src="http://127.0.0.1:3000/img/product_img/dazhong_2.png" style="margin-left:-90px">
            <div class="hot-sell" id="browse" v-for="s in 5">
              <ul>
                <li>
                  <a href="#" title="【吻】-白18k金浪漫情侣对戒女士钻戒">
                    <div class="sell-img">
                      <img src="http://127.0.0.1:3000/img/product_img/00544.jpg" width="85">
                    </div>
                    <div class="sell-text">【吻】-白18k金浪漫情侣对戒女士钻戒</div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="banner-left mt5">
              <p>
                <router-link to="#">
                  <img src="http://127.0.0.1:3000/img/product_img/banner-left.jpg">
                </router-link>
              </p>
            </div>
            <div class="banner-left mt5">
              <div class="commentBox mt10">
                <ul class="dh">
                  <li class="active">
                    <router-link to="#">产品与服务</router-link>
                  </li>
                  <li class>
                    <router-link to="#">新近评论</router-link>
                  </li>
                </ul>
                <div class="link-list" id="rew1" style="display: block; text-align: left;">
                  <p class="linkskey"></p>
                  <p> &nbsp;</p>
                  <div>
                    <span style="color:#808080;">
                    &nbsp;&nbsp;&nbsp;&nbsp;一般来说，30分以上的钻石戒指才有钻石证书，购买30-49分钻石戒指一定要看清是否有钻石证书。
                    </span>
                  </div>
                  <div> &nbsp;</div>
                  <div>
                    <span style="color:#808080;">
                      　　钻石证书是钻石质量的保证，主要对钻石的重量、切工、净度、颜色、抛光、对称性以及其他特征进行鉴定，可很多朋友反映，在国内市场并不是所有钻石戒指都提供钻石证书，包括周大福在内的很多国内一线钻戒品牌30分以下钻戒都是不提供钻石证书的，为何30分以上钻石才有GIA证书？
                    </span>
                  </div>
                  <div> &nbsp;</div>
                  <div>
                    <span style="color:#808080;">
                      　为何30分以上钻石才有GIA证书？由于国内消费者比较青睐GIA钻石证书，但这类证书获取需要将钻石邮寄到美国进行鉴定，来回不仅需要花费时间，也需要花费金钱，而一般30分以下钻戒售价在万元人民币以下，如果在通过邮寄的方式，最终还拉升成本的上扬，而无法让消费者买到平价钻戒，相对来说30分以上钻戒此方面的成本则可忽略。30-49分钻石戒指的购买一定要向商家索要钻石证书哦！
                    </span>
                  </div>
                  <p></p>
                </div>
                <div class="comment-list" id="rew2" style="display: none;">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="span-18 mt10" id="mainContent" style="width:917px;float:left;">
          <el-carousel class="lunbo">
            <el-carousel-item v-for="item in lunbo" :key="item" style="height:334px;">
              <router-link to="#"><img :src="item"></router-link>
             </el-carousel-item>
          </el-carousel>
          <div class="bread-nav mt10">当前位置：<router-link to="#">佐卡伊珠宝</router-link><span>></span>钻戒 
          </div>
          <div class="select-area">
            <h1 class="title fl">钻戒</h1>
            <span class="title fl">- 商品筛选</span>
            <div class="select-area-li">
              <dl>
                <dt>材质：</dt>
                <dd>
                  <router-link to="#" class="active" style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html">全部</router-link>
                </dd>
                <dd class="category_width">
                  <router-link to="#"style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html" v-for="(cai_zhi,i) in caizhi" :key="i" v-text="cai_zhi"></router-link>
                </dd>
              </dl>
              <dl>
                <dt>价格：</dt>
                <dd>
                  <router-link to="#" class="active" style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html">全部</router-link>
                </dd>
                <dd class="category_width">
                  <router-link to="#"style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html" v-for="(jia_ge,i) in jiage" :key=i v-text="jia_ge"></router-link>
                </dd>
              </dl>
               <dl>
                <dt>钻石：</dt>
                <dd>
                  <router-link to="#" class="active" style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html">全部</router-link>
                </dd>
                <dd class="category_width">
                  <router-link to="#"style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html" v-for="(zuan_shi,i) in zuanshi" :key=i v-text="zuan_shi"></router-link>
                </dd>
              </dl>
               <dl>
                <dt>镶嵌：</dt>
                <dd>
                  <router-link to="#" class="active" style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html">全部</router-link>
                </dd>
                <dd class="category_width">
                  <router-link to="#"style="cursor:pointer" data="c-a1-r-a-a-a-x-a.html" v-for="(xiang_qian,i) in xiangqian" :key=i v-text="xiang_qian"></router-link>
                </dd>
              </dl>
            </div>
          </div>
          <div class="select-area-nav">
            <ul>
              <li class="fl">
              共有 <strong>钻戒</strong><span style="color:Red;">373</span> 款产品
              </li>
              <li class="fr state">
                <router-link to="#" class style="cursor:pointer"><span>12</span></router-link>
                <router-link to="#" class="active"><span>30</span></router-link>
                <router-link to="#" class style="cursor:pointer"><span>60</span></router-link>
              </li>
              <li class="fr collat">
                 <b class="fl">排序：</b>
                 <div class="fl">
                  <div class="selected" id="selected">
                    <p>
                      <s class="sel_dropdown" id="selectDown" @click="show7">
                        <s class="i"></s>
                      </s>
                      人气从高到低
                    </p>
                    <div class="toselect" id="selectTo" v-show="hide">
                      <p><router-link to="#" style="cursor:pointer">价格从低到高</router-link></p>
                      <p><router-link to="#" style="cursor:pointer">价格从高到低</router-link></p>
                      <p><router-link to="#" style="cursor:pointer">人气从高到低</router-link></p>
                      <p><router-link to="#" style="cursor:pointer">人气从低到高</router-link></p>
                      <p><router-link to="#" style="cursor:pointer">时间从高到低</router-link></p>
                      <p><router-link to="#" style="cursor:pointer">时间从低到高</router-link></p>
                    </div>
                  </div>
                 </div>
              </li>
            </ul>
          </div>
          <!--商品列表项-小旭制作-->
          <div class="column-cp2">
            <ul>
              <div class="product_class">
                <li class="poduct_item" v-for="pro in  product ">
                  <div class="column-hover" name="mttt" code="Q00070A-W-RD-3Q00070A-W-RD-3">
                    <a href="#"@click.stop.prevent="id(pro.product_id)">
                      <img :src="pro.product_img" :alt="pro.product_name" width="210" height="210">
                    </a>
                    <p class="hover_title">
                      <router-link to="#">
                      <span v-text="pro.product_name"></span><br>
                      <span v-text="pro.product_title"></span>
                      </router-link>
                    </p>
                    <p>
                      售价:
                      <span class="fontprice">￥<span class="ft14" v-text="pro.product_price"></span></span>
                    </p>
                    <p class="cart">已售<span v-text="pro.product_yishou_num"></span>件，评价<span v-text="pro.product_pingjia_num"></span></p>
                  </div>
                  <div class="pro-pop-1" id="Q00070A-W-RD-3" style="left:229px;top:0px;text-align:left;">
                    <div class="pro-pop-2">
                      <div class="tit">产品信息</div>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="pro-t">
                        <tbody>
                          <tr>
                            <td>材质：</td>
                            <td v-text="pro.product_cpxx_caizhi"></td>
                          </tr>
                          <tr>
                            <td>金属重量：</td>
                            <td>约 <span v-text="pro.product_cpxx_jinshu"></span> 克</td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="tit">主钻信息</div>
                      <table cellpadding="0" cellspacing="0" border="0" width="100%" class="pro-t">
                        <tbody>
                          <tr>
                            <td>数量：</td>
                            <td><span v-text="pro.product_zzxx_num"></span> 颗</td>
                          </tr>
                          <tr>
                            <td>形状：</td>
                            <td v-text="pro.product_zzxx_xingzhuang"></td>
                          </tr>
                          <tr>
                            <td>重量：</td>
                            <td><span v-text="pro.product_zzxx_zhongliang"></span> 克拉</td>
                          </tr>
                          <tr>
                            <td>颜色：</td>
                            <td v-text="pro.product_zzxx_color"></td>
                          </tr>
                          <tr>
                            <td>净度：</td>
                            <td v-text="pro.product_zzxx_jingdu"></td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="tit">评论</div>
                      <div class="pro-pl">
                        <div class="ico">
                          <img src="http://127.0.0.1:3000/img/product_img/ico.gif">
                        </div>
                        <div class="nr" v-text="pro.product_zzxx_pingjia_text"></div>
                      </div>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
            <div class="clear"></div>
            <div class="pager">
              <ul>
                <li class="pager-left">
                  共 
                  <span class="acolor fb" v-text="ss.length"></span>
                  页 当前显示为
                  <span class="curpagecolor" v-text="page"></span>
                  页
                </li>
                <a href="#" style="font-size:16px;" :class="{active:item==actives}" v-for="(item,i) in ss" :key="i" v-text="item" @click="pageClick(item)"></a>
                <li class="pager-right" ></li>
              </ul>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="clear"></div>
        <p class="linkskey"></p>
        <div>&nbsp;</div>
        <div class="links mt10">
          <div>
            <div>
              <div id="ni_probox" style="width: 1178px; height: auto; overflow: hidden; border: 1px solid rgb(221, 221, 221); margin: 20px auto 0px; padding-bottom: 10px; color: rgb(77, 77, 77); font-family: Tahoma, arial, helvetica, clean, sans-serif;">
                <div class="boxtop" style="width: 1178px; height: 38px; background-color: rgb(245, 245, 245); float: left;">
                  <div class="boxtop_left" style="padding-left: 15px; float: left; font-family: 微软雅黑; font-size: 15px; line-height: 38px;">
                    <h2 style="padding: 0px; margin: 0px; font-weight: normal; font-size: 15px;">钻戒选购指南<span style="margin-left:620px;">简介</span></h2>
                  </div>
                </div>
                <div class="bottom_">
                  <ul>
                    <li v-for="bottom in bottom_"><span><img src="http://127.0.0.1:3000/img/product_img/boxtop_more.gif"></span><a href="#" :title="bottom" v-text="bottom"></a></li>
                  </ul>
                  <div style="margin-top:20px;float: right;width:500px;text-align:left; ">&nbsp;&nbsp;&nbsp;&nbsp;网上买钻戒什么牌子好？十大钻戒品牌排名NO.1佐卡伊:佐卡伊钻石戒指频道为您购买钻石戒指提供最新价格、款式、图片、用户评论等选购信息，价格为市场3-5折。选择满意的情侣钻戒、钻石戒指，我选佐卡伊。佐卡伊使每一个人都拥有了钻石梦想，更成为佐卡伊的品牌精髓，同时也开启了个性新钻饰时代。</div>
                  <div style="margin-top:20px;float: right;width:500px;text-align:left; ">佐卡伊为您找到348条戒指产品的详细参数，实时报价，价格详情等信息。您还可以找钻饰、K金首饰、婚戒、对戒等产品信息。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="links mt10">
          <div>
            <div>
              <div id="ni_probox" style="width: 1178px; height: auto; overflow: hidden; border: 1px solid rgb(221, 221, 221); margin: 20px auto 0px; padding-bottom: 10px; color: rgb(77, 77, 77); font-family: Tahoma, arial, helvetica, clean, sans-serif;">
                <div class="boxtop" style="width: 1178px; height: 38px; background-color: rgb(245, 245, 245); float: left;">
                  <div class="boxtop_left" style="padding-left: 15px; float: left; font-family: 微软雅黑; font-size: 15px; line-height: 38px;">
                    <h2 style="padding: 0px; margin: 0px; font-weight: normal; font-size: 15px;">钻戒选购指南</h2>
                  </div>
                </div>
                <div class="bottom_">
                  <div>
                    <div>
                      <a href="#" v-for="s in title" :title="s" v-text="s" style="margin-left:100px;display:inline-block"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              categories_li:["钻石戒指 |","宝石戒指 |","珍珠戒指 |","铂金戒指 |","K金戒指 |","结婚戒指 |"],
              categories_li_1:["铂金钻戒 |","K金钻戒 |","克拉钻戒 |","30分钻戒 |","50分钻戒 |","70分钻戒 |"],
              categories_li_2:["钻石对戒 |","铂金对戒 |","K金对戒 |","玫瑰金对戒 |","结婚女戒 |"],
              categories_li_3:["钻石耳钉 |","珍珠耳钉 |","铂金耳钉 |","钻石耳环 |","K金耳环 |"],
              categories_li_4:["钻石吊坠 |","宝石吊坠 |","珍珠吊坠 |","铂金吊坠 |","K金吊坠 |","K金项链 |"],
              num:0,
              lunbo:['http://127.0.0.1:3000/img/product_img/lunbo1.jpg','http://127.0.0.1:3000/img/product_img/lunbo2.jpg',
              ],
              caizhi:["PT950铂金","PT900铂金","白18K金","黄18K金","红18K金"],
              jiage:["1000以下","1000-2999","3000-4999","5000-6999","7000-9999","10000以上"],
              zuanshi:["10分以下","10-19分","20-29分","30-49分","50-69分","70-99分","1克拉以上"],
              xiangqian:["钻石","宝石","珍珠"],
              hide:false,
              bottom_:["钻戒图片大全 钻戒图片大全鉴赏","钻戒佩戴建议 钻戒混搭佩戴","钻戒品牌排行大全 中国钻戒品牌排行榜","如何挑选钻戒戒托？钻戒省钱攻略","根据手型正确挑选钻戒 3大款式和3大保养秘诀","40分钻戒价格多少 40分钻戒一般多少钱 ","3克拉钻戒一般多少钱 上班族买3克拉钻戒多少钱","2克拉钻石多少钱？ 明星婚礼2克拉钻戒增彩","10克拉钻戒一般多少钱 上班族买10克拉钻戒","1.5克拉钻戒多少钱 1.5克拉钻戒价钱"],
              title:["结婚钻戒","铂金钻戒","玫瑰金钻戒","钻石吊坠","钻石耳环","钻石耳钉","钻石手链"],
              product:[],
              ss:["1","2","3","4","5","6","7"],
              page:1,
              actives:1,
            }
          },
          methods:{
            addActive($event){
              $event.target.classList.add("active");
            },
            removeActive($event){
              $event.target.className="";
            },
            show7(){
                this.hide=!this.hide;
            },
            //分页获取当页内容   //
            pageClick(item){
                this.actives=item;
                this.page=item;
                this.axios.get("http://127.0.0.1:3000/products/product_list", {  //params参数必写 , 如果没有参数传{}也可以
                  params: { 
                    num1:(item-1)*32, //分页动态请求参数-传过去查询
                    num2:32
                  }
              })
              .then(res=>{ 
                 this.product=res.data;
              })
            },
            //传商品ID过去
            id(id){
              console.log(id);
              this.$router.push('/product/details/'+id)
            }
          },
          created(){
              this.axios.get(
                "http://127.0.0.1:3000/products/product"
              )
            .then(res=>{
              console.log(res);
              this.product=res.data;
            })
          },
        mounted() {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
        },
      }
</script>
<style scoped>
a{
   color: #666666;
    text-decoration: none;
}
.main-content .container{
    width: 1180px;
    margin: 0 auto;
    /* overflow: hidden;*/
    height: 100%;
}
.span-6{
    width: 263px;
    float: left;
}
.border-01{
    border: #950000 2px solid;
    background: #fff;
    padding: 3px;
    overflow: hidden;
    height: 100%;
}
 .mt10{
    margin-top: 10px;
 }
.categories{
    background: none repeat scroll 0 0 #E8E8E8;
    height: 445px;
    line-height: 26px;
    margin: 0 3px;
    overflow: hidden;
    margin-top: -3px;
}
.categories h2 {
    padding: 0 5px;
}
.categories h2 a{
    color: #950000;
    display: inline;
    font-size: 16px;
    font-weight: 400;
    float:left;
}
.categories a {
    padding: 0 4px;
}
.categories li{
    background: none repeat scroll 0 0 #F2F2F2;
    clear: both;
    line-height: 21px;
    text-align:left;
    padding: 4px 5px;
}
.categories li a{
  display:inline-block;
  margin-right:2px;
}
.diamond>a:hover{text-decoration:underline;}
.categories>ul>li>a:hover{
  text-decoration:underline;
  color: #950000;
}
.span-6 {
    width: 230px;
}
.rank-box {
    margin-top: 40px;
    border-top: 4px solid #cecece;
    border-left: 1px solid #cecece;
    border-right: 1px solid #cecece;
}
.rank-box .tit {
    height: 27px;
    position: relative;
    border-bottom: 1px solid #cecece;
    padding: 9px 0 0 16px;
}
.rank-box .tit .active {
    background: #fff;
    border-bottom: 1px solid #fff;
}
.rank-box .tit li {
    float: left;
    position: absolute;
    bottom: -1;
    left: 15px;
    cursor: pointer;
    background: #f5f4f0;
    width: 92px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    margin-right: 9px;
    border: 1px solid #cecece;
}
.rank-box .tit li a {
    text-decoration: none;
}
.rank-box .rank-list ul {
    overflow: hidden;
    height: 100%;
}
.rank-box .rank-list ul li {
    padding: 15px 0;
    float: left;
    width: 100%;
    border-bottom: 1px solid #cecece;
    overflow: hidden;
    height: 100%;
}
.border-08 mt10{
    border: #cacaca 2px solid;
    background: #fff;
    padding: 3px;
    overflow: hidden;
    height: 100%;
}
.title-history {
    margin-top: 5px;
    height: 29px;
    text-indent: -999px;
}
.rank-box .rank-list ul li .num {
    float: left;
    height: 24px;
    padding: 10px 6px 0 10px;
}
.rank-box .rank-list ul li .num-1 {
    display: block;
    width: 42px;
    height: 24px;
    background: url(http://127.0.0.1:3000/img/product_img/num-1.gif) no-repeat 0 0;
}
.rank-box .rank-list ul li .wen {
    margin-left: 18px;
    line-height: 21px;
}
.rank-box .rank-list ul li .wen span {
    font-family: "å¾®è½¯é›…é»‘";
    color: #950001;
}
.fl {
    float: left;
}
.border-08 {
    border: #cacaca 2px solid;
    background: #fff;
    padding: 3px;
    overflow: hidden;
    height: 100%;
}
.hot-sell {
    height: 100%;
    overflow: hidden;
    padding: 5px 0;
}
.hot-sell .sell-img {
    border: 1px solid #CCC;
    float: left;
    height: 85px;
    width: 85px;
}
.hot-sell .sell-text {
    float: left;
    line-height: 21px;
    margin: 0 5px;
    width: 110px;
    word-wrap: break-word;
    word-break: break-all;
}
.banner-left {
    text-align: center;
}
.mt5 {
    margin-top: 5px;
}
.commentBox {
    overflow: hidden;
    height: 100%;
    padding: 0 4px;
}
.commentBox .dh {
    /*overflow: hidden;
    height: 100%;*/
    line-height: 21px;
    background: #fcfcfc;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    height: 100%;
}
.commentBox .dh .active {
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-top: 2px solid #f60;
    font-weight: 700;
}
.commentBox .dh li {
    float: left;
    width: 65px;
    padding: 3px 20px;
    background: #fff;
    text-align: center;
    cursor: pointer;
}
.commentBox .comment-list {
    line-height: 21px;
    padding: 8px 3px;
    clear: both;
    overflow: hidden;
    height: 100%;
}
.span-18 {
    margin-right: 0;
}
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .lunbo{
    width:917px;
    height:334px;
  }
  .lunbo img{
    width:100%;
    height:100%;
  }
  .bread-nav {
    font-family: å®‹ä½“;
    height: 100%;
    line-height: 30px;
    padding-left: 20px;
     text-align:left;
    overflow: hidden;
    background: url(http://127.0.0.1:3000/img/product_img/bread-nav.gif) 0px 8px no-repeat;
}
.bread-nav a {
    margin: 0 3px;
}
.select-area {
    background: none repeat scroll 0 0 #FFF;
    border: 8px solid #EFEFEF;
    height: 100%;
    overflow: hidden;
    padding: 5px 12px;
}
.select-area .title {
    color: #7F7E7E;
    font-size: 14px;
    font-weight: bolder;
    height: 24px;
}
.fl {
    float: left;
}
.select-area-li dd a, .select-area-li dt {
    display: inline;
    float: left;
    margin-left:24px;
    padding: 2px 5px;
    white-space: nowrap;
}
.select-area-li dl {
    border-top: 1px dashed #CCC;
    clear: both;
    height: 100%;
    overflow: hidden;
    padding: 5px 0;
}
.select-area-li dd, .select-area-li dt {
    display: inline;
    float: left;
}
.select-area-li .active, .select-area-li dd a:hover {
    background: none repeat scroll 0 0 #770101;
    color: #FFF;
    text-decoration: none;
}
.select-area-li dd, .select-area-li dt {
    display: inline;
    float: left;
}
.category_width {
    margin: 0 10px;
    width: 560px;
}
.select-area-nav {
    background: url(http://127.0.0.1:3000/img/product_img/select-area-nav.png) repeat-x scroll 0 -305px transparent;
    border: 1px solid #B4B4B4;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
}
strong, b {
    font-weight: bold;
}
.select-area-nav span {
    font-family: å®‹ä½“;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(223, 223, 223);
    border-image: initial;
    padding: 2px 3px;
}
.fr {
    float: right;
}
.select-area-nav .state a {
    background: none repeat scroll 0 0 #770101;
    color: #FFF;
}
.select-area-nav .state a:hover{
    background: none repeat scroll 0 0 #FFF;
    color: #770101;
    font-weight: bolder;
    text-decoration:underline;
}
.select-area-nav .active span {
    background: none repeat scroll 0 0 #FFF;
    color: #770101;
    font-weight: bolder;
}
.select-area-nav .collat {
    margin-right: 10px;
}
.select-area-nav .collat .selected {
    border: 1px solid #BBB;
    display: inline-block;
    height: 18px;
    line-height: 18px;
    margin: 0 .2em;
    position: relative;
    text-indent: 2px;
    top: -2.5px;
    vertical-align: text-top;
    width: 94px;
    z-index: 999;
    text-align:left;
}
.sel_dropdown {
    border-left: 1px solid #CCC;
    height: 18px;
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
}
.sel_dropdown .i {
    border-color: #A6A6A6 #F3F3F3 #FFF;
    border-style: solid;
    border-width: 4px 4px 0;
    height: 0;
    left: 49%;
    line-height: 0;
    margin-left: -4px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 0;
}
.toselect {
    background-color: #FFF;
    border: 1px solid #A6A6A6;
    left: -1px;
    margin-top: -1px;
    position: absolute;
    text-indent: 2px;
    top: 19px;
    width: 94px;
    z-index: 999;
}
.column-cp2 {
    background: url(http://127.0.0.1:3000/img/product_img/clear.gif) repeat-y scroll 0 0 transparent;
    border-left: 1px solid #CCC;
    line-height: 21px;
    position: relative;
    float: left;
    width: 100%;
}
.column-cp2 li {
    border-bottom: 1px solid #CCC;
    border-right: 1px solid #CCC;
    float: left;
    text-align: center;
    position: relative;
}
.column-hover {
    padding: 10px 0;
    width: 220px;
    height: 292px;
    border: 4px solid #fff;
}
.fontprice {
    font-size: 12px;
    font-weight: bolder;
    color: #770101;
}
.ft14 {
    font-size: 14px;
}
.pro-pop-1 {
    border: 1px solid #d8ce94;
    background: #fffff2;
    width: 237px;
    padding: 1px;
    position: absolute;
    overflow: hidden;
    z-index: 999;
}
.pro-pop-1 .pro-pop-2 {
    border: 1px solid #d8ce94;
    background: #fffff2;
    padding: 6px 15px;
    line-height: 24px;
    overflow: hidden;
}
.pro-pop-1 .tit {
    font-weight: 700;
    color: #950001;
    padding-top: 1px;
    line-height: 24px;
}
.pro-pop-1 .pro-t {
    border-right: 1px solid #fffff2;
    border-bottom: 1px solid #fffff2;
}
table, th, td {
    vertical-align: middle;
}
table {
    border-collapse: separate;
    border-spacing: 0;
    font: normal 12px/1.5'Tahoma','simsun';
    color: #333;
}
.pro-pop-1 .pro-t td {
    width: 50%;
    line-height: 24px;
    text-indent: 15px;
    border-left: 1px solid #fffff2;
    border-top: 1px solid #fffff2;
    background: #eeeecb;
}
caption, th, td {
    text-align: left;
    font-weight: normal;
    float: none !important;
}
td, th {
    display: table-cell;
}
.pro-pop-1 .tit {
    font-weight: 700;
    color: #950001;
    padding-top: 1px;
    line-height: 24px;
}
.pro-pop-1 .pro-pl {
    border-top: 1px dashed #cacaa3;
    overflow: hidden;
    height: 100%;
    padding: 8px 0;
}
.pro-pop-1 .pro-pl .ico {
    float: left;
    width: 16px;
    height: 16px;
    padding-left: 2px;
}
.pro-pop-1 .pro-pl .nr {
    float: left;
    width: 175px;
    padding: 2px 0 0 8px;
    line-height: 16px;
}
.clear {
    clear: both;
    height: 0;
    overflow: hidden;
}
.pager {
    background: none repeat scroll 0 0 #E6E6E6;
    height: 35px;
    padding: 5px 10px 0;
    text-align: right;
}
.pager-left{
    background: url(http://127.0.0.1:3000/img/product_img/pager-left.png) no-repeat scroll -288px -32px transparent;
    float: left;
    line-height: 34px;
    padding-left: 12px;
}
.fb {
    font-weight: 700;
}
.acolor {
    color: #8d0000;
}
.pager a {
    background: none repeat scroll 0 0 #FFF;
    border: 1px solid #CCC;
    color: #434343;
    font-family: 'Ã¥Â®â€¹Ã¤Â½â€œ';
    line-height: 30px;
    padding: 5px 10px;
}
.pager .active {
    background: none repeat scroll 0 0 #950000;
    color: #FFF;
    font-weight: bolder;
}
.links {
    line-height: 21px;
    overflow: hidden;
    height: 100%;
}
.bottom_{
  height:50px;
}
.bottom_ ul{
  float:left;
  width:619px;
  margin-top:19px;
}
.bottom_ ul li{
  height:31px;
  width:278px;
  float:left;
  text-align:left;
  margin-left:20px;
  line-height:31px;
  overflow:hidden;
  border-bottom-width: 1px;
  border-bottom-style: dotted;
  border-bottom-color: rgb(195, 195, 195);
}
.bottom_ ul li span{
    float: left;
    margin-top: -2px;
}
.bottom_ ul li a{
  display:inline-block;
  margin-left:10px;
}
/*.poduct_item:hover{
  box-sizing: content-box;
  border:3px solid red;
}*/
.pro-pop-1{display:none;}
.poduct_item:hover .pro-pop-1{
 display:block;
}
.poduct_item:hover{
 box-shadow:0px 0px 13px 5px #DBDB40 inset;
}
.hover_title:hover a{
  color:#950000;
  text-decoration:underline;
}
</style>
