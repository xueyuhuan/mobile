<template>
  <div class="application">
    <!--<a href="#">-->
      <!--<img src="../assets/images/temp.png"/>-->
      <!--一张表流程平台奥斯卡级到哈市开掘到-->
    <!--</a>-->
    <a v-for="app in appList" :href="app.url">
      <img :src="'/resource/app?id=' + app.id"/>
      {{app.name}}
    </a>
  </div>
</template>

<script>
    import api from "@/interface.js";
export default {
  name: "Application",
    data () {
        return {
            appList: []
        }
    },
    created () {
        this.$ajax.post(api.app_list)
                .then(res => {
                    console.log(res.data.apps);
                    if(res.data.errcode = '0'){
                        this.appList = res.data.apps;
                        console.log(this.appList);
                    }else {
                        console.log(res.data.errmsg);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @base: 75/2rem;
  .application{
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 auto;
    background-color: #fff;
    padding:10/@base 20/@base 0;
  }
  a{
    display: flex;
    align-items: center;
    width: 50%;
    font-size: 14/@base;
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 0 10/@base 0;
  }
  img{
    width: 24/@base;
    margin-right: 5/@base;
  }
</style>
