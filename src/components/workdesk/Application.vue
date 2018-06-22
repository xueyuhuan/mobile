<template>
  <div class="application">
    <a v-for="app in appList" :href="app.url">
      <img :src="'/api/resource/app?id=' + app.id"/>
      {{app.name}}
    </a>
  </div>
</template>
<script>
export default {
  name: "Application",
    data () {
        return {
            appList: []
        }
    },
    created () {
        this.$ajax.post(this.$url.componentHomeApp).then(res => {this.appList = res.data.apps;})
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
    display: inline-block;
    /*align-items: center;*/
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
    vertical-align: middle;
  }
</style>
