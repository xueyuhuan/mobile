<template>
    <div class="serviceCenter">
        <input placeholder="搜索服务" type="search"/>
        <ul class="dropdown">
            <li v-for="(item,index) in dropdown" @click="toggle(index)">{{item}}<i class="fa fa-angle-down"></i></li>
        </ul>
        <ul class="menu" v-show="show.isField">
            <li v-for="item in field" @click="search('field',item)">{{item.name}}</li>
        </ul>
        <ul class="menu" v-show="show.isDepartment">
            <li v-for="item in department" @click="search('department',item)">{{item.name}}</li>
        </ul>
        <ul class="menu" v-show="show.isMode">
            <li v-for="item in mode" @click="search('mode',item)">{{item.name}}</li>
        </ul>
        <ul class="menu" v-show="show.isObject">
            <li v-for="item in object" @click="search('object',item)">{{item.groupName}}</li>
        </ul>
        <div class="conditions">检索条件：
            <span v-for="item in condition">{{item}}</span>
            <span><i class="fa fa-remove"></i>清空检索条件</span>
        </div>
        <ul class="list">
            <li>
                <img src="../assets/images/temp.png" alt="图片"/>
                <div class="info">
                    <header>工资查询</header>
                    <p>服务类别:信息查询<i class="fa fa-eye"></i>&nbsp;987<i class="fa fa-star"></i>&nbsp;543</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "ServiceCenter",
    data(){
      return{
        show:{
          isField:false,
          isDepartment:false,
          isMode:false,
          isObject:false
        },
        dropdown:['服务领域','负责部门','服务方式','服务对象'],
        field:[],//领域
        department:[],//部门
        mode:[{name:"线上服务",id:"1"}, {name:"线下服务",id:"0"},],//方式
        object:[],//对象
        condition:['','','',''],
        searchData:{
          page:1,
          limit:20,
          key:"",
          orderBy:"",
          type2:"",
          managerDeptId:"",
          lineAble:"",
          userGroupId:"",
          isJzdt:""
        },
        searchList:""
      }
    },
    created:function () {
      this.getList();
    },
    mounted:function(){
      this.$ajax.post('/api/service_portal/query_service_type_all')
          .then((res)=>{
            this.field=res.data.serviceTypeList;
          })
          .catch((error)=>{
            console.log(error);
          });
      this.$ajax.post('/api/service_portal/list_manage_dept')
          .then((res)=>{
            this.department=res.data.depts;
          })
          .catch((error)=>{
            console.log(error);
          });
      this.$ajax.post('/api/service_portal/list_user_group')
          .then((res)=>{
            this.object=res.data.groups;
          })
          .catch((error)=>{
            console.log(error);
          });
    },
    methods:{
      initShow(){
        this.show.isField=false;
        this.show.isDepartment=false;
        this.show.isMode=false;
        this.show.isObject=false;
      },
      toggle(n){
        switch (n){
          case 0:{
            this.show.isField=!this.show.isField;
            this.show.isDepartment=false;
            this.show.isMode=false;
            this.show.isObject=false;
          }break;
          case 1:{
            this.show.isDepartment=!this.show.isDepartment;
            this.show.isField=false;
            this.show.isMode=false;
            this.show.isObject=false;
          }break;
          case 2:{
            this.show.isMode=!this.show.isMode;
            this.show.isField=false;
            this.show.isDepartment=false;
            this.show.isObject=false;
          }break;
          case 3:{
            this.show.isObject=!this.show.isObject;
            this.show.isField=false;
            this.show.isDepartment=false;
            this.show.isMode=false;
          }break;
        }
        console.log(this.show)
      },
      search(type,item){
        this.initShow();
        if(type=="field"){
          this.condition[0]='服务领域：'+item.name;
          this.searchData.type2=item.id;
        }
        if(type=="department"){
          this.condition[1]='负责部门：'+item.name;
          this.searchData.managerDeptId=item.id;
        }
        if(type=="mode"){
          this.condition[2]='服务方式：'+item.name;
          this.searchData.lineAble=item.id;
        }
        if(type=="object"){
          this.condition[3]='服务对象：'+item.groupName;
          this.searchData.userGroupId=item.id;
        }
      },
      getList(){
        this.$ajax.post('/api/service_portal/list',this.searchData)
            .then((res)=>{
              console.log(res);
              this.searchList=res.page;
            })
            .catch((error)=>{
              console.log(error);
            });
      }
    }
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .serviceCenter{
        padding-top: 70/@base;
    }
    input[type='search']{
        width: 100%;
        height: 40/@base;
        font-size: 14/@base;
        text-align: center;
        outline: none;
        padding: 5/@base 20/@base;
        border: none;
        border-bottom: 1px solid #bfbfbf;
        margin-bottom: 5/@base;
    }
    ul.dropdown{
        display: flex;
        align-items: center;
        width: 100%;
        height: 40/@base;
        border-top: 1px solid rgb(45,156,204);
        border-bottom: 1px dashed rgb(232,232,232);
    }
    ul.dropdown li{
        flex: auto;
        font-size: 14/@base;
        text-align: center;
    }
    ul.dropdown i{
        padding-left: 2/@base;
    }
    ul.menu{
        position: absolute;
        top: 155/@base;
        z-index: 99;
        width: 100%;
        box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    }
    ul.menu li{
        height: 45/@base;
        line-height: 45/@base;
        font-size: 14/@base;
        border-bottom: 1px solid #BFBFBF;
        padding-left: 20/@base;
    }
    .conditions{
        font-size: 12/@base;
        color: #333;
        padding: 5/@base 10/@base;
    }
    .conditions span{
        color: #0683c3;
        margin-right: 5/@base;
    }
    .conditions span:last-child{
        color: #333;
    }
    ul.list{
        padding: 0 10/@base;
    }
    ul.list li{
        display: flex;
        margin: 5/@base 0;
        padding: 15/@base;
        border: 1px solid #bfbfbf;
    }
    ul.list li img{
        width: 50/@base;
        height: 50/@base;
        margin-right: 15/@base;
    }
    ul.list li .info{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    ul.list li .info header{
        font-size: 14/@base;
    }
    ul.list li .info p{
        font-size: 12/@base;
        color: #959595;
        margin: 0;
    }
</style>