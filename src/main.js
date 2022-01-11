import Vue from "vue";
import App from "./App.vue";
// import vuetify from "./plugins/vuetify";
import axios from "axios";
import router from "./router/route";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Vue.use(vuetify);
Vue.config.productionTip = false;

Vue.prototype.$http = axios;

new Vue({
  router,
  // vuetify,
  render: (h) => h(App),
}).$mount("#app");
