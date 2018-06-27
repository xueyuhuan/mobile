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
        <div class="conditions" v-show="isCondition">检索条件：
            <span v-for="item in condition">{{item}}</span>
            <span @click="clearCondition"><i class="fa fa-remove"></i>清空检索条件</span>
        </div>
        <ul class="list">
            <li v-for="item in searchList"><a>
                <img :src="imgPath+'/resource/service?id='+item.id"/>
                <div class="info">
                    <header>{{item.name}}</header>
                    <p>服务类别:{{item.type2Name}}<i class="fa fa-eye"></i>&nbsp;{{item.viewCount}}<i class="fa fa-star"></i>&nbsp;{{item.favCount}}</p>
                </div>
            </a></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "ServiceCenter",
    data(){
      return{
        imgPath:process.env.NODE_ENV==='production'?'':'/api',
        show:{
          isField:false,
          isDepartment:false,
          isMode:false,
          isObject:false
        },
        isCondition:false,
        dropdown:['服务领域','负责部门','服务方式','服务对象'],
        field:[],//领域
        department:[],//部门
        mode:[{name:"线上服务",id:"1"}, {name:"线下服务",id:"0"},],//方式
        object:[],//对象
        condition:[],//检索条件
        searchData:{//请求列表数据格式
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
      this.$ajax.post(this.$url.componentServiceCenter_fwly).then((res)=>{this.field=res.data.serviceTypeList;});
      this.$ajax.post(this.$url.componentServiceCenter_fzbm).then((res)=>{this.department=res.data.depts;});
      this.$ajax.post(this.$url.componentServiceCenter_fwdx).then((res)=>{this.object=res.data.groups;});
    },
    methods:{
      initShow(){//初始化下拉菜单为不显示
        this.show.isField=false;
        this.show.isDepartment=false;
        this.show.isMode=false;
        this.show.isObject=false;
      },
      toggle(n){//点击下拉根据index切换显示
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
      },
      clearCondition(){//清空检索条件①设置搜索数据为空
        this.searchData.type2='';
        this.searchData.managerDeptId='';
        this.searchData.lineAble='';
        this.searchData.userGroupId='';
        this.condition.splice(0,this.condition.length);//清空数组
        this.isCondition=false;//设置检索条件框不显示
        this.getList();//请求列表渲染
      },
      search(type,item){//选择下拉列表一项搜索
        this.initShow();
        this.isCondition=true;
        if(type==="field"){
          this.condition[0]='服务领域：'+item.name;
          this.searchData.type2=item.id;
        }
        if(type==="department"){
          this.condition[1]='负责部门：'+item.name;
          this.searchData.managerDeptId=item.id;
        }
        if(type==="mode"){
          this.condition[2]='服务方式：'+item.name;
          this.searchData.lineAble=item.id;
        }
        if(type==="object"){
          this.condition[3]='服务对象：'+item.groupName;
          this.searchData.userGroupId=item.id;
        }
        this.getList();
      },
      getList(){//拉取列表
        this.$ajax.post(this.$url.componentServiceCenter_list,this.searchData).then((res)=>{this.searchList=res.data.page.rows;})
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
        background: #fff;
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
    ul.list a{
        display: flex;
        margin: 5/@base 0;
        padding: 15/@base;
        border: 1px solid #bfbfbf;
    }
    ul.list a img{
        width: 50/@base;
        height: 50/@base;
        margin-right: 15/@base;
    }
    ul.list a .info{
        display: flex;
        flex-flow: column;
        justify-content: space-between;
    }
    ul.list a .info header{
        font-size: 14/@base;
    }
    ul.list a .info p{
        font-size: 12/@base;
        color: #959595;
        margin: 0;
    }
    ul.list a .info p i:first-child{
        color: #e60012;
        margin-left: 10/@base;
    }
    ul.list a .info p i:last-child{
        margin-left: 10/@base;
    }
</style>