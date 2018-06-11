import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './axios'

import 'lib-flexible';
/*引入公共样式*/
// import './assets/css/ccnu_index.css';
import './assets/css/font-awesome.css';
import './assets/css/iconfont.css';
import './assets/css/all.less';

Vue.config.productionTip = false;

Vue.prototype.$ajax=axios;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

