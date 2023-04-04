import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "@/router/index.js";
import store from "./store/index.js";
import  VueSelect  from "vue-select";
import VueMultiselect from 'vue-multiselect'

createApp(App).use(store).use(router).component("v-select", VueSelect).component('multiselect', VueMultiselect).mount("#app");
