<template>
<div id="header"> 
  <header class="header">
      <div class="header_nr">
        <div class="header_nr_auto">
          <div class="header_nr_auto_d1">
            <ul>
              <li v-text="yonghu" @click="yonghu_1" style="cursor:pointer"></li>
              <li class="nr_auto_d1_li2 nr_hover_li" @click="DL">
                  <router-link to="/login">
                    <span>|</span>
                    登陆
                    <span>|</span>
                  </router-link> 
              </li>
              <li class="nr_hover_li"  @click="DL">
                  <router-link to="/register" style="margin-left:0.4rem"> 
                      注册
                      <span>|</span>
                  </router-link> 
              </li>
              <li class="nr_hover_li">
                  <a href="#" style="margin-left:0.45rem">
                    收藏佐卡伊
                  </a> 
              </li>
            </ul>
          </div>
          <div class="header_nr_auto_d2">
            <ul>
              <li class="nr_hover_li H-1">
                <div class="nr_auto_d2_std d18">
                  <a href="#">实体店</a>
                  <span class="nr_auto_d2_std_span1"></span>
                  <span class="nr_auto_d2_std_span2">|</span>
                </div>
                <div   class="nr_auto_d2_std_none">
                    <a href="#" target="_blank" title="北京槐房万达店" id="nr_auto_d2_std_none_a1"
                    >北京北京槐房万达店</a>
                    <a href="#" target="_blank" title="上海淮海中路店">上海上海淮海中路店</a>
                    <a href="#" target="_blank" title="上海上海五角场万达店">上海上海五角场万达店</a>
                    <a href="#" target="_blank" title="广东广州天河城店">广东广州天河城店</a>
                    <a href="#" target="_blank" title="深圳东门太阳百货店">广东深圳东门太阳百货店</a>
                    <a href="#" target="_blank" title="杭州上城旗舰店" id="nr_auto_d2_std_none_a2">杭州上城旗舰店</a>
                    <a href="#" target="_blank" title="深圳益田假日广场店">广东深圳益田假日广场店</a>
                    <a href="#" target="_blank" title="杭州武林店">浙江杭州武林店</a>
                    <a href="#" target="_blank" title="东阳新光天地店">浙江东阳新光天地店</a>
                    <a href="#" target="_blank" title="浙江绍兴汇金广场">浙江绍兴汇金广场</a>
                    <a href="#" target="_blank" title="台州温岭锦江店">浙江台州温岭锦江店</a>
                    <a href="#" target="_blank" title="南通万达步行街店">江苏南通万达步行街店</a>
                    <a href="#" target="_blank" title="宿迁沭阳店">江苏宿迁沭阳店</a>
                    <a href="#" target="_blank" title="扬州邗江华懋店">江苏扬州邗江华懋店</a>
                    <a href="#" target="_blank" title="东阳新光天地店">浙江东阳新光天地店</a>
                    <a href="#" target="_blank" title="大连中山新玛特店">辽宁大连中山新玛特店</a>
                    <a href="#" target="_blank" title="河南新密金博大店">河南新密金博大店</a>
                    <a href="#" target="_blank" title="湖北光谷大洋百货店">湖北光谷大洋百货店</a>
                    <a href="#" target="_blank" title="福建福清一拂店">福建福清一拂店</a>
                    <a href="#" target="_blank" title="湖南郴州生源时代店">湖南郴州生源时代店</a>
                    <a href="#" target="_blank" title="湖北武汉银泰创意城旗舰店">湖北武汉银泰创意城旗舰店</a>
                    <a href="#" target="_blank" title="山东莱州百家福店">山东莱州百家福店</a>
                    <a href="#" target="_blank" title="辽宁锦州凌河千盛店">辽宁锦州凌河千盛店</a>
                    <a href="#" target="_blank" title="湖南郴州生源时代店">湖南郴州生源时代店</a>
                    <a href="#" target="_blank" title="山东山东荣成万隆店">山东山东荣成万隆店</a>
                    <a href="#" target="_blank" title="河南平顶山丹尼斯店">河南平顶山丹尼斯店</a>
                    <a href="#" target="_blank" title="福建福清万达店">福建福清万达店</a>
                    <a href="#" target="_blank" title="湖北武汉江汉步行街店">湖北武汉江汉步行街店</a>
                    <a href="#" target="_blank" title="河南许昌一峰广场店">河南许昌一峰广场店</a>
                    <a href="#" target="_blank" title="湖北宜都雅斯国际广场店">湖北宜都雅斯国际广场店</a>
                    <a href="#" target="_blank" title="辽宁鞍山景子街店">辽宁鞍山景子街店</a>
                    <a href="#" target="_blank" title="福建龙岩新罗万宝店">福建龙岩新罗万宝店</a>
                    <a href="#" target="_blank" title="山东青岛黄岛长江店">山东青岛黄岛长江店</a>
                    <a href="#" target="_blank" title="安徽阜阳颍州万达店">安徽阜阳颍州万达店</a>
                    <a href="#" target="_blank" title="陕西西安钟楼新世界百货店">陕西西安钟楼新世界百货店</a>
                    <a href="#" target="_blank" title="河南商丘新玛特店">河南商丘新玛特店</a>
                    <a href="#" target="_blank" title="山东青岛黄岛香江店">山东青岛黄岛香江店</a>
                    <a href="#" target="_blank" title="安徽蚌埠蚌山万达店">安徽蚌埠蚌山万达店</a>
                    <a href="#" target="_blank" title="山东临沂人民广场店">山东临沂人民广场店</a>
                    <a href="#" target="_blank" title="陕西西安民乐园万达">陕西西安民乐园万达</a>
                    <a href="#" target="_blank" title="河北保定满城玉川店">河北保定满城玉川店</a>
                    <a href="#" target="_blank" title="陕西西安雁塔小寨店">陕西西安雁塔小寨店</a>
                    <a href="#" target="_blank" title="吉林吉林昌邑汇龙店">吉林吉林昌邑汇龙店</a>
                    <a href="#" target="_blank" title="河南许昌鼓楼广场店">河南许昌鼓楼广场店</a>
                    <a href="#" target="_blank" title="江苏苏州金鹰国际店">江苏苏州金鹰国际店</a>
                    <a href="#" target="_blank" title="四川遂宁船山新都店">四川遂宁船山新都店</a>
                    <a href="#" target="_blank" title="天津天津塘沽中原店">天津天津塘沽中原店</a>
                    <a href="#" target="_blank" title="重庆重庆南坪万达店">重庆重庆南坪万达店</a>
                    <a href="#" target="_blank" title="山东聊城东昌店">山东聊城东昌店</a>
                    <a href="#" target="_blank" title="天津天津大悦城店">天津天津大悦城店</a>
                    <a href="#" target="_blank" title="吉林长春南关亚泰富苑店">吉林长春南关亚泰富苑店</a>
                    <a href="#" target="_blank" title="甘肃定西安定店">甘肃甘肃定西安定店</a>
                    <a href="#" target="_blank" title="山东枣庄中央广场店">山东枣庄中央广场店</a>
                    <a href="#" target="_blank" title="包头苏宁广场店">内蒙古包头苏宁广场店</a>
                    <a href="#" target="_blank" title="河南河南永城永兴店">河南河南永城永兴店</a>
                    <a href="#" target="_blank" title="广东广州白云万达店">广东广州白云万达店</a>
                    <a href="#" target="_blank" title="四川成都金牛凯德店">四川成都金牛凯德店</a>
                    <a href="#" target="_blank" title="四川成都蜀都万达店">四川成都蜀都万达店</a>
                    <a href="#" target="_blank" title="云南云南楚雄店">云南云南楚雄店</a>
                    <a href="#" target="_blank" title="安徽淮南上海新世界店">安徽淮南上海新世界店</a>
                    <a href="#" target="_blank" title="盐城盐都万达店">江苏盐城盐都万达店</a>
                    <a href="#" target="_blank" title="山东文登利群店">山东文登利群店</a>
                    <a href="#" target="_blank" title="安徽阜阳颍泉财富广场店">安徽阜阳颍泉财富广场店</a>
                    <a href="#" target="_blank" title="宁夏银川新华百货ccmall店">宁夏银川新华百货ccmall店</a>
  
                    <a href="#" target="_blank" title="安徽安徽淮北金鹰国际店">安徽安徽淮北金鹰国际店</a>
                    <a href="#" target="_blank" title="山东莱芜鲁中东大街店">山东莱芜鲁中东大街店</a>
                    <a href="#" target="_blank" title="内蒙古内蒙古赤峰店">内蒙古内蒙古赤峰店</a>
                    <a href="#" target="_blank" title="安徽合肥滨湖万达茂店">安徽合肥滨湖万达茂店</a>
                    <a href="#" target="_blank" title="山东东营振华商厦店">山东东营振华商厦店</a>
                    <a href="#" target="_blank" title="安徽六安万达店">安徽六安万达店</a>
                    <a href="#" target="_blank" title="吉林吉林四平铁西店">吉林吉林四平铁西店</a>
                    <a href="#" target="_blank" title="保定涿州惠友钻石广场店">保定涿州惠友钻石广场店</a>
                    <a href="#" target="_blank" title="唐百滦南购物广场店">河北唐百滦南购物广场店</a>
                    <a href="#" target="_blank" title="龙凤新天地购物广场店">内蒙古龙凤新天地购物广场店</a>
                    <a href="#" target="_blank" title="安徽亳州新华南路店">安徽亳州新华南路店</a>
                    <a href="#" target="_blank" title="江苏南京新百店">江苏南京新百店</a>
                    <a href="#" target="_blank" title="湖北武汉硚口凯德店">湖北武汉硚口凯德店</a>
                    <a href="#" target="_blank" title="山西山西大同万达店">山西山西大同万达店</a>
                    <a href="#" target="_blank" title="湖北湖北孝感店">湖北湖北孝感店</a>
                    <a href="#" target="_blank" title="江苏江苏溧阳上河城店">江苏江苏溧阳上河城店</a>
                    <a href="#" target="_blank" title="浙江宁波第二百货店">浙江宁波第二百货店</a>
                    <a href="#" target="_blank" title="甘肃甘肃嘉峪关店">甘肃甘肃嘉峪关店</a>
                    <a href="#" target="_blank" title="江苏扬州金鹰店">江苏扬州金鹰店</a>
                    <a href="#" target="_blank" title="云南昆明万达店">云南昆明万达店</a>
                    <a href="#" target="_blank" title="湖南永州祁阳店">湖南永州祁阳店</a>
                    <a href="#" target="_blank" title="内蒙古呼伦贝尔店">内蒙古呼伦贝尔店</a>
                    <a href="#" target="_blank" title="江苏邳州新苏广场店">江苏邳州新苏广场店</a>
                    <a href="#" target="_blank" title="浙江杭州大悦城店">浙江杭州大悦城店</a>
                    <a href="#" target="_blank" title="内蒙古赤峰五彩城购物中心店">内蒙古赤峰五彩城购物中心店</a>
                    <a href="#" target="_blank" title="河北唐山万达店">河北唐山万达店</a>
                    <a href="#" target="_blank" title="江苏南通如皋店">江苏南通如皋店</a>
                    <a href="#" target="_blank" title="河南商丘永城金博大店">河南商丘永城金博大店</a>
                    <a href="#" target="_blank" title="吉林吉林四平万达店">吉林吉林四平万达店</a>
                    <a href="#" target="_blank" title="上海上海中山公园龙之梦店">上海上海中山公园龙之梦店</a>
                    <a href="#" target="_blank" title="河北保定钟楼店">河北保定钟楼店</a>
                    <a href="#" target="_blank" title="安徽马鞍山金鹰店">安徽马鞍山金鹰店</a>
                    <a href="#" target="_blank" title="龙湖时代天街2店">重庆重庆龙湖时代天街2店</a>
                    <a href="#" target="_blank" title="赤峰巴林左旗店">内蒙古赤峰巴林左旗店</a>
                    <a href="#" target="_blank" title="河北唐山远洋城店">河北唐山远洋城店</a>
                    <a href="#" target="_blank" title="河北唐山勒泰店">河北唐山勒泰店</a>
                    <a href="#" target="_blank" title="河北张家口银座商城店">河北张家口银座商城店</a>
                    <a href="#" target="_blank" title="广东广州G5停机坪店">广东广州G5停机坪店</a>
                    <a href="#" target="_blank" title="内蒙包头九原万达店">内蒙古内蒙包头九原万达店</a>
                    <a href="#" target="_blank" title="广东深圳龙华ATMALL店">广东深圳龙华ATMALL店</a>
                    <a href="#" target="_blank" title="湖北宜昌国贸店">湖北宜昌国贸店</a>
                    <a href="#" target="_blank" title="内蒙古鄂尔多斯每天百货店">内蒙古鄂尔多斯每天百货店</a>
                    <a href="#" target="_blank" title="河北唐山遵化店">河北唐山遵化店</a>
                    <a href="#" target="_blank" title="北京万达广场西铁营店">北京北京万达广场西铁营店</a>
                    <a href="#" target="_blank" title="天津陆家嘴购物中心店">天津天津陆家嘴购物中心店</a>
                    <a href="#" target="_blank" title="高平红旗广场店">山西山西高平红旗广场店</a>
                </div>
              </li>
              <li class="nr_hover_li H-2">
                <div class="nr_auto_d2_std">
                  <a href="#" style="margin-left:0.3rem">会员中心</a>
                  <span class="nr_auto_d2_std_span1"></span>
                  <span class="nr_auto_d2_std_span2">|</span>
                </div>
                <div class="nr_auto_d2_std_none1">
                  <a href="" target="_blank">会员体系</a>
                  <a href="" target="_blank">会员故事</a>
                  <a href="" target="_blank">晒单活动</a>
                  <div class="clear"></div>
                </div>
              </li>
              <li class="nr_hover_li H-3">
                <div class="nr_auto_d2_std">
                  <a href="#" style="margin-left:0.3rem">信息中心</a>
                  <span class="nr_auto_d2_std_span1"></span>
                  <span class="nr_auto_d2_std_span2">|</span>
                </div>
                <div class="nr_auto_d2_std_none2">
                  <a href="" target="_blank">珠宝资讯</a>
                  <a href="" target="_blank">珠宝学院</a>
                  <a href="" target="_blank">珠宝百科</a>
                  <div class="clear"></div>
                </div>
              </li>
              <li class="nr_hover_li">
                <div class="nr_auto_d2_std">
                  <a href="#" style="margin-left:0.3rem">关注微博</a>
                  <span class="nr_auto_d2_std_span1"></span>
                  <span class="nr_auto_d2_std_span2">|</span>
                </div>
              </li>
              <li>
                <a href="#"><img src="http://127.0.0.1:3000/img/header_img/head_4.png" alt="" class="head_4_png"></a>
                <b>全国服务热线：400-602-0199</b>
              </li>
            </ul>
          </div>
        </div>
        <div class="header_main">
          <div class="header_main_container">
            <div class="logo_wrapper">
              <router-link title="佐卡伊珠宝网" to="/index">
                <img src="http://127.0.0.1:3000/img/header_img/head_logo.jpg" alt="佐卡伊珠宝网">
              </router-link>
            </div>
          </div>
          <div class="header_main_nav">
            <div class="header_main_nav_nr">
              <ul>
                <li ckass=" hover_1">
                  <div class="nav_drop">
                    <a href="#" target="_blank">珠宝商城</a>
                  </div>
                </li>
                <li class="hover_2">
                  <div class="nav_drop">
                    <a href="#" target="_blank">钻石定制</a>
                  </div>
                  <div class="zsdz_none" >
                      <div class="zsdz_none_top"></div>
                      <div class="zsdz_none_left">
                        <a href="#" target="_blank" title="30分以下" >
                          <span class="h12">
                            30分钻石
                          </span>
						              <span class="zsdz_none_left_sz">
                          </span>
                        </a>
                        <a href="#" target="_blank" title="50分钻石" >
                          <span class="hover">
                            50分钻石
                          </span>
						  <span class="zsdz_none_left_sz">
                           
                          </span>
                        </a>
                        <a href="#" target="_blank" title="70分钻石" >
                          <span class="hover">
                            70分钻石
                          </span>
						  <span class="zsdz_none_left_sz">
                           
                          </span>
                        </a>
                        <a href="#" target="_blank" title="1克拉钻石" >
                          <span class="hover">
                            1克拉钻石
                          </span>
						  <span class="zsdz_none_left_sz">
                           
                          </span>
                        </a>
                        <a href="#" target="_blank" title="2克拉钻石" >
                          <span class="hover">
                            2克拉钻石
                          </span>
						  <span class="zsdz_none_left_sz">
                           
                          </span>
                        </a>
                      </a>
                      <a href="#" target="_blank" title="5克拉钻石" style="margin-bottom:0.4rem;">
                        <span class="hover_1">
                          5克拉钻石
                        </span>
						<span class="zsdz_none_left_sz">
                           
                         </span>
                      </a>
                      </div>
                      <div class="zsdz_none_center">
                        <a href="#" target="_blank">
                          <img src="http://127.0.0.1:3000/img/header_img/zsdz_none_center.jpg" alt="">
                        </a>
                      </div>
                      <div class="zsdz_none_right">
                        <p class="zsdz_none_right_p1">
                          <b>精彩活动</b>
                        </p>
                        <p class="zsdz_none_right_p2">
                            ●
                          <a href="#" title="盛世典藏，一生臻爱，精品钻石专场">
                          盛世典藏，一生臻爱，精品钻...
                          </a>
                        </p>
                        <p class="zsdz_none_right_p2">
                            ●
                          <a href="#" title="盛世典藏，一生臻爱，精品钻石专场">
                            美不止一面，精品异形钻专场...
                          </a>
                        </p>

                        <p class="zsdz_none_right_p2">
                            ●
                          <a href="#" title="郝泽强专场">
                            郝泽强丐帮全国武打招亲专场...
                          </a>
                        </p>
                        <p class="zsdz_none_right_p2">
                            ●
                          <a href="#" title="郝泽强专场">
                            杨腾马马虎虎的是个大狗熊啊...
                          </a>
                        </p>
                        <p class="zsdz_none_right_p2">
                            ●
                          <a href="#" title="郝泽强专场">
                            徐子洋漂漂亮亮的一个死娘们...
                          </a>
                        </p>
                      </div>
                  </div>
                </li>
                <li class="hover_3">
                  <div class="nav_drop">
                    <a href="#" target="_blank">婚戒</a>
                  </div>
                  <div class="hj_none">
                    <div class="hj_none_left">
                      <a href="#" title="女戒" class="nj_hover">
                        <span class="nj">女戒</span>
                        <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                        </span>
                      </a>
                      <div class="hj_none_left_zj_Lei">
                          <a href="#" target="_blank" title="铂金女戒">铂金</a>
                          <a href="#" target="_blank" title="钻石女戒">钻石</a>
                          <a href="#" target="_blank" title="K金女戒">K金</a>
                          <a href="#" target="_blank" title="珍珠女戒">珍珠</a>
                          <a href="#" target="_blank" title="宝石女戒">宝石</a>
                      </div>
                      <a href="#" title="男戒" class="nj_hover">
                        <span class="nj">男戒</span>
                        <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                        </span>
                      </a>
                      <div class="hj_none_left_zj_Lei">
                        <a href="#" target="_blank" title="铂金女戒">铂金</a>
                        <a href="#" target="_blank" title="K金女戒">K金</a>
                      </div>
                      <a href="#" title="对戒" class="nj_hover">
                        <span class="nj">对戒</span>
                        <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                        </span>
                      </a>
                      <div class="hj_none_left_zj_Lei">
                        <a href="#" target="_blank" title="钻石女戒">钻石</a>
                        <a href="#" target="_blank" title="K金女戒">K金</a>
                        <a href="#" target="_blank" title="铂金女戒">铂金</a>
                      </div>
                    </div>
                    <div class="hj_none_center">
                      <a href="#" target="_blank">
                        <img src="http://127.0.0.1:3000/img/header_img/hj_none_center.jpg" alt="">
                      </a>
                    </div>
                    <div class="hj_none_right">
                      <p>
                        <b>精彩活动</b>
                      </p>
                      <p>
                          ●
                        <a href="#" title="爱之国度，精品女戒">爱之国度，精品女戒</a>
                      </p>
                      <p style="text-overflow:ellipsis;">
                          ●
                        <a href="#" title="【恋恋四季】系列">【恋恋四季】系列</a>
                      </p>
                    </div>
                    <div class="clear"></div>
                    <div class="hj_none_bottom">
                      <b>珠宝权威质检机构中心</b>
                      <br>
                      国内授权的珠宝玉石专业质检机构，出具钻石及贵金属检测报告，符合行业首饰标准，确保首饰质量，保障您的消费权益。
                    </div>
                  </div>
                </li>
                <li class="hover_4">
                  <div class="nav_drop">
                    <a href="#" target="_blank">彩宝</a>
                  </div>
                  <div class="cb_none" style="margin-top: 2rem;">
                    <div class="cb_none_left">
                      <a href="#" title="红宝石" class="cb_hover">
                        <span class="cb">红宝石</span>
                        <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                        </span>
                      </a>
                      <div class="cb_none_left_zj_Lei">
                          <a href="#" target="_blank" title="红宝石戒指">戒指</a>
                          <a href="#" target="_blank" title="红宝石吊坠">吊坠</a>
                          <a href="#" target="_blank" title="红宝石耳钉">耳钉</a>
                          <a href="#" target="_blank" title="红宝石手链">手链</a>
                      </div>
                      <a href="#" title="蓝宝石" class="cb_hover">
                        <span class="cb">蓝宝石</span>
                        <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                        </span>
                      </a>
                      <div class="cb_none_left_zj_Lei">
                        <a href="#" target="_blank" title="蓝宝石戒指">戒指</a>
                        <a href="#" target="_blank" title="蓝宝石吊坠">吊坠</a>
                        <a href="#" target="_blank" title="蓝宝石耳钉">耳钉</a>
                      </div>
                      <a href="#" title="碧玺" class="cb_hover">
                        <span class="cb">碧玺</span>
                        <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                        </span>
                      </a>
                      <div class="cb_none_left_zj_Lei">
                        <a href="#" target="_blank" title="碧玺戒指">戒指</a>
                        <a href="#" target="_blank" title="碧玺吊坠">吊坠</a>
                        <a href="#" target="_blank" title="碧玺手链">手链</a>
                        <a href="#" target="_blank" title="碧玺耳钉">耳钉</a>
                        <a href="#" target="_blank" title="碧玺耳环">耳环</a>
                        <a href="#" target="_blank" title="碧玺项链">项链</a>
                      </div>
                      <a href="#" title="其他宝石" class="cb_hover">
                          <span class="cb">其他宝石</span>
                          <span class="zsdz_none_left_sz" style="margin-left:0.15rem;">
                          </span>
                      </a>
                      <div class="cb_none_left_zj_Lei">
                        <a href="#" target="_blank" title="芙蓉石">芙蓉石</a>
                        <a href="#" target="_blank" title="托帕石">托帕石</a>
                        <br>
                        <a href="#" target="_blank" title="水晶">水晶</a>
                        <a href="#" target="_blank" title="葡萄石">葡萄石</a>
                      </div>
                    </div>
                    <div  class="cb_none_center">
                      <a href="#">
                      <img src="http://127.0.0.1:3000/img/header_img/cb_none_center.jpg" alt="">
                      </a>
                    </div>
                    <div class="cb_none_right">
                      <p>
                        <b>精彩活动</b>
                      </p>
                      <p>
                          ●
                        <a href="#" title="瑰丽世界，宝石传奇">瑰丽世界，宝石传奇</a>
                      </p>
                      <p style="text-overflow:ellipsis;">
                          ●
                        <a href="#" title="【玛雅*生命女神】碧玺精品系列">【玛雅*生命女神】碧玺精品系列</a>
                      </p>
                      <p style="text-overflow:ellipsis;">
                          ●
                        <a href="#" title="【维多利亚时代】之奢华">【维多利亚时代】之奢华</a>
                      </p>
                    </div>
                    <div class="clear"></div>
                    <div class="cb_none_bottom">
                      <b>色彩天成，贵乎稀有</b>
                      <br>
                      天国之石---宝石天生拥有的美丽颜色是它的特性。颜色是评价一颗宝石的重要依据，当决定一颗宝石的颜色时，要验其色彩、色调及颜色饱和度，佐卡伊提供原产斯里兰卡，缅甸等地高品质宝石饰品。
                    </div>
                  </div>
                </li>
                <li class=" hover_5">
                  <div class="nav_drop">
                    <a href="#" target="_blank" id="r1">全国实体门店</a>
                  </div>
                  <div class="qgst_none" style="margin-top:2rem">
                    <div class="qgst_none_left">
                      <img src="http://127.0.0.1:3000/img/header_img/qgst_none_left.jpg" alt="">
                    </div>
                    <div class="qgst_none_right">
                      <p>精彩活动</p>
                      <p>
                          ●
                        <a  target="_blank" href="#" title="新近实体门店开业活动">新近实体门店开业活动</a>
                      </p>
                    </div>
                    <div class="qgst_none_bottom" style="font-weight: bold;">
                        尊享服务，遍及全国。
                      </div>
                  </div>
                </li>
                <li>
                  <div class="nav_drop hover_6">
                    <a href="#" target="_blank" style="margin-left:0.25rem;">佐卡伊品牌</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="header_bottom">
            <div class="header_bottom_container">
              <div class="header_bottom_container_left">
                <form action="" method="get" id="header_bottom_form">
                  <input type="text" name="" class="input_text" placeholder="请输入关键字搜索">
                  <input type="submit" class="input_button" value="搜索">
                </form>
              </div>
              <div class="header_bottom_container_center">
                <span>热门：</span>
                <a href="" target="_blank">钻戒定制</a>
                <a href="" target="_blank">玫瑰金对戒</a>
                <a href="" target="_blank">足金吊坠</a>
                <a href="" target="_blank">克拉钻</a>
                <a href="" target="_blank">钻石女戒</a>
              </div>
              <div class="header_bottom_container_right">
                <p v-text="count">购物车中有0件商品</p>
                <router-link to="/product/details/cart">去结算</router-link>
              </div>
            </div>
          </div>
        </div>
        </div>
    </header>
    </div>
