import Vue from "vue";
import Router from "vue-router";

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
        requireAuth:true,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/ServiceCenter'], resolve)
    },
    {
      path: "/app",
      name: "AppCenter",//应用
      meta:{
        requireAuth:true,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/AppCenter'], resolve)
    },
    {
      path: "/schedule",
      name: "ScheduleCenter",//日程
      meta:{
        requireAuth:true,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: resolve => require(['./views/ScheduleCenter'], resolve)
    },
    {
      path: "/set",
      name: "SetUp",
      meta:{
        requireAuth:true,
      },
      component: resolve => require(['./views/SetUp'], resolve)
    },
    {
      path: "/my_collect",
      name: "我的收藏",
      meta:{
        requireAuth:true,
      },
      component: resolve => require(['./views/MyCollect'], resolve)
    },
    {
      path: "/my_news",
      name: "我的消息",
      meta:{
        requireAuth:true,
      },
      component: resolve => require(['./views/MyNews'], resolve)
    },
    {
      path: "/my_todo",
      name: "办事中心",
      meta:{
        requireAuth:true,
      },
      component: resolve => require(['./views/MyTodo'], resolve)
    },
    {
      path: "/my_person",
      name: "个人信息",
      meta:{
        requireAuth:true,
      },
      component: resolve => require(['./views/MyPerson'], resolve)
    },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    //{
    //  path: '**',   // 错误路由
    //  redirect: '/'   //重定向
    //},
  ]
});
// 全局路由守卫
router.beforeEach((to,from,next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  if(to.meta.requireAuth){
    if(sessionStorage.token){
      console.log(to);
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

