
<template>
    <div class="schedule_artical">
        <div v-if="title">
            <div class="salary_title">
                <p class="salary_title_p">{{title}}</p>
                <p class="salary_title_p">
                    <span>应发合计：{{salary.YFHJ}}</span>
                    <span>扣款合计：{{salary.KKHJ}}</span>
                </p>
                <p class="salary_title_p">
                    <span>实发合计：{{salary.SFGZ}}</span>
                    <span>上月津贴：{{salary.XNJT}}</span>
                </p>
            </div>
            <div id="salary_div">

            </div>
        </div>
        <div v-if="!title" class="nodata">
            暂无数据
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from "echarts";
    export default {
        data(){
            return{
                salary:{},
                title:""
            }
        },
        created(){
//            this.getPay();//拿数据

            this.$ajax.post(this.$url.componentHomePay)
                    .then((res)=>{
                        console.log(res.data);
                        this.salary = res.data.salary;
                        this.title = res.data.title;
                        this.drawSalary();//画canvas图表
                    })
                    .catch((err)=>{
                        console.log(err);
                    });
        },
        mounted(){

        },
        methods: {
            getPay(){
                let self = this;
                this.$ajax.post(this.$url.componentHomePay)
                        .then((res)=>{
                            console.log(res);
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
            },
            drawSalary(){
                var self = this;
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
                            value: self.salary.GWGZ,
                            name: '岗位工资'
                        },
                            {
                                value: self.salary.XJGZ,
                                name: '薪级工资'
                            },
                            {
                                value: self.salary.JXGZ,
                                name: '绩效'
                            },
                            {
                                value: self.salary.BFHJ ,
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
                            value: self.salary.GWGZ,
                            name: '岗位工资'
                        },
                            {
                                value: self.salary.XJGZ,
                                name: '薪级工资'
                            },
                            {
                                value: self.salary.JXGZ,
                                name: '绩效'
                            },
                            {
                                value: self.salary.BFHJ ,
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