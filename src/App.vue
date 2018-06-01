<template>
  <div id="app">
    <Nav></Nav>
    <WorkDesk></WorkDesk>
  </div>
</template>

<script>
// @ is an alias to /src
import WorkDesk from "@/views/WorkDesk.vue";
import Nav from "./components/Nav";

export default {
    name: "home",
    components: {
        Nav,
        WorkDesk
    }
};
</script>

<style lang="less">

</style>
