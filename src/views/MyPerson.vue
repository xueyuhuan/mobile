<template>
    <div class="myPerson">
        <header><router-link to="/set"><i class="fa fa-arrow-left"></i></router-link>个人中心</header>
        <h6>我的信息</h6>
        <ul>
            <li>编号：{{user.usernumber}}</li>
            <li>姓名：{{user.name}}</li>
            <li>性别：{{user.xb}}</li>
            <li>部门：{{user.deptName}}</li>
            <li>手机：{{user.mobile}}</li>
            <li>邮箱：{{user.email}}</li>
            <li>用户类别：{{user.usertypeName}}</li>
            <li><a href="http://selfservice.ccnu.edu.cn/account/userinfo.jsf">修改账户预留信息<br/><span>提示：此处修改手机号和邮箱</span></a></li>
            <li><a href="http://selfservice.ccnu.edu.cn/account/modifypass.jsf">修改密码<br/><span>提示：此处修改校园统一身份认证密码</span></a></li>
        </ul>

    </div>
</template>

<script>
  export default {
    name: "MyPerson",
    data(){
      return{
        user:{}
      }
    },
    created(){
      this.user=this.$store.state.user;
    },
    methods:{

    }
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .myPerson{
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
        h6{
            font-size: 14/@base;
            font-weight: normal;
            color: #1390d3;
            padding: 10/@base 20/@base;
            border-bottom: 1px dashed #BFBFBF;
            margin: 0;
        }
        ul{
            padding: 10/@base 20/@base;
            li{
                line-height: 20/@base;
                font-size: 12/@base;
                margin-bottom: 5/@base;
                a{
                    display: block;
                    font-size: 14/@base;
                    color: #428bca;
                    padding: 10/@base;
                    border: 1px dashed #bfbfbf;
                    span{
                        font-size: 12/@base;
                        color: #BFBFBF;
                    }
                }
            }
        }
    }
</style>