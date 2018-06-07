<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import WorkDesk from "@/views/WorkDesk.vue";
import Nav from "./components/Nav";

export default {
    name: "home",
    components: {
      Nav,
    }
};
</script>

<style lang="less">
  @base: 75/2rem;
</style>
