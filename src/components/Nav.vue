<template>
  <nav id="nav">
    <div class="nav">
      <img class="logo" src="../assets/images/logo.png"/>
      <div>
        <i @click="isShow=!isShow" class="iconfont icon-category btn menu"></i>
        <i class="iconfont icon-set btn set"></i>
      </div>
    </div>
    <ul v-show="isShow">
      <li><router-link to="/"><span class="active">工作台</span></router-link></li>
      <li><router-link to="service_center.html"><span>服务</span></router-link></li>
      <li><router-link to="news_center.html"><span>资讯</span></router-link></li>
      <li><router-link to="application_center.html"><span>应用</span></router-link></li>
      <li><router-link to="schedule.html"><span>日程</span></router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data: function () {
    return {
      isShow:false,
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @base: 75/2rem;
  /*导航条*/
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;left: 0;top: 0;
    z-index: 999;
    width: 100%;
    height: 70/@base;
    background-color: rgb(19,144,211);
    padding: 0 10/@base;
  }
  img.logo{
    height: 50/@base;
  }
  i.btn{
    color: rgb(255,255,255);
    font-size: 20/@base;
    font-weight: 900;
  }
  i.set{
    margin: 10/@base;
  }
  /*下拉菜单*/
  ul{
    position: fixed;left: 0;top:70/@base;
    z-index: 999;
    width:100%;
    background-color: rgb(19,144,211);
    padding: 0 0 10/@base 0;
    margin: 0;
  }
  ul li a{
    display: block;
    line-height: 40/@base;
    font-size: 18/@base;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
  ul li a span{
    display: inline-block;
    height: 100%;
    width: 100/@base;
  }
  ul li a span.active{
    border-bottom: 3px solid #f7b47f;
  }
</style>
