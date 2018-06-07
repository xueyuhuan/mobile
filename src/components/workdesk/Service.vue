<template>
  <div class="service">
    <a v-for="app in data.application" :href="app.appUrl">
      <img :src="app.appImgSrc"/>
      {{app.appName}}
    </a>
  </div>
</template>

<script>
export default {
  name: "Service",
    data: function () {
        return {
            data: ''
        }
    },
    created:function () {
      let self = this;
      this.$ajax.get('/data1.json')
          .then(function (response) {
            self.data=response.data.workDesk;
            console.log(response.data.workDesk);
          })
          .catch(function (response) {
            console.log(response);
          });
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @base: 75/2rem;
  .service{
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
  }
</style>
