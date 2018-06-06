import axios from 'axios';
import store from "./store";
import router from "./router";
axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = "Bearer "+store.state.token;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//添加请求拦截器
axios.interceptors.request.use(config => {
  //在发送请求之前做些什么
  // 判断是否存在token，如果存在将每个页面header都添加token
  if(store.state.token){
    config.headers.common['Authorization']= "Bearer "+store.state.token
  }
  return config;
}, error => {
  //对请求错误做些什么
  return Promise.reject(error);
});
//http response 拦截器
axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 403:
            this.$store.commit('del_token');
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
            })
        }
      }
      return Promise.reject(error.response.data)
    });
export default axios;

