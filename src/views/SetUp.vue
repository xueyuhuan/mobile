<template>
    <div class="setUp">
        <header>我的设置</header>
        <div class="info">
            <img :src="user.userFace"/><br/>
            <span>{{user.name}}&nbsp;{{user.deptName}}</span>
        </div>
        <ul>
            <li><router-link to="/my_collect"><span><i style="margin-right: 10px" class="fa fa-star-o"></i>我的收藏</span><i class="fa fa-angle-right"></i></router-link></li>
            <li><router-link to="/my_news"><span><i style="margin-right: 10px" class="fa fa-bell-o"></i>我的消息</span><i class="fa fa-angle-right"></i></router-link></li>
            <li><a><span><i style="margin-right: 10px" class="fa fa-desktop"></i>办事中心</span><i class="fa fa-angle-right"></i></a></li>
            <li><a><span><i style="margin-right: 10px" class="fa fa-user-o"></i>个人信息</span><i class="fa fa-angle-right"></i></a></li>
        </ul>
        <div class="btn">
            <button @click="logout">注销</button>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SetUp",
    data(){
      return{
        user:''
      }
    },
    created(){
      this.$ajax.post('/api/user_portal/index')
          .then((res)=>{
            this.user=res.data.user;
          })
    },
    methods:{
      logout(){
        this.$confirm('确定注销吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center:true
        })
        .then(() => {
          this.$store.commit('del_token');
          this.$router.push('/login');
        })
      }
    }
  }
</script>
<style>
    .el-message-box{
        width: 300px;
    }
</style>
<style scoped lang="less">
    @base:75/2rem;
    .setUp{
        padding-top: 70/@base;
        header{
            height: 40/@base;
            line-height: 40/@base;
            background-color: rgb(6,126,190);
            font-size: 16/@base;
            font-weight: 700;
            color: white;
            padding: 0 20/@base;
        }
        .info{
            text-align: center;
            padding: 15/@base 0 10/@base;
            border-bottom: 1px solid #efefef;
            img{
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
            span{
                font-size: 14/@base;
                color: #333;
            }
        }
        ul{
            li{
                a{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 50/@base;
                    font-size: 18/@base;
                    color: #428bca;
                    padding: 0 20/@base;
                    border-bottom: 1px solid #efefef;
                }
            }
        }
        .btn{
            text-align: center;
            margin-top: 100/@base;
            button{
                background: #1390d3;
                font-size: 16px;
                color: #fff;
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
            }
        }
    }

</style>