// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';//引入element
// import less from 'less'//引入less
import './assets/css/global.css'//导入全局样式表
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map';//引入百度地图
import VueResource from 'vue-resource';
// import axios from 'axios';//网络发送请求

// axios.defaults.withCredentials = true; //跨域保存session有用
Vue.use(ElementUI);//element
// Vue.use(less);//使用less
Vue.use(VueResource);//使用resource
// Vue.prototype.$http = axios;//使用axios网页请求
// axios.defaults.baseURL='http://localhost:3000';//请求地址的根路径
Vue.config.productionTip = false;

Vue.use(BaiduMap, {
  // ak: "bS8Al5qHrpeaowKiMhPCENBQ5LV8snjf"//服务端ak
  ak:"9TQVPAu4y0XkNdAOS3QM59wLwrjirGDV"//浏览器端ak
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
