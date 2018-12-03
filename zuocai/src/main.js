import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './Vuex/store'
//import getters from './Vuex/getters'
import Headers from './components/Header.vue'
Vue.prototype.Headers = Headers
import Footers from './components/Footer.vue'
import PicZoom from 'vue-piczoom'
/*引入elementui组件*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//ES6引入模块
import axios from 'axios' 
//相当于const axios=require("axios")
Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.component('my-headers',Headers)
Vue.component('my-footers',Footers)
new Vue({
  router,
  mode: 'history',
  store,
  render: h => h(App)
}).$mount('#app')
