<template>
    <div class="myTodo">
        <header><router-link to="/set"><i class="fa fa-arrow-left"></i></router-link>办事中心</header>
        <div class="menu">
            <span>待办来源</span>
            <el-dropdown trigger="click" @command="handleCommand"><span class="el-dropdown-link">{{origin}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="item in todo" :command="item.name">{{item.name}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <ul>
            <li v-for="item in list"><a>
                {{item.name}}
            </a></li>
            <li v-if="list.length<=0"><a style="color: #898989">暂无待办信息</a></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "MyTodo",
    data(){
      return{
        todo:[],
        list:[],
        origin:'全部'
      }
    },
    created(){
      this.$ajax.post('/api/task_portal/get_apps')
          .then((res)=>{
            this.todo=res.data.apps;
            for (let i=0;i<this.todo.length;i++){
              this.list=this.list.concat(this.todo[i].todoList);
            }
          });
    },
    methods:{
      handleCommand(command) {
        this.origin=command;
      }
    }
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .myTodo{
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
            justify-content: space-between;
            height: 40/@base;
            padding: 0 10/@base;
            border-bottom: 1px solid #2d9ccc;
            span{
                font-size: 14/@base;
                color: #333;
            }
        }
        ul{
            li{
                height: 60/@base;
                font-size: 14/@base;
                padding: 10/@base;
                border-bottom: 1px dashed #efefef;
                overflow: hidden;
                a{
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
            }
        }
    }
</style>