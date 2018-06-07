<template>
  <!--公文-->
  <ul>
    <li v-for="every in data.schedule">
      <header><h2>{{every.title}}</h2><time>{{every.time}}</time></header>
      <p>{{every.detail}}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "File",
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
  @base:75/2rem;
  ul{
    width: 100%;
    background: #fff;
  }
  li{
    padding: 5/@base 20px;
    border-bottom: 1px dashed #bfbfbf;
  }
  li:last-child{border: none}
  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24/@base;
    font-size: 14/@base;
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #000000;
    margin: 0 0 5/@base;
  }
  h2{
    font-size: 14/@base;
    font-weight: 500;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  time{
    display: block;
    flex: none;
  }
  p{
    height: 24/@base;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12/@base;
    color: #959595;
    font-family: "Microsoft YaHei","Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;
    margin: 0;
  }
</style>
