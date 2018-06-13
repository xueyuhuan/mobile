
<template>
    <div class="schedule_artical">
        <div class="salary_title">
            <p class="salary_title_p">2017年12月工资</p>
            <p class="salary_title_p">
                <span>应发合计：5637.31</span>
                <span>扣款合计：2463.8</span>
            </p>
            <p class="salary_title_p">
                <span>实发合计：3173.51</span>
                <span>上月津贴：3910</span>
            </p>
        </div>
        <div id="salary_div">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
//    var echarts = require('echarts');
import echarts from "echarts";
import api from "@/interface.js";
    export default {
        data(){
            return{

            }
        },
        created(){
//            this.getPay();//拿数据
            console.log(api.pay);
            this.$ajax.post(api.pay)
                    .then((res)=>{
                        console.log(res);
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
        },
        mounted(){
            this.drawSalary();//画canvas图表
        },
        methods: {
            getPay(){
                let self = this;
                console.log("/api/user_portal/salary");
                this.$ajax.post(api.pay)
                        .then((res)=>{
                            console.log(res);
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
            },
            drawSalary(){
                var chart_salary = echarts.init(document.getElementById('salary_div'));
                chart_salary.setOption({
//					title:{
//						text: "2017年12月工资查询",
//					},
                    backgroundColor: 'white',
                    textStyle: {
                        color: 'black'
                    },
                    tooltip: {

                    },
                    //图例
                    legend: {
                        orient: 'horizontal',
                        bottom: 10,
                        data: [{
                            value: 1710,
                            name: '岗位工资'
                        },
                            {
                                value: 1099,
                                name: '薪级工资'
                            },
                            {
                                value: 2626,
                                name: '绩效'
                            },
                            {
                                value: 1000,
                                name: '补发'
                            },
                        ]
                    },
                    //每个系列分别设置
                    series: [{
                        name: '2017年12月工资',
                        type: 'pie',
                        radius: '50%',
                        itemStyle: {
                            //正常情况
                            normal: {
                                //阴影大小
                                shadowBlur: 20,
                                //阴影水平偏移
                                shadowOffsetX: 10,
                                //阴影垂直偏移
                                shadowOffsetY: 10,
                                //阴影颜色
                                shadowColor: 'rgba(0,0,0,0.5)'
                            }
                        },
                        data: [{
                            value: 1710,
                            name: '岗位工资'
                        },
                            {
                                value: 1099,
                                name: '薪级工资'
                            },
                            {
                                value: 2626,
                                name: '绩效'
                            },
                            {
                                value: 1000,
                                name: '补发'
                            },
                        ]
                    }]
                });
                //定时器，随着窗口大小改变，canvas宽度也随之改变
                setTimeout(function() {
                    window.onresize = function() {
                        chart_salary.resize();
                    }
                },200);
            }
        }
    }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .schedule_artical{
        width: 100%;
        background-color: white;
    }
    .salary_title{
        padding: 10/@base 20/@base;
    }
    .salary_title_p{
        font-size: 12/@base;
        color: black;
        font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    }
    .salary_title_p>span{
        display: inline-block;
        width: 45%;
        padding-left: 10/@base;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    #salary_div{
        width: 100%;
        height: 250/@base;
    }
</style>