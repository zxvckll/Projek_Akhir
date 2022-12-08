import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import router from './router/index.js'
import { createRouter, createWebHistory } from "vue-router";
import DataAntrian from "@/page/DataAntrian.vue";
import Login from "@/page/Login.vue";
import Signin from "@/page/Signin.vue";
import PendaftaranPasien from "@/page/PendaftaranPasien.vue";
import Profile from '@/page/Profile.vue';
import JadwalPraktek from '@/page/JadwalPraktek.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/DataAntrian", name: "DataAntrian", component: DataAntrian },
    { path: "/Login", name: "Login", component: Login },
    {
      path: "/PendaftaranPasien",
      name: "PendaftaranPasien",
      component: PendaftaranPasien,
    },
    { path: "/Signin", name: "Signin", component: Signin },
    { path: "/Profile", name: "Profile", component: Profile },
    { path: "/JadwalPraktek", name: "JadwalPraktek", component: JadwalPraktek },
  ],
});

createApp(App).use(router).mount("#app");
