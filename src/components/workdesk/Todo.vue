<template>
    <!--我的待办内容部分-->
    <ul>
        <li v-for="item in list">
            <header><h2>{{item.title}}</h2>
                <time>{{item.time}}</time>
            </header>
            <p>{{item.detail}}</p>
        </li>
        <li v-if="list.length === 0">
            <p>暂无待办</p>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Todo",
        data () {
            return {
                list: []
            }
        },
        created () {
            this.$ajax.post(this.$url.componentHomeTodo,{updateFlag: true}).then(res => {this.list = res.data.todoList;});}
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
        display: block;
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
