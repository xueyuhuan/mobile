<template>
  <div id="application" class="workDesk_content">
    <!--我的应用-->
    <div class="wk_card" v-if="MyApp">
      <div class="wk_card_head">
        <p class="wk_card_head_title">我的应用</p>
        <a href="application_center.html" class="work_more"></a>
      </div>
      <Application></Application>
    </div>
    <!--我的服务-->
    <div class="wk_card" v-if="MyService">
      <div class="wk_card_head">
        <p class="wk_card_head_title">我的服务</p>
        <a href="service_center.html" class="work_more"></a>
      </div>
      <Service></Service>
    </div>
    <!--我的日程-->
    <div class="wk_card" v-if="MySchedule">
      <div class="wk_card_head">
        <p class="wk_card_head_title">我的日程</p>
        <div class="schedule_btn"  >
          <a  class="schedule_btn_a schedule_btn_active">今天</a>
          <a  class="schedule_btn_a">明天</a>
          <a  class="schedule_btn_a">后天</a>
        </div>
        <a href="schedule.html" class="work_more"></a>
      </div>
      <Schedule></Schedule>
    </div>
    <!--校内通知-->
    <div class="wk_card" v-if="Notice">
      <div class="wk_card_head">
        <p class="wk_card_head_title">校内通知</p>
        <a href="#" class="work_more"></a>
      </div>
      <notice></notice>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Application from "@/components/workdesk/Application.vue";
import Service from "@/components/workdesk/Service.vue";
import Schedule from "@/components/workdesk/Schedule.vue";
import Notice from "@/components/workdesk/Notice.vue";

export default {
  name: "WorkDesk",
    components: {
        Application,
        Service,
        Schedule,
        Notice
    },
    data: function () {
        return {
            data: '',
            MyApp:false,
            MyService:false,
            MySchedule:false,
            Notice:false
        }
    },
    created:function () {
        let self = this;
        this.$ajax.get('/data.json')
            .then(function (response) {
                self.data=response.data.workDesk;
                for(let i=0;i<self.data.length;i++){
                    if(self.data[i]=="我的应用"){self.MyApp=true}
                    if(self.data[i]=="我的服务"){self.MyService=true}
                    if(self.data[i]=="我的日程"){self.MySchedule=true}
                    if(self.data[i]=="我的日程"){self.Notice=true}
                }
                console.log(response.data);
            })
            .catch(function (response) {
                console.log(response);
            });
    }
};
</script>

<style>
  .workDesk_content{
    width: 100%;
    background-color: rgb(232,232,232);
    margin-top: 70px;
  }

  .wk_card{
    height: auto;
    margin-top: 6px;
    border-top: 2px solid rgb(19,144,211);
  }
  /*
   * 卡片头部
   */
  .wk_card_head{
    /*height: 50px;*/
    padding: 10px 20px;
    border-bottom: 1px dashed #bfbfbf;
    background-color: white;
    position: relative;
  }
  /*
   * 卡片标题
   */
  .wk_card_head_title{
    font-size: 18px;
    color: rgb(19,144,211);
    font-weight: 700;
    line-height: 29px;
    margin-bottom: 0;
    /*position: absolute;
    left: 6px;
    top: 10px;
    margin: 0px;
    width: 81px;
    height: 29px;*/
    /*margin-left: 10px;*/
  }


  .wk_card_head_title>a{
    border-left: 2px solid rgb(19,144,211);
    display: inline-block;
    padding-left: 10px;
    margin-left:10px ;
  }

  /*
   * 右边3个点
   */
  .work_more{
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    top:10px ;
    right: 20px;
    background-image:url(../assets/images/dot.png);
    background-size: 100% 100%;
  }

  .schedule_btn{
    width: 200px;
    height: 30px;
    position: absolute;
    left: 33%;
    top: 10px;
  }
  .schedule_btn>a:link,.schedule_btn>a:visited,.schedule_btn>a:hover{
    color: white;
  }

  .schedule_btn>a:active{
    color: white;
  }

  .schedule_btn_a{
    display: inline-block;
    padding: 3px 10px;
    margin-right: 3px;
    margin-top: 2px;
    border-radius: 20px;
    color: rgb(255,255,255);
    background-color: rgb(191,191,191);
    font-size: 14px;
  }
  .schedule_btn_active{
    background-color: rgb(240,134,37);
  }

</style>
