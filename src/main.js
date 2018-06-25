import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from './axios';
import url from './url'

import 'lib-flexible';
import 'font-awesome/css/font-awesome.css'
/*引入公共样式*/
import './assets/css/font-awesome.css';
import './assets/css/iconfont.css';
import './assets/css/all.less';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$url=url;
Vue.prototype.$ajax=axios;
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");