</template>

<script>
export default{
        data:function(){
            return { 
              isShow:false,
              index:0, 
              yonghu:"您好，欢迎光临佐卡伊珠宝网",  
              count:"",//用户商品购物车数量变量
             }
        },
        methods:{
          DL(){
            sessionStorage.setItem("userName","");
            location.reload();
          },
          yonghu_1(){
            var uid=sessionStorage.getItem("uid");
            if(!uid){
              alert("系统检测您未登录，为了购物愉快，请您先登录")
              this.$router.push("/login");
            }else{
              alert("正在跳转...");
              this.$router.push("/login/user");
            }
          }
    },
    created(){
      var yonghu=sessionStorage.getItem("userName");
      if(!yonghu){this.yonghu="您好，欢迎光临佐卡伊珠宝网"}else{ this.yonghu="欢迎大神："+yonghu+" 🙈";}
          /*1:获取sessionStorage里的用户ID并发送请求获取其购物车信息*/
        var uid=sessionStorage.getItem("uid");
        this.axios.get(
            "http://127.0.0.1:3000/cart/cart",{
                params:{
                    uid:uid
            }}
        ).then(res=>{
            //console.log(res.data[0]);
            console.log(res.data)
            /*将用户商品购物车数量添加到session*/
              if(res.data=="用户ID为空-err"){this.count="购物车共有0件商品"}else{ var count=res.data.length;  this.count="购物车共有:"+count+"件商品";}
        }) 
      
   
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
            display: none !important;
        }
header{
	width:100%;
	height:12.15rem;
}
li{
	list-style: none;
}
a{
	text-decoration:none;
}
a img {
    border: none;
}
.header_nr{
    width:100%;
	height:1.5rem;
	background:#EEF2FB;
	margin: 0 auto;
}
.H-3:hover .nr_auto_d2_std_none2{display:block}
.H-2:hover .nr_auto_d2_std_none1{display:block}
.H-1:hover .nr_auto_d2_std_none{display:block;}
.header_nr_auto{
	width:59rem;
    height: 100%;
	/* border:1px solid red; */
	margin: 0 auto;
    overflow: hidden;
}
.header_nr_auto_d1{
	float: left;
	overflow: hidden;
}
.header_nr_auto_d2{
	float: right;
	overflow: hidden;
}
.header_nr_auto_d1 ul li,.header_nr_auto_d1 ul li a{
	float: left;
    line-height: 1.5rem;
	color: #666;
	font-size:0.6rem;
    overflow: hidden;
}
.nr_auto_d1_li2{
	margin-left:0.25rem;
}
.header_nr_auto_d2 ul:first-child{
	float: left;
    overflow: hidden;
}
.nr_hover_li a:hover{
	color: #577bb3;
}
.header_nr_auto_d2 ul li,.header_nr_auto_d2 ul li a{
	float: left;
    line-height: 1.5rem;
	color: #666;
	font-size:0.6rem;
    overflow: hidden;
}
.nr_auto_d2_std_span1{
	display:inline-block;
    border-width:0.3rem 0.3rem 0;
	border-style:solid;
	margin-left:0.23rem;
	border-color:#333 transparent transparent;
	/*灰 透明 透明 */
}
.nr_auto_d2_std_none,.nr_auto_d2_std_none1{
	margin-top:0.05rem;
}
.nr_auto_d2_std_none,.nr_auto_d2_std_none1,.nr_auto_d2_std_none2{
	position: absolute !important;
    z-index: 99;
    -webkit-box-shadow: 0.25rem 0.25rem 0.15rem rgba(0,0,0,.15);
    -moz-box-shadow: 0.25rem 0.25rem 0.15rem rgba(0,0,0,.15);
    box-shadow: 0.25rem 0.25rem 0.15rem rgba(0,0,0,.15);
	border-bottom: 0.1rem solid #800;
	background: #eef3fa;
}
.nr_auto_d2_std{
	margin-left:0.02rem;
}
.nr_auto_d2_std_none a{
	display: block;
	/* margin-left:4.7rem; */
	text-decoration: none;
    float: left;
    width: 6rem;
    height: 1.3rem;
    overflow: hidden;
    text-overflow: ellipsis;
	white-space: nowrap;
	padding-top: 0.35em;
    margin-left: 1rem;
    margin-top: 0.46rem;
}
.nr_auto_d2_std_none,.nr_auto_d2_std_none1{display:none}
.nr_auto_d2_std_none1,.nr_auto_d2_std_none2{
	width:5%;
}
.nr_hover_li>div:last-child{
	margin-left:0.15rem;
}
.nr_auto_d2_std_none1 a,.nr_auto_d2_std_none2 a{
	padding-top: 0.35em;
    margin-left: 0.5rem;
}
.nr_auto_d2_std_none2{
	margin-top:0.1rem;
	display:none;
}
.head_4_png{
margin-top:0.17rem;
width:1.5rem;
height:1.2rem;
margin-left:0.3rem;
}
header .header_main{
	width: 100%;
    background: url("http://127.0.0.1:3000/img/header_img/head_main_bg.jpg") repeat-x;
	height: 10.75rem;
	 /* border:1px solid red; */
	 margin:0 auto;
}
.header_main .header_main_container{
	margin: 0 auto;
	width:100%;
    overflow: hidden;
 /* border:1px solid red; */
}
.logo_wrapper{
	float: left;
    width: 100%;
    /* height: 10.6rem; */
	overflow: hidden;
	margin:0 auto;
	 /* border:1px solid red; */
}
a img {
	border: none;}
.logo_wrapper a{
	display:block;
	width:50%;
	height:6.75rem;
	margin:0 auto;
}
.logo_wrapper a img{
	margin:0 auto;
	/* border:0.05rem solid red; */
	width:100%;
	height:6.75rem;
}
.header_main_nav{
	width: 100%;
    float: left;
    height: 2rem;
    border-bottom: 0.05rem solid #e3eaf5;
	background: #f5f9ff;
	/* border:0.05rem solid red; */
}
.header_main_nav_nr{    
width: 59rem;
margin: 0 auto;
overflow: hidden;
height: 100%;
background: #f5f9ff;
/* border:0.05rem solid red; */
}
.header_main_nav_nr ul li{
	float: left;
	height: 2rem;
	margin-left: 0.8rem;
    width: 9rem;
    overflow: hidden;
}
.header_main_nav_nr ul{
	float:left;
}
.nav_drop{
	float: left;
    height: 2rem;
    overflow: hidden;
   background: url(http://127.0.0.1:3000/img/header_img/head_nav_drop.jpg) no-repeat right center;
}
.nav_drop a{
width:9rem;
height: 1.5rem;
line-height:2rem;
text-align: center;
font-family: 黑体;
font-size: 0.8rem;
display:inline-block;
color: #666;
text-decoration: none;
overflow: hidden;
}
.header_main_nav_nr .zsdz_none,.hj_none,.cb_none,.qgst_none{
	width: 24.5rem;
    background: #fff url(http://127.0.0.1:3000/img/header_img/zsdz_none_01.jpg) no-repeat;
	letter-spacing: 0;
	display:none;
	padding-top: 0.5rem;
    position: absolute !important;
	z-index: 99;
	margin-top: 2rem;
    box-shadow: 0.25rem 0.25rem 0.15rem rgba(0,0,0,.15);
    border-bottom: 0.1rem solid #800;
}
.zsdz_none_left,.hj_none_left,.cb_none_left,.qgst_none_left{
	float: left;
    width: 5.75rem;
    line-height: 1.2rem;
    padding: 0.3rem;
}
.zsdz_none_left a,.hj_none_left a{
display: block;
width: 100%;
/* background:red; */
border-radius:0.2rem;
margin:0 auto;
height: 1.2rem;
margin-top:0.1rem;
text-decoration: none;
padding-left: 0.3rem;
}
.zsdz_none_left a span,.hj_none_left a span,.cb_none_left a span{
float: left;
color:#333;
font-size:0.6rem;
}
.zsdz_none_center{
	float:left;
/*	margin-left:1rem;*/
}
.zsdz_none_center img{
	display:block;
/*	margin-left: 0.5rem;*/
    margin-top: 1.05rem;
}
.zsdz_none_right{
	float: left;
	margin: 0;
	font-family: "雅黑";
	line-height:1.2rem;
	padding: 0 0.5rem;
	font-size:0.75rem;
	overflow:hidden;
}
.zsdz_none_right .zsdz_none_right_p1{
	float: left;
    width: 9rem;
	overflow: hidden;
	color:#666;
	margin-top:0.8rem;
	text-overflow: ellipsis;
}
.zsdz_none_right .zsdz_none_right_p2 a{
	font-size:0.6rem;
	color:#333;
}
.zsdz_none_left a:hover{
	background:red;
}
.hj_none_left .nj_hover:hover{
	background:red;
}
.cb_none_left .cb_hover:hover{
	background:red;
}
.zsdz_none_left a span:hover{
	color:#fff;
}
.nj_hover:hover span{
	color:#fff;
}
.cb_hover:hover span{
	color:#fff;
}
.zsdz_none_left a:hover .zsdz_none_left_sz{
	border-color:  transparent transparent transparent #fff;
}
.hj_none_left a:hover .zsdz_none_left_sz{
	border-color:  transparent transparent transparent #fff;
}
.cb_none_left a:hover .zsdz_none_left_sz{
	border-color:  transparent transparent transparent #fff;
}
.zsdz_none_right_p2 a:hover{
	color:#577BB5;

	border-bottom:0.1rem solid #577BB5;
}

.hover_2:hover .zsdz_none{
	display:block;
}
.hover_3:hover .hj_none{
	display:block;
}
.hover_5:hover .qgst_none{
	display:block;
}
.hover_4:hover .cb_none{
	display:block;
}
.zsdz_none_left{
	float: left;
    width: 5.75rem;
	padding: 0.3rem;
	/* border:1px solid red; */
}
.zsdz_none_left_sz{
border-width: 0.3rem;
margin-top:0.32rem;
margin-left:0.1rem;
border-style: solid;
border-color:  transparent transparent transparent red;
}
.hj_none_left_zj_Lei a,.cb_none_left_zj_Lei a{
    float: left;
    color: #777;
    padding: 0;
    margin-left: 0.2rem;
    width: 25%;
    height: auto;
    line-height: 0.9rem;
    background: none;
}
.nj_hover,.cb_hover{
	display:block;
	width: 30%;
    height: 1.2rem;
    text-decoration: none;
    padding-left: 0.3rem;
}
.cb_hover{
	width:65%;
	border-radius:7%;
}
.hj_none_left_zj_Lei,.cb_none_left_zj_Lei{
	padding: 0 0 0.2rem 0.1rem;
	clear: both;
	overflow: hidden;
	height: 100%;
}
.hj_none_left_zj_Lei a:hover{
	color:#577bb5;
	text-decoration:underline;
}
.cb_none_left_zj_Lei a:hover{
	color:#577bb5;
	text-decoration:underline;
}
.hj_none_center,.cb_none_center{
	float:left;
}
.hj_none_right,.cb_none_right,.qgst_none_right{
	float: left;
	width: 30%;
	font-family: å®‹ä½“;
	line-height: 1.2rem;
	margin: 0rem;
	padding: 0rem 0.5rem;
}
.hj_none_right p,.cb_none_right p,.qgst_none_right p{
	float: left;
	width: 100%;
	height: 1.2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	color: #666666;
}
.hj_none_right p a,.cb_none_right p a,.qgst_none_right p a{
	color: #666666;
}
.clear{
	clear: both;
    height: 0;
	overflow: hidden;
}
.hj_none_right a:hover{
	color: #577bb5;
	text-decoration: underline;
}
.cb_none_right a:hover{
	color: #577bb5;
	text-decoration: underline;
}
.qgst_none_right a:hover{
	color: #577bb5;
	text-decoration: underline;
}
.hj_none_bottom,.cb_none_bottom,.qgst_none_bottom{
	/* width:100%; */
	background:#fff;
	clear: both;
    padding: 0.35rem 0.75rem;
    color: #555;
    line-height: 0.95rem;
}
.cb_none_left{
	width:32%
}
.qgst_none_left{
	width:45%;
}
.qgst_none{
	/* display:block; */
	width:25%;
}
.qgst_none_left img{
	display:block;
	width:100%;
}
.header_bottom{   
	width: 100%;
	float: left;
	height: 1.9rem;;
	border-bottom: 0.05rem solid #cfd9e9;
	background: #eef3fa;
}
.header_bottom .header_bottom_container{
	width: 59rem;
    margin: 0 auto;
    /* overflow: hidden; */
	height: 100%;
    background: #eef3fa;
}
.header_bottom_container_left{
	float: left;
	height: 100%;
	margin: 0.35rem 0;
	/* overflow: hidden; */
}
#header_bottom_form{
	float: left;
	width: 100%;
	height: 1.3rem;
	/* overflow: hidden; */
}
#header_bottom_form .input_text{
float: left;
width: 74%;
height: 1.1rem;
background: #FFF;
color: #CCC;
padding-left: 0.25rem;
border: 0.05rem solid;
}
#header_bottom_form  .input_button{
	float: left;
    width: 2.6rem;
    height: 100%;
    background: #9db8e3;
    border: none;
    color: #FFF;
    cursor: pointer;
    margin: 0;
	padding: 0;
}
.header_bottom_container_center{   
	float: left;
    height: 1.25rem;
    padding-top: 0.75rem;
	/* overflow: hidden; */
}
.header_bottom_container_center span{
	float: left;
	height: 100%;
	padding: 0 0.25rem 0 1.45rem;
	/* overflow: hidden; */
	margin-top:0.05rem;
    color: #666;
}
.header_bottom_container_center a{
	float: left;
    height: 100%;
    padding-right: 0.4rem;
    text-decoration: none;
	/* overflow: hidden; */
	color:#333;
}
.header_bottom_container_center a:hover{
	color: #577bb5;
}
.header_bottom_container_right{
	float: right;
	height: 1rem;
	padding-top: 0.35rem;
	margin: 0.3rem 0 0.35rem 0;
	background: url("http://127.0.0.1:3000/img/header_img/header_bottom_container_right.jpg") no-repeat;
	/* overflow: hidden; */
}
.header_bottom_container_right p{
	float: left;
	width: 5.95rem;
	height: 1.35rem;
	padding-left: 1.7rem;
	/* overflow: hidden; */
}
.header_bottom_container_right p span{
	color: #577bb5;
	padding: 0 0.2rem;
}
.header_bottom_container_right a{
	float: left;
    width: 2.5rem;
    height: 1.35rem;
    text-align: center;
    text-decoration: none;
    color: #577bb5;
	/* overflow: hidden; */
}
.header_main_nav_nr ul li:hover{
	background:#a6d2f7;
}
.zsdz_none_right{

}
</style>
