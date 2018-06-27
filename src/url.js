let api=process.env.VUE_APP_PROXY;
// let api='/api';
export default {
  login:api+'security_portal/login',//登录
  viewHome:api+'page_portal/get_user_layout',//工作台布局
  componentHomeApp:api+'app_portal/list_for_widget',//组件-工作台-我的应用
  componentHomeFile:api+'gongwen_portal/gongwenList',//组件-工作台-学校公文
  componentHomeService:api+'service_portal/list_for_widget',//组件-工作台-服务
  componentHomeSchedule:api+'calendar_portal/get_events_widget',//组件-工作台-日程
  componentHomeNotice:api+'notice_portal/noticeList',//组件-工作台-校内通知
  componentHomeTodo:api+'task_portal/query_todo_all',//组件-工作台-代办
  componentHomeUser:api+'user_portal/user_center_modules',//组件-工作台-个人中心
  componentHomePay:api+'user_portal/salary',//组件-工作台-工资
  componentServiceRank:api+'service_portal/stat_usertype',//组件-工作台-服务排行
  /**
   * 导航
   */
  /*日程*/
  componentCalendar:api+'calendar_portal/getCalendar',
  componentCalendarEvents:api+'calendar_portal/get_events_date',
  /*服务*/
  componentServiceCenter_fwly:api+'service_portal/query_service_type_all',//服务领域
  componentServiceCenter_fzbm:api+'service_portal/list_manage_dept',//负责部门
  componentServiceCenter_fwdx:api+'service_portal/list_user_group',//服务对象
  componentServiceCenter_list:api+'service_portal/list',//拉取列表
  /*应用*/
  componentAppCenter:api+'app_portal/list_app_group',
  /***
   * 设置
   */
  componentGetUser:api+'user_portal/index',//获取用户
  /*我的收藏*/
  componentCollectService:api+'service_portal/get_user_favorites',//组件-设置-收藏-服务
  componentCollectApp:api+'app_portal/get_user_favorites',//组件-设置-收藏-应用
  componentCollectNews:api+'news_portal/getMyNews',//组件-设置-收藏-资讯
  /*我的消息*/
  componentMsgRead:api+'msg_portal/query',//已读
  componentMsgUnread:api+'msg_portal/query_unread',//未读
  /*办事中心*/
  componentMytodo:api+'task_portal/get_apps',
}