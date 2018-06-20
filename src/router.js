import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import WorkDesk from "./views/WorkDesk.vue";
import ServiceCenter from "./views/ServiceCenter";
import AppCenter from "./views/AppCenter";
import ScheduleCenter from "./views/ScheduleCenter"
import Login from "./views/Login.vue";
Vue.use(Router);

const router=new Router({
  routes: [
    {
      path: "/",
      name: "WorkDesk",//工作台
      meta:{
        requireAuth:true,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/WorkDesk.vue'], resolve)
    },
    {
      path: "/service",
      name: "ServiceCenter",//服务
      meta:{
        requireAuth:false,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/ServiceCenter'], resolve)
    },
    {
      path: "/app",
      name: "AppCenter",//应用
      meta:{
        requireAuth:false,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/AppCenter'], resolve)
    },
    {
      path: "/schedule",
      name: "ScheduleCenter",//日程
      meta:{
        requireAuth:false,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/ScheduleCenter'], resolve)
    },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    {
      path: '**',   // 错误路由
      redirect: '/'   //重定向
    },
  ]
});
// 全局路由守卫
router.beforeEach((to,from,next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  if(to.meta.requireAuth){
    if(store.state.token){
      console.log("路由守卫中token:"+store.state.token);
      next();
    }
    else {
      next({
        path:'/login',
        query:{redirect:to.fullPath}
      })
    }
  }
  else {next();}
});

export default router;

