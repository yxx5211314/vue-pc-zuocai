import Vue from 'vue'
import Router from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Index from './views/Index.vue'
import Zocaifuwu from './views/Zocaifuwu.vue'
import User from './views/User.vue'
import Product from './views/Product.vue'
import Details from './views/Details.vue'
import Cart from './views/Cart.vue'
import Kongbai from './views/Kongbai.vue'
import NotFound from './views/NotFound.vue'
Vue.use(Router)

export default new Router({
  //mode: 'history',
 // base: process.env.BASE_URL,
  routes: [
        {path: '/',name: 'index',component:Index},
        {path: '/product/details/cart',name: 'cart',component:Cart},
        {path: '/product/details/:id',name: 'details',component: Details,props:true},
        {path: '/product',name: 'product',component: Product},
        {path: '/header',name: 'header',component: Header},
        {path: '/footer',name: 'footer',component: Footer},
        {path: '/login',name: 'login',component: Login},
        {path: '/login/user',name:'user',component:User},
        {path: '/register',name: 'register',component:Register},
        {path: '/kongbai',name: 'kongbai',component:Kongbai},
        {path: '/index',name: 'index',component:  Index},
        {path:'/zocaifuwu',name: 'zocaifuwu',component:Zocaifuwu},
        {path: '/footer',name: 'footer',component: Footer},
        {path: '/*',name: 'notFound',component: NotFound},
  ]
})
/*$(function(){ 
$(".rightmenu .center li").mouseenter(function () {
    var $t = $(this);
    $t.addClass("active");
    $t.find("span").animate({ right: '64px', opacity: 1 }, 500).show()
}).mouseleave(function () {
    var $t = $(this);
    $(this).removeClass("active");
    $t.find("span").animate({ right: '0px', opacity: 0 }, 500).hide()
});
$("#backToTopTxt").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 520);
});
///打开客服
function showZocaiKefu() {
    $("#zocaikefu").show();
    $("#zocaikefu_blocker").show();
    $("#zocaikefu_colse").click(function () {
        $("#zocaikefu").hide();
        $("#zocaikefu_blocker").hide();
    });
    $("#zocaikefu_blocker").click(function () {
        $("#zocaikefu").hide();
        $("#zocaikefu_blocker").hide();
    });
}
        var returnurl = "http://passport.zocai.com/member"
    })*/