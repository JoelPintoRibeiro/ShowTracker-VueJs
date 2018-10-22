import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import Vuex from "vuex";
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    shows: []
  },
  mutations: {
    updateShowList(state, showList) {
      state.shows = showList;
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
