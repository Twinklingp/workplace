import Vue from 'vue'
import App from './App.vue'
import './assets/style/normal.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/route'
import mock from "@/mock/mock";
import echarts from "echarts"
import $service from "./requests/index"
mock.init();
import axios from 'axios'
Vue.prototype.$ajax = axios;
Vue.prototype.$echarts = echarts

// import store from './store/store'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use($service)
Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
};


new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
