<template>
    <div>
        <ul>
            <li v-for="item in services">
                <div>
                    <span class="span1" :class="{first_class:item.Z_R_N == 1,second_class:item.Z_R_N == 2,third_class:item.Z_R_N == 3}">{{item.Z_R_N}}</span>
                    <img :src="'/api/resource/service?id=' + item.ID" ></img>
                    <span class="span2">{{item.NAME}}</span>
                </div>
                <span>{{item.VW}}次</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: "Rankings",
        data () {
            return {
                services: [],
            }
        },
        props:[''],
        created () {
            this.getData(1);
        },
        methods:{
            getData(type){//1、2、3分别代表本周、本月、本年
                this.$ajax.post(this.$url.componentServiceRank,{type : type})
                        .then(res => {
                            console.log(res.data);
                            this.services = res.data.services;
                        })
            }
        }
    };
</script>

<style scoped lang="less">
    @base: 75/2rem;
    ul{
        margin-bottom: 5/@base;
        background-color:white;
        li{
            position: relative;
            padding: 5/@base 20/@base;
            border-bottom: 1px dashed #bfbfbf;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size:14/@base;
            img{
                width: 23/@base;
                height: 23/@base;
                display: inline-block;
                margin-right:5/@base;
            }
            div{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .span1{
                width: 20/@base;
                height: 20/@base;
                border-radius: 2px;
                display: inline-block;
                text-align: center;
                line-height: 20/@base;
                margin-right:5/@base;
                color: white;
                background-color:rgb(149, 149, 149) ;
            }
            .span2{
                display: inline-block;
                margin-right:5/@base;
            }
        }
    }
    .first_class{
        background-color: rgb(221, 87, 76) !important;
    }
    .second_class{
        background-color: rgb(243, 153, 67) !important;
    }
    .third_class{
        background-color: rgb(74, 140, 172) !important;
    }
</style>