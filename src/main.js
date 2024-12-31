import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify"; // Your Vuetify configuration
import router from "./router"; // Your Vue Router configuration

Vue.config.productionTip = false;

new Vue({
  vuetify, // Inject Vuetify
  router,  // Inject Router
  render: h => h(App),
}).$mount("#app");
