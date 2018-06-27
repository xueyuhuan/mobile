<template>
    <div class="myCollect">
        <header><router-link to="/set"><i class="fa fa-arrow-left"></i></router-link>我的收藏</header>
        <div class="menu">
            <span @click="toggle('service')" :class="{active:type==='service'}">服务&nbsp;{{service.length}}</span>
            <span @click="toggle('app')" :class="{active:type==='app'}">应用&nbsp;{{app.length}}</span>
            <span @click="toggle('info')" :class="{active:type==='info'}">资讯&nbsp;{{info.length}}</span></div>
        <ul v-show="type==='service'" class="service">
            <li v-for="item in service"><a><img :src="item.img"/>{{item.name}}</a></li>
        </ul>
        <ul v-show="type==='app'" class="service app">
            <li v-for="item in app"><a :href="item.url"><img :src="'/api/resource/app?id='+item.id"/>{{item.name}}</a></li>
        </ul>
        <ul v-show="type==='info'" class="info">
            <li v-for="item in info"><a :href="item.url">
                <h5>{{item.title}}</h5>
                <p>{{item.publishDate}}&nbsp;{{item.origin}}</p></a></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "MyCollect",
    data(){
      return{
        service:[],
        app:[],
        info:[],
        type:"service"
      }
    },
    created(){
      this.$ajax.post(this.$url.componentCollectService)
              .then((res)=>{this.service=res.data.services;});
      this.$ajax.post(this.$url.componentCollectApp).then((res)=>{this.app=res.data.apps;});//应用
      this.$ajax.post(this.$url.componentCollectNews).then((res)=>{this.info=res.data.result;});//资讯
    },
    methods:{
      toggle(type){
        this.type=type;
      }
    }
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .myCollect{
        padding-top: 70/@base;
        header {
            height: 40/@base;
            line-height: 40/@base;
            background-color: rgb(6, 126, 190);
            font-size: 16/@base;
            font-weight: 600;
            color: white;
            padding: 0 20/@base;
            i{
                color: #fff;
                margin-right: 10/@base;
            }
        }
        .menu{
            display: flex;
            align-items: center;
            height: 40/@base;
            padding: 5/@base 0;
            border-bottom: 1px solid #2d9ccc;
            span{
                flex: 1;
                font-size: 14/@base;
                color: #333;
                text-align: center;
            }
            span:nth-child(2){
                border-left: 1px solid #bfbfbf;
                border-right: 1px solid #BFBFBF;
            }
            span.active{
                color: #ff9800;
            }
        }
        ul.service{
            a{
                display: flex;
                align-items: center;
                height: 50/@base;
                font-size: 14/@base;
                color: #333;
                padding: 0 20/@base;
                border-bottom: 1px solid #efefef;
                img{
                    width: 30/@base;
                    height: 30/@base;
                    margin-right: 10/@base;
                }
            }

        }
        ul.info{
            a{
                display: block;
                padding: 10/@base 20/@base;
                border-bottom: 1px solid #efefef;
                h5{
                    font-size: 14px;
                    font-weight: normal;
                    color: #333;
                    margin: 0 0 10/@base 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                p{
                    font-size: 12px;
                    color: #959595;
                    margin: 0;
                }
            }

        }
    }

</style>