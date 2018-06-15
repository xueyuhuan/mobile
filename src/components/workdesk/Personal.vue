<template>
    <!--个人中心-->
    <ul>
        <li>
            <div class="left">
                <img src="../../assets/images/temp.png"/>
                <p class="name">邮件<br/><span>12345678910@qq.com</span></p>
            </div>
            <div class="right"><p>未读：62，今日：1</p></div>
        </li>
        <li>
            <div class="left">
                <img src="../../assets/images/temp.png"/>
                <p class="name">邮件<br/><span>12345678910@qq.com</span></p>
            </div>
            <div class="right"><p>未读：62，今日：1</p></div>
        </li>
        <li>
            <div class="left">
                <img src="../../assets/images/temp.png"/>
                <p class="name">邮件<br/><span>12345678910@qq.com</span></p>
            </div>
            <div class="right"><p>未读：62，今日：1</p></div>
        </li>
    </ul>
</template>

<script>
    import api from "@/interface.js";
    export default {
        name: "Personal",
        data () {
            return {
                data: ''
            }
        },
        created () {
            this.$ajax.post(api.user_center)
                    .then(res => {
                console.log(res);

        }).catch(err => {
                console.log(err);
        })
        }
    };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @base :75/2rem;
    ul {
        width: 100%;
        background: #ffffff;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 55 / @base;
        padding: 5 / @base 20 / @base;
        border-bottom: 1px dashed #bfbfbf;
    }

    .left {
        display: flex;
    }

    .left img {
        width: 40 / @base;
        height: 40 / @base;
        margin-right: 15 / @base;
    }

    p {
        font-size: 14 / @base;
        color: #000000;
        font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
        margin: 0;
    }

    span {
        font-size: 12 / @base;
        color: #1295d8;
    }

    .name {

    }
</style>
