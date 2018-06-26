let api='/api';
export default {
  login:api+'/security_portal/login',//登录
  viewHome:api+'/page_portal/get_user_layout',//工作台布局
  componentHomeApp:api+'/app_portal/list_for_widget',//组件-工作台-我的应用
  componentHomeFile:api+'/gongwen_portal/gongwenList',//组件-工作台-学校公文
  componentHomeService:api+'/service_portal/list_for_widget',//组件-工作台-服务
  componentHomeSchedule:api+'/calendar_portal/get_events_widget',//组件-工作台-日程
  componentHomeNotice:api+'/notice_portal/noticeList',//组件-工作台-校内通知
  componentHomeTodo:api+'/task_portal/query_todo_all',//组件-工作台-代办
  componentHomeUser:api+'/user_portal/user_center_modules',//组件-工作台-个人中心
  componentHomePay:api+'/user_portal/salary'//组件-工作台-工资
}