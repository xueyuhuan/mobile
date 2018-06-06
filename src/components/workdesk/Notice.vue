<template>
  <!--校内通知内容部分-->
  <div class="campus_notice">
    <ul class="notice_ul">
      <li v-for="every in data.notice">
        <p class="notice_title">{{every.title}}</p>
        <p class="notice_datetime">{{every.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Notice",
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
   * 工作台-小卡片-校内通知部分
   */
  ul,li{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .campus_notice{
    width: 100%;
    background-color: white;
  }
  .notice_ul{
    width: 100%;
    margin-bottom: 5px;
  }
  .notice_ul li{
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px dashed rgb(191,191,191);
  }
  .notice_ul li:last-child {
    border-bottom: none;
  }
  .notice_title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: 14px;
    color:rgb(0,0,0);
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .notice_datetime{
    margin: 0;
    font-size: 12px;
    color: #959595;
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
</style>
