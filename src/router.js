import Vue from "vue";
import Router from "vue-router";

import WorkDesk from "./views/WorkDesk.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "WorkDesk",
      component: WorkDesk
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
