<template>
    <div class="myNews">
        <header><router-link to="/set"><i class="fa fa-arrow-left"></i></router-link>我的消息</header>
        <div class="menu">
            <span @click="toggle('unread')" :class="{active:type==='unread'}">未读消息</span>
            <span @click="toggle('all')" :class="{active:type==='all'}">全部消息</span>
        </div>
        <ul>
            <li v-for="item in list"><a>
                <img :src="item.fromImg"/>
                <div class="info">
                    <p>{{item.fromName}}<time>{{timetrans(item.createTime)}}</time></p>
                    <span>{{item.content}}</span>
                </div>
            </a></li>
            <li v-if="list.length<=0"><a>暂无消息</a></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "MyNews",
    data(){
      return{
        unread:[],
        all:[],
        list:[],
        type:"unread"
      }
    },
    created(){
      this.$ajax.post('/api/msg_portal/query_unread')
          .then((res)=>{
            this.unread=res.data.unreadMessages;
            this.list=this.unread;
          });//未读
      this.$ajax.post('/api/msg_portal/query',{page:1,limit:10}).then((res)=>{this.all=res.data.page.rows;});//应用
    },
    methods:{
      toggle(type){
        this.type=type;
        if(type==="unread"){this.list=this.unread}
        else this.list=this.all;
      },
      timetrans(time){
        let date = new Date(time);//如果date为13位不需要乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
      }
    }
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .myNews{
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
            }
            span.active{
                color: #ff9800;
            }
        }
        ul{
            li{
                height: 60/@base;
                font-size: 14/@base;
                padding: 10/@base;
                border-bottom: 1px solid #efefef;
                overflow: hidden;
            }
            a{
                display: flex;
                align-items: center;
                height: 100%;
                img{
                    width: 40/@base;
                    height: 40/@base;
                    margin-right: 20/@base;
                }
                .info{
                    flex: 1;
                    overflow: hidden;
                    font-size: 12/@base;
                    color: #333;
                    p{
                        display: flex;
                        justify-content: space-between;
                        margin: 0 0 10/@base 0;
                    }
                    span{
                        display: inline-block;
                        width: 100%;
                        color: #bfbfbf;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }

        }
    }
</style>