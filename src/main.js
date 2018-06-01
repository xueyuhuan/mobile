import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
/*引入公共样式*/
import './assets/css/bootstrap.css';
// import './assets/css/ccnu_index.css';
import './assets/css/font-awesome.css';
import './assets/css/iconfont.css';

Vue.config.productionTip = false;
Vue.prototype.$ajax=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

