<template>
  <div class="wk_card_artical">
    <!--<a href="#" class="application_center_item">-->
      <!--<img src="../assets/images/temp.png"/>-->
      <!--一张表流程平台奥斯卡级到哈市开掘到-->
    <!--</a>-->
    <a v-for="app in data.application" :href="app.appUrl" class="application_center_item">
      <img :src="app.appImgSrc"/>
      {{app.appName}}
    </a>
  </div>
</template>

<script>
export default {
  name: "Application",
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
  /*
 * 卡片内容
 */
  .wk_card_artical{
    background-color: white;
    position: relative;
    width: 100%;
    height: auto;
    padding:10px 20px 0px 20px  ;
  }
  .wk_card_artical a{
    vertical-align: middle;

  }

  .wk_card_artical img{
    width: 23px;
    height: 23px;
    vertical-align: middle;
  }
  .application_center_item {
    display: inline-block;
    width: 45%;
    height: 100%;
    padding-bottom: 10px;
    margin-right: 10px;
    font-size: 14px;
    font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgb(0, 0, 0);
    line-height: 23px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
