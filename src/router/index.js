import { createRouter, createWebHistory } from "vue-router";
import store from '@/store/index.js'

const DataAntrian = () => import('@/page/DataAntrian.vue');
const Login = () => import('@/page/Login.vue');
const Signin = () => import('@/page/Sign1in.vue');
const PendaftaranPasien = () => import('@/page/PendaftaranPasien.vue');
const Profile = () => import('@/page/Profile.vue');
const JadwalPraktek = () => import('@/page/JadwalPraktek.vue');
const CardProfileDokter = () => import('@/page/CardProfileDokter.vue');


// import DataAntrian from "@/page/DataAntrian.vue";
// import Login from "@/page/Login.vue";
// import Signin from "@/page/Signin.vue";
// import PendaftaranPasien from "@/page/PendaftaranPasien.vue";
// import Profile from "@/page/Profile.vue";
// import JadwalPraktek from "@/page/JadwalPraktek.vue";

const routes = [
    { path: "/DataAntrian", name: "DataAntrian", component: DataAntrian},
    { path: "/Login", name: "Login", component: Login },
    {
      path: "/PendaftaranPasien",
      name: "PendaftaranPasien",
      component: PendaftaranPasien,
    },
    { path: "/Signin", name: "Signin", component: Signin },
    { path: "/Profile", name: "Profile", component: Profile},
    { path: "/Poliklinik/:id", name: "JadwalPraktek", component: JadwalPraktek },
  ]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to,from,next) => {
    if(store.state.auth.userRole != null  && to.meta.needsAuth){
        next("/login");
    }
    else {
        next();
    }
});


export default router