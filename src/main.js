import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "../router/router";
import VueMeta from "vue-meta";
import vueSmoothScroll from 'vue2-smooth-scroll'

Vue.use(VueMeta);
Vue.config.ignoredElements = ["r-grid", "r-cell"];
Vue.config.productionTip = false;

Vue.use(vueSmoothScroll)

// VueRouter
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
}).$mount("#app");
