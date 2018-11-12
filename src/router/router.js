import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/show/:showId",
      name: "showDetailPage",
      component: () => import("../views/ShowDetailPage.vue")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    debugger;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({ x: 0, y: 0 });
        }
      }, 1000);
    });

    debugger;
  }
});
