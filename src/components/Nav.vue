<template>
  <nav class="nav">
    <img src="../assets/images/logo.png"/>
    <ul class="nav_ul">
      <li >
        <i class=" iconfont icon-category nav_btn_menu" data-toggle="dropdown"  aria-expanded="true"></i>
        <ul class="dropdown-menu nav_dropdown-menu">
          <li><router-link to="/"><span class="nav_dropdown-menu_span_bottonBorder">工作台</span></router-link></li>
          <li><router-link to="service_center.html"><span>服务</span></router-link></li>
          <li><router-link to="news_center.html"><span>资讯</span></router-link></li>
          <li><router-link to="application_center.html"><span>应用</span></router-link></li>
          <li><router-link to="schedule.html"><span>日程</span></router-link></li>
        </ul>
      </li>
      <router-link to="settingsUI.html">
        <i class="nav_btn_set iconfont icon-set"></i>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  nav{
    width: 100%;
    height: 70px;
    background-color: rgb(19,144,211);
    position: fixed;left: 0;top: 0;
    z-index: 999;
  }

  .nav>img{
    width: 160px;
    height: 55px;
    position: absolute;
    left: 10px;
    top: 10px;
  }
  /*
   * 导航菜单的ul列表，包含2个图标
   */
  .nav_ul{
    width: 100%;
    height: 50px;
    position: absolute;
    right: 0px;
    top: 11px;
  }
  /*.nav_ul>li{
      width: 100%;
      position: relative;
  }*/

  /*
   * 图标1
   */
  .nav_btn_menu{
    position: absolute;
    right: 60px;
    top: 10px;
    background-color: rgba(0,0,0,0);
    color: rgb(255,255,255);
    font-size: 20px;
    font-weight: 900;
    border: none;
  }
  /*
   * 图标2
   */
  .nav_btn_set{
    position: absolute;
    right: 25px;
    top: 10px;
    background-color: rgba(0,0,0,0);
    color: rgb(255,255,255);
    font-size: 20px;
    font-weight: 900;
    border: none;
  }

  /*
   * 下拉菜单
   */

  /*
   * 下拉菜单共用部分
   */
  .nav_dropdown-menu{
    width:100%;
    position: absolute;
    top: 58px;
    border:none;
    border-radius: 0;
    background-color: rgb(19,144,211);
    padding: 0 0 10px 0;
  }

  .nav_dropdown-menu li{
    height: 40px;
    padding: 0px 0;
    position: relative;
  }
  .nav_dropdown-menu li a{
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: 40px;
    width: 100%;
    height: 100%;
    padding: 0px;

  }
  .nav_dropdown-menu li a>span{

    display: inline-block;
    width: 100px;
  }

  .nav_dropdown-menu-userdiv{
    width: 92px;
    height: 57px;
    margin: 0px auto;
  }

  .dropdown-menu-userdiv>img:last-child{
    width: 30px;
    height: 30px;
  }


  /*
   * icon图标
   */
  .nav_dropdown-menu li a i{
    font-size: 18px;
    font-weight: 700;
  }
  .nav_dropdown-menu_span_bottonBorder{
    border-bottom:3px solid #f7b47f;

  }
</style>
