import axios from 'axios';
import qs from 'querystring'
import { Loading,Message } from 'element-ui'
import store from "./store";
import router from "./router";
//创建实例 axios.create([config])
const instance=axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
  // baseURL:'http://onetest.ccnu.edu.cn',
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout:5000,
  // `headers` 是即将被发送的自定义请求头
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  }
});
var loadinginstace;
//请求拦截器
instance.interceptors.request.use(
    config => {
      config.headers.auth="auth";
      //在发送请求之前做些什么
        loadinginstace = Loading.service({ fullscreen: true })
      if(config.method==="post"){
        // post传参序列化
        config.data = qs.stringify(config.data);
        // 注：若是提交能直接接受json 格式,即可以不用 qs 序列化
      }
      //鉴权token
      // 判断是否存在token，如果存在将每个页面header都添加token
       if(store.state.token){
        console.log("设置auth token"+store.state.token);
        // config.headers.common['Authorization']= "Bearer "+store.state.token;
        config.headers.Authorization= "Bearer "+store.state.token;
        console.log(config.headers);
      }
      return config;
      },
    error => {
      //error回调
        loadinginstace.close()
        Message.error({
            message: '加载超时'
        })
      return Promise.reject(error);
    });
//响应拦截器（返回状态判断）
instance.interceptors.response.use(
    res => {
        loadinginstace.close();
      console.log(res);
        if(res.data.errcode == '0'){//正常
            return res;
        }else{
            if(res.data.errmsg){
                Message({
                    //  饿了么的消息弹窗组件
                    showClose: true,
                    message: res.data.errmsg,
                    type: "warning"
                });
            }
        }
    },
    err => {
      if (err.response) {
        switch (err.response.status) {
          case 403:
            // this.$store.commit('del_token');
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
            })
        }
      }
      return Promise.reject(err)
    });
export default instance;

