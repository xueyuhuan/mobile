import Vue from "vue";
import axios from 'axios';
import qs from 'querystring'
import router from "./router";
//创建实例 axios.create([config])
const instance=axios.create({
  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  timeout:5000,
  // `headers` 是即将被发送的自定义请求头
  headers:{
    'Content-Type':'application/x-www-form-urlencoded'
  }
});
let loading;
//请求拦截器
instance.interceptors.request.use(
    config => {
      //在发送请求之前做些什么
      loading=Vue.prototype.$loading({text:"拼命加载中"});
      if(config.method==="post"){
        // post传参序列化
        config.data = qs.stringify(config.data);
        // 注：若是提交能直接接受json 格式,即可以不用 qs 序列化
      }
      // 判断是否存在token，如果存在将每个页面header都添加token
       if(sessionStorage.token){
        config.headers.Authorization= "Bearer "+sessionStorage.token;
      }
      return config;
      },
    error => {
      //对错误请求做些什么
        Vue.prototype.$message.error("加载超时");
      return Promise.reject(error);
    });
//响应拦截器（返回状态判断）
instance.interceptors.response.use(
    res => {
      loading.close();
        if(res.data.errcode === '0'){//正常
            return res;
        }
        else{
            if(res.data.errmsg){
              Vue.prototype.$message({
                type:'info',
                message:res.data.errmsg
              });
            }
        }
    },
    err => {
      loading.close();
      if (err.response) {
        Vue.prototype.$message({
          type:'info',
          message:err.response.status
        });
        switch (err.response.status) {
          case 403:
            router.replace({
              path: '/login',
              query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
            })
        }
      }
      return Promise.reject(err)
    });
export default instance;

