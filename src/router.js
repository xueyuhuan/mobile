import Vue from "vue";
import Router from "vue-router";
import store from "./store";

import WorkDesk from "./views/WorkDesk.vue";
import Login from "./views/Login.vue";
import Home from "./views/Home.vue";
Vue.use(Router);

const router=new Router({
  routes: [
    {
      path: "/",
      name: "WorkDesk",
      meta:{
        requireAuth:true,// 添加该字段，表示进入这个路由是需要登录的
      },
      component: WorkDesk
    },
    {
      path:"/login",
      name:"login",
      component: Login
    },
    {
      path:"/home",
      name:"home",
      component: Home
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

