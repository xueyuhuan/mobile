let api='/api';
export default {
  login:api+'/security_portal/login',//登录
  viewHome:api+'/page_portal/get_user_layout',//工作台布局
  componentHomeApp:api+'/app_portal/list_for_widget',//组件-工作台-我的应用
  componentHomeFile:api+'/gongwen_portal/gongwenList',//组件-工作台-学校公文
}