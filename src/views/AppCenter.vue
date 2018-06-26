<template>
    <div class="appCenter">
        <section v-for="li in list">
            <header>{{li.name}}</header>
            <ul>
                <li v-for="item in li.apps"><a :href="item.url">
                    <img :src='"/api/resource/app?id="+item.id'/>
                    {{item.name}}
                </a></li>
            </ul>
        </section>
    </div>
</template>

<script>
  export default {
    name: "AppCenter",
    data(){
      return{
        list:[]
      }
    },
    created() {
      this.$ajax.post(this.$url.componentAppCenter)
          .then((res)=>{
            console.log(res);
            this.list=res.data.groups;
          })
          .catch((error)=>{
            console.log(error);
          });
    }
  }
</script>

<style scoped lang="less">
    @base: 75/2rem;
    .appCenter{
        margin: 75/@base 0 0 0;
    }
    header{
        height: 50/@base;
        line-height: 50/@base;
        background: #fff;
        font-size: 18/@base;
        font-weight: 700;
        color: #1390d3;
        padding: 0 10/@base;
        border-top: 2px solid #1390d3;
        border-bottom: 1px dashed #bfbfbf;
    }
    ul{
        display: flex;
        flex-flow:wrap;
        flex: 0 0 auto;
        background-color: #fff;
        padding:10/@base 20/@base 0;
    }
    li{
        display: flex;
        width: 50%;
        padding: 0 0 10/@base 0;
    }
    a{
        font-size: 14/@base;
        color: #000;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    img{
        width: 24/@base;
        margin-right: 5/@base;
        vertical-align: middle;
    }
</style>