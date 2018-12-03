<template>
  <div class="block">
    <!--轮播图区域-->
    <span class="demonstration">一生真爱慧中美满</span>
    <el-carousel trigger="click" height="30rem">
      <el-carousel-item v-for="item in imgs" :key="item">
       <img :src="item" class="lunbo">
      </el-carousel-item>
    </el-carousel>
    <!--轮播图以下区域第一部分热门分类-->
    <div class="new_plan_one">
      <div class="new_class">
        <div class="new_class_top">
          <h1>热门分类</h1>
          <span class="new_class_top_span1">Classification</span>
          <span class="new_class_top_span2">
            <router-link to="">更多 >></router-link>
          </span>
        </div>
        <div class="new_class_context">
          <div class="new_class_context_ring">
            <div class="new_class_context_ring_img">
              <img src="http://127.0.0.1:3000/img/index_img/new_class_context_ring_img1.jpg">
            </div>
            <div class="new_class_context_ring_url">
              <div class="new_class_context_ring_url_top">
                <ul>
                  <li v-for="one in RMFL_one">
                    <router-link to="" style="color:#577bb5;    text-decoration:none;" v-text="one" title="美戒"></router-link>
                  </li>
                </ul>
              </div>
              <div class="new_class_context_ring_url_bottom">
                <ul>
                  <li v-for="one in RMFL_one_1">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="one"></router-link> &nbsp;·
                  </li>
                  <li v-for="oned in RMFL_one_2">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="oned"></router-link> &nbsp;·
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="new_class_context_ring">
            <div class="new_class_context_ring_img">
              <img src="http://127.0.0.1:3000/img/index_img/new_class_context_ring_img2.jpg">
            </div>
            <div class="new_class_context_ring_url">
              <div class="new_class_context_ring_url_top">
                <ul>
                  <li v-for="two in RMFL_two">
                    <router-link to="/product" style="color:#577bb5;    text-decoration:none;" v-text="two" title="美戒"></router-link>
                  </li>
                </ul>
              </div>
              <div class="new_class_context_ring_url_bottom">
                <ul>
                  <li v-for="two in RMFL_two_1">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="two"></router-link> &nbsp;·
                  </li>
                  <li v-for="twod in RMFL_two_2">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="twod"></router-link> &nbsp;·
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="new_class_context_ring">
            <div class="new_class_context_ring_img">
              <img src="http://127.0.0.1:3000/img/index_img/new_class_context_ring_img3.jpg">
            </div>
            <div class="new_class_context_ring_url">
              <div class="new_class_context_ring_url_top">
                <ul>
                  <li>
                    <router-link to="/product" style="color:#577bb5;    text-decoration:none;" title="美戒">对戒</router-link>
                  </li>
                </ul>
              </div>
              <div class="new_class_context_ring_url_bottom">
                <ul>
                  <li v-for="three in RMFL_three_1">
                    <router-link to="#" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="three"></router-link> &nbsp;·
                  </li>
                  <li>
                    <router-link to="#" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" >玫瑰金对戒</router-link> &nbsp;·
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="new_class_context_ring">
            <div class="new_class_context_ring_img">
              <img src="http://127.0.0.1:3000/img/index_img/new_class_context_ring_img1.jpg">
            </div>
            <div class="new_class_context_ring_url">
              <div class="new_class_context_ring_url_top">
                <ul>
                  <li v-for="four in RMFL_four">
                    <router-link to="/product" style="color:#577bb5;    text-decoration:none;" v-text="four" title="美戒"></router-link>
                  </li>
                </ul>
              </div>
              <div class="new_class_context_ring_url_bottom">
                <ul>
                  <li v-for="four_1 in RMFL_four_1">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="four_1"></router-link> &nbsp;·
                  </li>
                  <li v-for="fourd in RMFL_four_2">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="fourd"></router-link> &nbsp;·
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="new_class_context_ring">
            <div class="new_class_context_ring_img">
              <img src="http://127.0.0.1:3000/img/index_img/new_class_context_ring_img5.jpg">
            </div>
            <div class="new_class_context_ring_url">
              <div class="new_class_context_ring_url_top">
                <ul>
                  <li v-for="five in RMFL_five" style="width:4.75rem;">
                    <router-link to="/product" style="color:#577bb5;    text-decoration:none;" v-text="five" title="美戒"></router-link>
                  </li>
                </ul>
              </div>
              <div class="new_class_context_ring_url_bottom">
                <ul>
                  <li v-for="five_1 in RMFL_five_1">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="five_1"></router-link> &nbsp;·
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="new_class_context_ring">
            <div class="new_class_context_ring_img">
              <img src="http://127.0.0.1:3000/img/index_img/new_class_context_ring_img6.jpg">
            </div>
            <div class="new_class_context_ring_url">
              <div class="new_class_context_ring_url_top">
                <ul>
                  <li v-for="six in RMFL_six">
                    <router-link to="/product" style="color:#577bb5;    text-decoration:none;" v-text="six" title="美戒"></router-link>
                  </li>
                </ul>
              </div>
              <div class="new_class_context_ring_url_bottom">
                <ul>
                  <li v-for="six_1 in RMFL_six_1">
                    <router-link to="/product" class="new_class_context_ring_url_bottom_routerlink" title="欢迎购买" v-text="six_1"></router-link> &nbsp;·
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="new_diamond">
        <div class="new_diamond_top">
          <div class="new_diamond_top_querw">
            <span>
              <img src="http://127.0.0.1:3000/img/index_img/new_diamond_top_querw_img1.jpg">
            </span>
            <span>
            <router-link to="/product">
              <img src="http://127.0.0.1:3000/img/index_img/new_diamond_top_querw_img2.png">
              </router-link>
            </span>
          </div>
          <div class="new_diamond_top_text">
          
                    共
                    <span style="color: #4672b9;">267644</span>颗钻石随心定制
                
          </div>
        </div>
        <div class="new_diamond_bottom">
          <ul>
            <li v-for="(img,i) in new_diamond_bottom_imges">
              <router-link to="">
                <img :src="img.url">
              </router-link>
              <p>
                <router-link to="" v-text="img.title">0.30CT E色 VS2</router-link>
              </p>
              <p style="font-weight:bold;" v-text="img.count">
                14716.00
              </p>
            </li>
          </ul>
        </div>  
      </div>
    </div>
    <div class="mendian">
      <div class="mendian_shang">
        <div class="mendian_s_left">
          <h1 class="menpai">品牌门店</h1>
          <div class="menpaiyinwen">PHYSICAL STORE</div>
        </div>
        <div class="mendian_s_right">
          <div class="more01"><router-link to="">更多>></router-link></div>
        </div>
      </div>
      <div class="mendian_xia">
        <span>
          <router-link to="#">
            <img src="http://127.0.0.1:3000/img/index_img/mendian_xia.jpg" class="mendian_xia_img"></img>
          </router-link>
        </span>
      </div>
    </div>
    <div class="Store_contain">
      <div class="Store_list">
        <div class="local">
          <div class="here">
            <div class="site_ico"></div>
            <p>您现在的位置是：
              <span id="showcity"></span>
            </p>
          </div>
          <div class="nearest">
            <div style="overflow: hidden;">
            
                        推荐实体店：
                   <span id="offlineshop"></span>     
            </div>
          </div>
        </div>
        <div class="list-Item">
          <ul>
            <li v-for="listItem in list_Item_ul_li">
              <router-link to="#" :title="listItem" v-text="listItem"></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>


    <!--商品第一排-->
    <div class="neirong">
      <div class="container_shang">
        <div class="container_s_left">
          <h1 class="dingqing" v-text="bigTitle[0]"></h1>
          <div class="dingqingyinwen">WEDDING RINGS</div>
        </div>
        <div class="container_s_right">
          <div class="more">
            <span v-for="a in smallTitle">
              <a href="#"  v-text="a"></a>
              <font color="#cccccc">|</font>
            </span>
          </div>
        </div>
      </div>
      <div class="container_zhong">
        <span>
          <router-link to="#">
            <img :src="product_img" style="width: 59rem">
          </router-link>
        </span>
      </div>
      <div class="container_xia">
        <ul>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic[0]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title[0]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details[0]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price[0]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic[1]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title[1]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details[1]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price[1]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic[2]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title[2]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details[2]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price[2]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic[3]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title[3]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details[3]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price[3]"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--商品第二排-->
    <div class="neirong">
      <div class="container_shang">
        <div class="container_s_left">
          <h1 class="dingqing" v-text="bigTitle_1[0]"></h1>
          <div class="dingqingyinwen">WEDDING RINGS</div>
        </div>
        <div class="container_s_right">
          <div class="more">
            <span v-for="a in smallTitle_1">
              <a href="#"  v-text="a"></a>
              <font color="#cccccc">|</font>
            </span>
          </div>
        </div>
      </div>
      <div class="container_zhong">
        <span>
          <router-link to="/product">
            <img :src="product_img_1" style="width: 59rem">
          </router-link>
        </span>
      </div>
      <div class="container_xia">
        <ul>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_1[0]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_1[0]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_1[0]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_1[0]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_1[1]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_1[1]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_1[1]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_1[1]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_1[2]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_1[2]"></router-link>
                <br>
                <router-link to="" style="margin-top:0.1rem" v-text="details_1[2]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_1[2]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_1[3]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_1[3]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_1[3]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_1[1]"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--商品三排-->
    <div class="neirong">
      <div class="container_shang">
        <div class="container_s_left">
          <h1 class="dingqing" v-text="bigTitle_2[0]"></h1>
          <div class="dingqingyinwen">WEDDING RINGS</div>
        </div>
        <div class="container_s_right">
          <div class="more">
            <span v-for="a in smallTitle_2">
              <a href="#"  v-text="a"></a>
              <font color="#cccccc">|</font>
            </span>
          </div>
        </div>
      </div>
      <div class="container_zhong">
        <span>
          <router-link to="/product">
            <img :src="product_img_2" style="width: 59rem">
          </router-link>
        </span>
      </div>
      <div class="container_xia">
        <ul>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_2[0]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_2[0]"></router-link>
                <br>
                <router-link to="" style="margin-top:0.1rem" v-text="details_2[0]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_2[0]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_2[1]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_2[1]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_2[1]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_2[1]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_2[2]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_2[2]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_2[2]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_2[2]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_2[3]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_2[3]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_2[3]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_2[3]"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--商品四排-->
    <div class="neirong">
      <div class="container_shang">
        <div class="container_s_left">
          <h1 class="dingqing" v-text="bigTitle_3[0]"></h1>
          <div class="dingqingyinwen">WEDDING RINGS</div>
        </div>
        <div class="container_s_right">
          <div class="more">
            <span v-for="a in smallTitle_3">
              <a href="#"  v-text="a"></a>
              <font color="#cccccc">|</font>
            </span>
          </div>
        </div>
      </div>
      <div class="container_zhong">
        <span>
          <router-link to="/product">
            <img :src="product_img_3" style="width: 59rem">
          </router-link>
        </span>
      </div>
      <div class="container_xia">
        <ul>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_3[0]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_3[0]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_3[0]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_3[0]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" title="">
                <img :src="pic_3[1]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_3[1]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_3[1]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_3[1]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" target="_blank" title="">
                <img :src="pic_3[2]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_3[2]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_3[2]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_3[2]"></p>
            </div>
          </li>
          <li>
            <div class="chanpin">
              <router-link to="/product" target="_blank" title="">
                <img :src="pic_3[3]" border="0">
              </router-link>
              <p>
                <router-link to="/product" style="margin-top:0.1rem" v-text="product_title_3[3]"></router-link>
                <br>
                <router-link to="/product" style="margin-top:0.1rem" v-text="details_3[3]"></router-link>
              </p>
              <p class="lanse" style="margin-top:0.1rem"v-text="price_3[3]"></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="new_quanguo">
      <div class="new_quanguo_shang">
        <h1>全国门店</h1>
      </div>
      <div class="new_quanguo_xia">
        <span v-for="quanguo in new_quanguo_xia">
          <router-link to="">
            <img :src="quanguo">
          </router-link>
        </span>
      </div>
    </div>
    <div class="new_huodong">
      <div class="new_huodong_one">
        <ul>
          <li v-for="i in new_huodong_one_li_img">
            <router-link to="#" :title="i" v-text="i"></router-link>
          </li>
        </ul>
      </div>
      <div class="new_huodong_one">
        <ul>
          <li v-for="i in new_huodong_one_li_img1">
            <router-link to="#" :title="i" v-text="i"></router-link>
          </li>
        </ul>
      </div>
      <div class="new_huodong_one">
        <ul>
          <li v-for="i in new_huodong_one_li_img2">
            <router-link to="#" :title="i" v-text="i"></router-link>
          </li>
        </ul>
      </div>
      <div class="new_huodong_one">
        <ul>
          <li v-for="i in new_huodong_one_li_img3">
            <router-link to="#" :title="i" v-text="i"></router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="new_index_center_nav">
      <a href="#" v-for="v in  bottom" v-text="v"></a>
    </div>
    <div><img src="http://127.0.0.1:3000/img/index_img/888.png" style="width: 59.9rem;height: 8.85rem;"></div>
  </div>
