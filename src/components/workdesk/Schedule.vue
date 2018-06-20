<template>
    <!--日程内容部分-->
    <ul>
        <li v-for="sche in events">
            <header>
                <h2>{{sche.title}}</h2>
                <time>{{sche.time}}</time>
            </header>
            <p>{{sche.detail}}</p>
        </li>
        <li v-if="events.length == 0">
            <p>暂无数据</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Schedule",
        data () {
            return {
                events: '',
            }
        },
        props:['sch_date_index'],
        created () {
                this.$ajax.post(this.$url.componentHomeSchedule,{date : 0})
                        .then(res => {
                    console.log(res.data);
                    this.events = res.data.events;
                }).catch(err => {
                        console.log(err);
                });
        },
        methods:{
            getData:function(index){
                this.$ajax.post(this.$url.componentHomeSchedule,{date : index})
                        .then(res => {
                    console.log(res.data);
            }).catch(err => {
                    console.log(err);
            });
            }
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @base :75/2rem;
    ul {
        width: 100%;
        background: #fff;
    }

    li {
        padding: 5 / @base 20px;
        border-bottom: 1px dashed #bfbfbf;
    }

    li:last-child {
        border: none
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 24 / @base;
        font-size: 14 / @base;
        font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: #000000;
        margin: 0 0 5 / @base;
    }

    h2 {
        font-size: 14 / @base;
        font-weight: 500;
        margin: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    time {
        flex: none;
    }

    p {
        height: 24 / @base;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12 / @base;
        color: #959595;
        font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin: 0;
    }
</style>
