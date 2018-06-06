<template>
  <!--日程内容部分-->
  <div class="schedule_artical">
    <ul class="sch_ul">
      <li v-for="sche in data.schedule">
        <p class="sch_title">{{sche.title}}</p>
        <p class="sch_datetime">{{sche.time}}</p>
        <p class="sch_detail">{{sche.detail}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Schedule",
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
   * 小卡片我的日程内容部分
   */
  ul,li{
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .schedule_artical{
    width: 100%;
    background-color: white;
  }

  .sch_ul{
    width: 100%;
    margin-bottom: 5px;
  }
  .sch_ul li:last-child{
    border-bottom: none;
  }
  .sch_ul li{
    border-bottom: 1px dashed #bfbfbf;
    position: relative;
    padding: 5px 20px;
    /*clear: both;*/
  }
  .sch_title{
    width: 200px;
    height: 23px;
    padding: 5px 0px;
    white-space: nowrap;
    font-size: 14px;
    color:rgb(0,0,0);
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .sch_datetime{
    position: absolute;
    right: 25px;
    top: 10px;
    font-size: 14px;
    color:rgb(0,0,0);
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  .sch_detail{
    width: 90%;
    height: 23px;
    padding: 2px 0px;
    margin-bottom: 0px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    font-size: 12px;
    color: #959595;
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
</style>