</template>
<script>
   export default{
       data(){
           return {
               active:0,
                imgs:[
                    "http://127.0.0.1:3000/img/index_img/index_lunbo1.jpg",
                    "http://127.0.0.1:3000/img/index_img/index_lunbo2.jpg",
                    "http://127.0.0.1:3000/img/index_img/index_lunbo3.jpg",
                    "http://127.0.0.1:3000/img/index_img/index_lunbo4.jpg",
                    "http://127.0.0.1:3000/img/index_img/index_lunbo5.jpg",  
                ],
                RMFL_one:["戒指","女戒","男戒"],
                RMFL_one_1:["钻石戒指","铂金戒指","K金戒指"],
                RMFL_one_2:["30分钻戒","50分钻戒","克拉钻戒"],
                RMFL_two:["耳钉","耳环"],
                RMFL_two_1:["钻石耳钉","珍珠耳钉","铂金耳钉"],
                RMFL_two_2:["K金耳钉","钻石耳环","K金耳环"],
                RMFL_three_1:["钻石对戒","铂金对戒","K金对戒"],
                RMFL_four:["项饰","吊坠","项链","手链"],
                RMFL_four_1:["钻石吊坠","宝石吊坠","珍珠吊坠"],
                RMFL_four_2:["铂金吊坠","k金吊坠","k金项链"],
                RMFL_five:["大溪地黑珍珠","南洋金珍珠"],
                RMFL_five_1:["珍珠戒指","珍珠吊坠","珍珠耳钉"],
                RMFL_six:["红宝石","蓝宝石","芙蓉石","碧玺"],
                RMFL_six_1:["宝石戒指","宝石吊坠","宝石耳钉"],
                new_diamond_bottom_imges:[{
                 
                 "url":"http://127.0.0.1:3000/img/index_img/new_diamond_bottom_img1.jpg",
                  "title":"0.30CT E色 VS2",
                  "count":"14716.00"
                },{
                 
                 "url":"http://127.0.0.1:3000/img/index_img/new_diamond_bottom_img2.jpg",
                  "title":"0.50CT D色 VS1",
                  "count":"51228.00"
                },{
                 
                 "url":"http://127.0.0.1:3000/img/index_img/new_diamond_bottom_img3.jpg",
                  "title":"0.70CT F色 SI1",
                  "count":"66486.00"
                },{
                 
                 "url":"http://127.0.0.1:3000/img/index_img/new_diamond_bottom_img4.jpg",
                  "title":"1.00CT H色 VS2",
                  "count":"168930.00"
                }],
                list_Item_ul_li:[
                  "广东>深圳","浙江>杭州","上海>上海","北京>北京","江苏>苏州","湖北>武汉","四川>成都","陕西>西安","安徽>合肥","更多实体店>>"
                ],
                new_quanguo_xia:["http://127.0.0.1:3000/img/index_img/new_quanguo_xia_img_1.jpg","http://127.0.0.1:3000/img/index_img/new_quanguo_xia_img_2.jpg","http://127.0.0.1:3000/img/index_img/new_quanguo_xia_img_3.jpg","http://127.0.0.1:3000/img/index_img/new_quanguo_xia_img_4.jpg"],
                new_huodong_one_li_img:["七夕挚爱特辑 与你做一生的cp","【福利活动】这个夏天，适合定制专属于我们的信物~","佐卡伊520告白季","佐卡伊风尚宣言","佐卡伊O2O加盟 百万创富火热中","佐卡伊晒单赢珠宝","如果蜗牛有爱情同款优惠","异形钻石的百变世界"],
                 new_huodong_one_li_img1:["钻戒定制靠谱吗？","s925银多少钱一克","钻戒定制品牌排行","周大福黄金首饰以旧换新","中国珠宝品牌大全"],
                 new_huodong_one_li_img2:["做我一生的cp，你敢吗？","2018深圳国际珠宝展，佐卡伊钻石信物馆抢眼成吸睛头条","《为了你我愿意热爱整个世界》剧中同款珠宝","《温暖的弦》剧中同款珠宝","繁星四月剧中同款珠宝"],
                 new_huodong_one_li_img3:["为了你我愿意热爱整个世界丨你是这世界，写给我的情书","佐卡伊陪你穿越到《夏至未至》的时光里","《夏至未至》在那个台播出  《夏至未至》什么时候开播","这个繁星四月，我想与你共筑属于我们的爱巢","佐卡伊CEO吴涛的钻石梦想历程"],
                pic:"",
                product_title:"",
                details:"",
                price:"",
                bigTitle:"",
                smallTitle:"",
                product_img:"",


                 pic_1:"",
                product_title_1:"",
                details_1:"",
                price_1:"",
                bigTitle_1:"",
                smallTitle_1:"",
                product_img_1:"",


                 pic_2:"",
                product_title_2:"",
                details_2:"",
                price_2:"",
                bigTitle_2:"",
                smallTitle_2:"",
                product_img_2:"",
                 pic_3:"",
                product_title_3:"",
                details_3:"",
                price_3:"",
                bigTitle_3:"",
                smallTitle_3:"",
                product_img_3:"",

                bottom:["婚戒","女戒","男戒","情侣对戒","钻饰","彩宝","K金","其他"],
           }
       },
        computed:{
            
        },
       methods:{
          pro(){
              this.axios.get(
              "http://127.0.0.1:3000/index/index_products").then(res=>{
              for(var t in res.data){
                this.smallTitle=res.data[0].smallTitle.split(",");
                this.bigTitle=res.data[0].bigTitle.split(",");
                this.product_img=res.data[0].product_img;
                this.pic=res.data[0].pic.split(",");
                this.product_title=res.data[0].product_title.split(",")
                this.price=res.data[0].price.split(",")
                this.details=res.data[0].details.split(",")

                this.smallTitle_1=res.data[1].smallTitle.split(",");
                this.bigTitle_1=res.data[1].bigTitle.split(",");
               // console.log(this.bigTitle_1)
                this.product_img_1=res.data[1].product_img;
                this.pic_1=res.data[1].pic.split(",");
                this.product_title_1=res.data[1].product_title.split(",")
                this.price_1=res.data[1].price.split(",")
                this.details_1=res.data[1].details.split(",")

                this.smallTitle_2=res.data[2].smallTitle.split(",");
                this.bigTitle_2=res.data[2].bigTitle.split(",");
                this.product_img_2=res.data[2].product_img;
                this.pic_2=res.data[2].pic.split(",");
                this.product_title_2=res.data[2].product_title.split(",")
                this.price_2=res.data[2].price.split(",")
                this.details_2=res.data[2].details.split(",")

                this.smallTitle_3=res.data[3].smallTitle.split(",");
                this.bigTitle_3=res.data[3].bigTitle.split(",");
                this.product_img_3=res.data[3].product_img;
                this.pic_3=res.data[3].pic.split(",");
                this.product_title_3=res.data[3].product_title.split(",")
                this.price_3=res.data[3].price.split(",")
                this.details_3=res.data[3].details.split(",")
              }
          })       
        }  
    },
    created(){
        this.pro()
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 0.7rem;
    opacity: 0.75;
    line-height: 7.5rem;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.lunbo{width:100%;height:100%}
.new_plan_one{
    width: 59rem;
    margin: 0 auto;
    height:15.15rem;
}
.new_class{ 
    /*margin-left:-106px;*/
    width: 40rem;
    height: 15.15rem;
    border: 0.05rem solid #cacaca;
    float: left;
}
.new_class_top{
    height: 1.85rem;
    width: 100%;
    float: left;
}
.new_plan_one .new_class .new_class_top h1{
    font-size: 0.8rem;
    color: #577bb5;
    float: left;
    margin-top: 0.25rem;
    margin-left: 2.1rem;
}
.new_plan_one .new_class .new_class_top .new_class_top_span1{
    font-size: 0.7rem;
    color: #cecece;
    float: left;
    line-height:1.45rem;
    margin-left: 0.5rem;
}
.new_plan_one .new_class .new_class_top .new_class_top_span2{
    font-size: 0.7rem;
    color: #cecece;
    float: right;
    line-height: 1.45rem;
    margin-right: 0.5rem;
}
.new_class_context{
    width: 34.9;
    height: 13.2rem;
    float: left;
    padding-left: 2.1rem;
}
.new_plan_one .new_class .new_class_context .new_class_context_ring{
    width: 17.35rem;
    height: 4.35rem;
    float: left;
}
.new_class_context_ring_img{
    float: left;
    width: 1.45rem;
    height: 3.1rem;
}
.new_class_context_ring_img:hover{
  opacity:0.5;
}
.new_class_top_span2 a:hover{
  color:#577DB9;text-decoration:underline
  }
.new_class_context_ring_url{
    width: 11.9rem;
    height: 3.25rem;
    float: left;
    margin-left: 4rem;
}
.new_class_context_ring_url_top{
    width: 11.9rem;
    height: 1.15rem;
    float: left;
}
.new_class_context_ring_url_top ul{
    font-size: 0.6rem;
    color: #577bb5;
    margin-top: 0.2rem;
}
.new_class_context_ring_url_top ul li{
    width: 2.3rem;
    float: left;
}
.new_class_context_ring_url_bottom{
    width: 11.9rem;
    height: 2.1rem;
    float: left;
}
.new_class_context_ring_url_bottom ul{
    font-size: 0.6rem;
    color: #666;
    margin-top: 0.2rem
}
.new_class_context_ring_url_bottom ul li{
    width: 3.3rem;
    float: left;
    margin-top:0.1rem;
}
.new_class_context_ring_url_bottom_routerlink{
    color: #666;
    text-decoration: none;
}
.new_diamond{
    width: 12.7rem;
    height: 15.25rem;
    float: left;
    padding-left: 0.5rem;
}
.new_diamond_top{
    height: 4.85rem;
    width: 18.3rem;
    background: #e9e9e9;
    float: left;
}
.new_diamond_top_querw{
    width: 18.2rem;
    height: 2.5rem;
    float: left;
}
.new_diamond_top_querw span{
    float: left;
    margin-left: 1.5rem;
    margin-top: 0.6rem;
}
.new_diamond_top_text{    
    height: 2.35rem;
    font-size: 0.7rem;
    text-align: center;
    line-height: 2.35rem;
}
.new_diamond_bottom{
    width: 18.3rem;
    height: 10.4rem;
    float: left;
    /*border:0.05rem solid red;*/
}
.new_diamond_bottom ul{
    width: 18.3rem;
    float: left;
}
.new_diamond_bottom ul li{
    width: 7.95rem;
    float: left;
    text-align: center;
}
.new_diamond .new_diamond_bottom ul li p{
    line-height: 0.75rem;
    margin-top: 0rem;
    float: left;
    width: 100%;
}
.mendian{
    width: 59rem;
    margin: 0 auto;
    overflow: hidden;
    height: 15rem;
}
.mendian .mendian_shang{
    height: 2.5rem;
    width: 59rem;
    float: left;
    margin:0 auto;
}
.mendian_s_left{
    width: 15.75rem;
    height: 2rem;
    border-bottom: 0.2rem solid #577bb5;
    float: left;
    line-height: 2rem;
}
.mendian_s_left .menpai{
    float: left;
    font-size: 1.2rem;
    color: #577bb5;
    font-weight: bold;
}
.menpaiyinwen{
    float: left;
    font-size: 0.7rem;
    color: #b9b9b9;
    margin-left: 0.25rem;
}
.mendian_s_right{
    width: 43.2rem;
    height: 2rem;
    border-bottom: 0.2rem solid #d9d9d9;
    float: left;
    line-height: 2rem;
}
.more01{
    float: right;
    font-size: 0.6rem;
}
.more01 a{
    margin: 0 0.5rem;
}
.more01 a:hover{
  color:#577DB9;
  text-decoration:underline;
}
.mendian_xia{
    width: 59rem;
    float: left;
    height: 12.5rem;
    margin:0 auto;
}
.mendian_xia_img{
  width:100%;
  height:100%;
}
.Store_contain{
    margin: 0 auto;
    width: 59rem;
}
.Store_contain .Store_list{
    margin: 0.5rem 0 0 0;
    float: left;
    width: 59rem;
}
.Store_contain .Store_list .local{
    width: 59rem;
    height: 1.4rem;
    float: left;
    border: 0.05rem solid #fff;
}
.Store_contain .Store_list .local .here{
    width: 16rem;
    height: 1.4rem;
    background-color: #577bb5;
    float: left;
    margin: 0rem;
}
.Store_contain .Store_list .local .here .site_ico{
    width: 2.75rem;
    height: 1.5rem;
    margin-top: 0.1rem;
    margin-left: 0.5rem;
    float: left;
    background: url(http://127.0.0.1:3000/img/index_img/site_ico.png) left top no-repeat;
}
.Store_list .local .here p{
    float: left;
    margin:0rem;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.7rem;
    font-family: "΢���ź�";
    color: #fff;
}
.Store_list .local .here p span{
    color: #000;
    font-weight: bold;
}
.nearest{
    margin: 0rem;
    float: left;
    width: 43rem;
    height: 1.4rem;
    background-color: #e9eef8;
}
.Store_list .local .nearest div{
    margin: 0rem;
    text-align: right;
    float: left;
    width: 43rem;
    height: 1.4rem;
    line-height: 1.4rem;
    font-size: 0.7rem;
    font-family: "΢���ź�";
    color: #333333;
}
.Store_list .list-Item{
    width: 59rem;
    height: 5.35rem;
    float: left;
    margin-top: 0.5rem;
    background: url(http://127.0.0.1:3000/img/index_img/list-Item.jpg) top left no-repeat;
    background-size:59rem 5.35rem;
}
.list-Item ul{
    width: 59rem;
    height:3.15rem;
    margin: 0.7rem 1.25rem;
    float: left;
    padding: 0.7rem 1.25rem 0.3rem 1.25rem;
}
.list-Item ul li{
    list-style: none;
    float: left;
    height: 1rem;
    width: 11.2rem;
    margin: 0.25rem 0rem;
}
.list-Item ul li a{
    text-decoration: none;
    color: #000;
    font-size: 0.6rem;
}
.neirong{
    width: 59rem;
    margin: 0 auto;
    overflow: hidden;
    height: 100%;
}
.container_shang{
    height: 2.35rem;
    width: 59rem;
    float: left;
    margin-top: 1rem;
}
.container_shang .container_s_left{
    width: 15.5rem;
    height:2rem;
    border-bottom: 0.2rem solid #577bb5;
    float: left;
    line-height: 2rem;
}
.container_shang .container_s_left .dingqing{
    float: left;
    font-size: 1.2rem;
    color: #577bb5;
    font-weight: bold;
}
.container_shang .container_s_left .dingqingyinwen{
    float: left;
    font-size: 0.7rem;
    color: #b9b9b9;
    margin-left: 0.5rem;
}
.container_s_right{
    width: 43.5rem;
    height: 2rem;
    border-bottom:0.2rem solid #d9d9d9;
    float: left;
    line-height:2rem;
}
.container_s_right .more{
    float: right;
    font-size: 0.1rem;
}
.container_s_right .more a{
    margin: 0 0.5rem;
}
.more span a:hover{
  color:#577BB5;
  text-decoration:underline;
}
.container_zhong{
    height: 22.125rem;
    width: 59rem;
    float: left;
}
.container_xia ul li{
    border: 0.05rem solid #ccc;
    width: 14.65rem;
    height: 15rem;
    float: left;
    text-align: center;
}
.container_xia{
  width:59rem;
    float: left;
}
.lanse{
    font-size: 0.7rem;
    color: #5d7aa8;
    font-weight: bold;
}
.chanpin a:hover{
  color:#577BB5;
  text-decoration:underline;
}
.new_quanguo{
    width: 58.9rem;
    margin: 1rem auto;
    overflow: hidden;
    height: 10.7rem;
    border: 0.05rem solid #cacaca;
}
.new_quanguo_shang{
    height: 1.75rem;
    width: 58.9rem;
    float: left;
}
.new_quanguo_shang h1{
    font-size: 1.2rem;
    color: #577bb5;
    line-height: 1.75rem;
    margin-left: 0.5rem;
    text-align:left;
    font-weight:normal
}
.new_quanguo_xia{
    float: left;
    width: 58.9rem;
    height: 8.8rem;
}
.new_quanguo_xia span{
    float: left;
    margin-left:2.35rem;
}
.new_huodong{
    width: 59rem;
    margin: 1rem auto;
    overflow: hidden;
    height: 11.5rem;
    border: 0.05rem solid #cacaca;
    background: url(http://127.0.0.1:3000/img/index_img/new_huodong_img1.jpg) no-repeat;
    background-size:59rem 11.5rem;
}
.new_huodong .new_huodong_one{
    width:14.65rem;
    height: 9.7rem;
    float: left;
    margin-left: 0.1rem;
    overflow: hidden;
}
.new_huodong .new_huodong_one ul{
    width: 21.8rem;
    height: 7.9rem;
    padding-top: 1.8rem;
}
.neirong a:hover{
  color:#577DB9;
  text-decoration:underline;
}
.new_huodong a:hover{
  color:#577DB9;
  text-decoration:underline;
}
.new_huodong .new_huodong_one ul li{
    width: 13.25rem;
    height: 1.5rem;
    float: left;
    background: url(http://127.0.0.1:3000/img/index_img/new_huodong_one_ul_li.jpg) no-repeat left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}
.new_huodong .new_huodong_one ul li a{
    margin-left: 1.4rem;
    line-height: 1.5rem;
}
.new_index_center_nav{
    width: 59rem;
    height: 1.8rem;
    line-height: 1.8rem;
    border: solid 0.05rem #E1E1E1;
    padding: 0rem 0.1rem;
    margin-top: 0.5rem;
    overflow: hidden;
    margin:0 auto;
}
.new_index_center_nav a{
    float: left;
    width: 7.35rem;
    height: 1.8rem;
    text-align: center;
    text-decoration: none;
}
.new_index_center_nav a:hover{
    color:#577DB9;text-decoration:underline
}
</style>