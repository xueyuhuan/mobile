<template>
  <div id="app" v-cloak>
    <!--<Nav></Nav>-->
      <nav id="nav" class="nav_contain">
          <div class="nav">
              <img class="logo" src="./assets/images/logo.png"/>
              <div>
                  <i @click="isShow=!isShow" class="fa fa-list-ul btn menu" style="font-weight: normal"></i>
                  <router-link to="/set"><i class="fa fa-cog btn set" style="font-weight: normal"></i></router-link>
              </div>
          </div>
          <ul v-show="isShow">
              <li v-for="(item) in array" @click="toggle(item.url)"><router-link :to="item.url"><span :class="{active:item.url===active}">{{item.name}}</span></router-link></li>
          </ul>
      </nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import WorkDesk from "@/views/WorkDesk.vue";
//import Nav from "./components/Nav";

export default {
    name: "home",
    components: {
//      Nav,
    },
    data(){
        return{
            array:[
                {name:'工作台',url:'/'},
                {name:'服务',url:'/service'},
                // {name:'资讯',url:'/'},
                {name:'应用',url:'/app'},
                {name:'日程',url:'/schedule'},
            ],
            active:"",
            isShow:false
        }
    },
    mounted(){
        this.active=this.$route.fullPath;
    },
    methods:{
        toggle(url){
            this.active=url;
            this.isShow=false;
        }
    }
};
</script>

<style lang="less">
  @base: 75/2rem;
  [v-cloak] {
    display: none;
  }
  /*导航条*/
  .nav_contain{
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
      .router-link-exact-active>span{
          border-bottom: 3px solid #f7b47f;
      }
  }
  .nodata{
      padding: 5 / @base 20/ @base;
      border-bottom: 1px dashed #bfbfbf;
      font-size: 12 / @base;
      color: #959595;
      font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
      margin: 0;
  }
</style>
