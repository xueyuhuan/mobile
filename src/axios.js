import axios from 'axios';
import qs from 'querystring'
import {Message} from 'element-ui'
import store from "./store";
import router from "./router";
//创建实例 axios.create([config])
const instance=axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  baseURL:'http://192.168.0.19:8080',
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout:5000,
  // `withCredentials` 表示跨域请求时是否需要使用凭证，默认false
  withCredentials: true,
  // `headers` 是即将被发送的自定义请求头
  headers:{
    'Content-Type':'application/x-www-form-urlencoded;charset=utf-8'
  }
});
//请求拦截器
instance.interceptors.request.use(
    config => {
      //在发送请求之前做些什么
      if(config.method==="post"){
        // post传参序列化
        config.data = qs.stringify(config.data);
        // 注：若是提交能直接接受json 格式,即可以不用 qs 序列化
      }
      //鉴权token
      // 判断是否存在token，如果存在将每个页面header都添加token
       if(store.state.token){
        config.headers.common['Authorization']= "Bearer "+store.state.token
      }
      return config;
      },
    error => {
      //error回调
      Message({
        //  饿了么的消息弹窗组件
        showClose: true,
        message: error,
        type: "error.data.error.message"
      });
      return Promise.reject(error);
    });
//响应拦截器（返回状态判断）
instance.interceptors.response.use(
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
export default instance;

