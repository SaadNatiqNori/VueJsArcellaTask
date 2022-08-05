import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//this is for bootstrap styles and js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//make access to all helpers function
import helpers from "@/constant/helpers";

const myApp = createApp(App).use(store).use(router);

//make access to all helpers function
myApp.config.globalProperties.$helpers = helpers;

myApp.mount("#app");
