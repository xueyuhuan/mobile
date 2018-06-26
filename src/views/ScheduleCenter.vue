<template>
    <div class="scheduleCenter">
        <header><i class="fa fa-calendar"></i>日程</header>
        <div class="btn">
            <div class="month"><i class="fa fa-arrow-left" @click="previous()"></i>{{dateData.year}}年{{dateData.month}}月<i class="fa fa-arrow-right" @click="next"></i></div>
            <div class="other"><a><i class="fa fa-calendar"></i>添加日程</a><a><i class="fa fa-calendar-plus-o"></i>订阅</a></div>
        </div>
        <ul class="calendar">
            <li><span v-for="item in week">{{item}}</span></li>
            <li v-for="li in calendar">
                <span v-for="item in li"
                      v-if="item.day!=0?(item.day=item.day):(item.day=' ')"
                      @click="chooseDay(item.day)">
                    <i :class="{ hasEvent: item.eventCount>0,isToday: today==dateData.year+'/'+dateData.month+'/'+item.day,isChoose: choose==dateData.year+'/'+dateData.month+'/'+item.day}">{{item.day}}</i>
                </span>
            </li>
        </ul>
        <ul class="event">
            <li v-for="li in event" v-show="li.events.length>0">
                <div class="type" :style="{borderTop: '2px solid '+li.color}">{{li.name}}<i class="fa fa-chevron-up"></i></div>
                <a v-for="item in li.events" :href="item.url">
                    <time>{{item.dtstart}}</time><br/>{{item.title}}
                </a>
            </li>
            <li>暂无日程信息</li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "ScheduleCenter",
    data(){
      return{
        week:['日','一','二','三','四','五','六'],
        calendar:[],
        event:[],
        dateData:{
          year:0,month:0,day:1
        },
        today:"",
        choose:"",
      }
    },
    computed:{
    },
    created(){
      this.initData();
      this.getCalendar();
      this.getEvent();
    },
    mounted(){

    },
    methods:{
      initData(){
        let date=new Date();
        this.dateData.year=date.getFullYear();
        this.dateData.month=date.getMonth()+1;
        this.dateData.day=date.getDate();
        this.today=date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate();
      },
      getCalendar(){
        this.$ajax.post(this.$url.componentCalendar,{year:this.dateData.year,month:this.dateData.month})
            .then((res)=>{
              this.calendar=res.data.days;
            })
      },
      getEvent(){
        this.$ajax.post(this.$url.componentCalendarEvents,this.dateData)
            .then((res)=>{
              this.event=res.data.calObjs;
            })
      },
      chooseDay(day){
        this.dateData.day=day;
        this.choose=this.dateData.year+'/'+this.dateData.month+'/'+day;
        this.getEvent();
      },
      previous(){
        if(this.dateData.month==1){
          this.dateData.year--;
          this.dateData.month=12;
        }else this.dateData.month--;
        this.getCalendar();
      },
      next(){
        if(this.dateData.month==12){
          this.dateData.year++;
          this.dateData.month=1;
        }else this.dateData.month++;
        this.getCalendar();
      }
    }
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .scheduleCenter{
        padding-top: 70/@base;
    }
    header{
        height: 40/@base;
        line-height: 40/@base;
        background-color: rgb(6,126,190);
        font-size: 16/@base;
        font-weight: 700;
        color: white;
        padding: 0 20/@base;
    }
    header i{
        margin-right: 10/@base;
    }
    .btn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40/@base;
        font-size: 14/@base;
        color: rgb(19,144,211);
        padding: 0 20/@base;
    }
    .btn i{
        margin: 0 5/@base;
    }
    ul.calendar{//日历
        padding: 0 20/@base;
        margin-bottom: 10/@base;
        li{
            display: flex;
            align-items: center;
            font-size: 18/@base;
            span{
                flex: 1;
                text-align: center;
                height: 40/@base;
                line-height: 40/@base;
                border-radius: 50%;
                i{
                    display: inline-block;
                    font-style: normal;
                }
            }
        }
        li:first-child{
            font-size: 14/@base;
        }
    }
    ul.event{//事件列表
        position: relative;
        li:last-child{
            position: absolute;
            top: 0;
            z-index: -1;
            width: 100%;
            height: 30/@base;
            line-height: 30/@base;
            font-size: 12/@base;
            padding: 0 20/@base;
        }
        li{
            background-color: rgb(238,238,238);
            font-size: 14/@base;
            margin-bottom: 5/@base;
            .type{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 5/@base 20/@base;
                i{
                    color: #959595;
                }
            }
            a{
                display: block;
                color: #333;
                padding: 5/@base 20/@base 10/@base;
                border-top: 1px dashed #fff;
                time{
                    display: inline-block;
                    margin-bottom: 10/@base;
                }
            }
        }
    }
    .hasEvent{//有事件
        border-bottom: 1px solid #bfbfbf;
    }
    .is{
        height: 40/@base;
        width: 40/@base;
        color: #fff;
        border-radius: 50%;
    }
    .isToday{//是今天
        .is;
        background-color: grey!important;

    }
    .isChoose{//是选择天
        .is;
        background: #bfbfbf;
    }
</style>