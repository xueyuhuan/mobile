<template>
    <div class="setUp">
        <header>我的设置</header>
        <div class="info">
            <img src=""/><br/><span>xx&nbsp;xxxxxx</span>
        </div>
        <ul>
            <li></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: "SetUp",
    data(){
      return{

      }
    },
  }
</script>

<style scoped lang="less">
    @base:75/2rem;
    .setUp{
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
</style>