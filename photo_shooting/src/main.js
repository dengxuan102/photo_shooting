import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./axios";
import Element from "./element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from "./vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.prototype.axios = axios;
Vue.use(Element);
Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
