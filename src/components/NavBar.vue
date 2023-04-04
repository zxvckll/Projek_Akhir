<script>
import Menus from "./Menus.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  components: {
    Menus,
  },
  computed: {
    ...mapGetters("auth", {
      getUserRole: "getUserRole",
      getUserId: "getUserId",
    }),
  },
  data() {
    return {
      //edit Data
      polyclinics: [],
      isUser: true,
      isActive: false,
      isMenuActive: false,
      isProfile: false,
    };
  },
  methods: {
    ...mapActions("auth", {
      actionLogout: "logout",
    }),
    toggle() {
      this.isActive = !this.isActive;
    },
    logout() {
      this.actionLogout();
      alert("logout sucess");
    },
    async getListPolyclinic() {
      var url = `http://localhost:5000/polyclinic/`;
      try {
        const response = await axios.get(url);
        this.polyclinics = await response.data;
        console.log(this.polyclinics);
      } catch (error) {
        console.error(error);
      }
    },
  },

  created() {
    this.getListPolyclinic();
  },
};
</script>
<template>
  <!-- navbar disini -->
  <nav class="bg-white border-b-2">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between">
        <!-- LEFT SIDE -->
        <div class="flex space-x-1">
          <!-- logo -->

          <div>
            <router-link to="/" class="flex items-center mr-3 py-5 px-3">
              <img
                src="https://www.rspkt.com/sites/rspkt.com/files/rsmup-landscape.png"
                alt=""
                class="h-6"
              />
            </router-link>
          </div>
          <!-- primary nav -->
          <div class="hidden md:flex items-center space-x-1">
            <div class="relative">
              <button
                @click="isMenuActive = !isMenuActive"
                class="py-5 px-4 text-gray-700 hover:text-gray-900"
              >
               
              
                Jadwal Praktek
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="inline w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <ul
                class="left-0 w-max justify-center grid-cols-1 absolute bg-gray-100 text-gray-700"
              >
          
                <div v-if="isMenuActive">
                  <Menus
                    v-for="(sam, index) in this.polyclinics"
                    v-bind:key="index"
                    :menu="sam"
                  />
                </div>
              </ul>
            </div>
            <router-link
              to="/PendaftaranPasien"
              class="py-5 px-4 text-gray-700 hover:text-gray-900"
            >
              Pendaftaran Pasien
            </router-link>
            <!-- if log in  -->
            <router-link
              to="/DataAntrian"
              class="py-5 px-4 text-gray-700 hover:text-gray-900"
              v-if="getUserRole"
            >
              Data antrian
            </router-link>
          </div>
        </div>
        <!-- RIGHT SIDE -->

        <!-- secondary nav -->
        <div
          v-if="!getUserRole"
          class="hidden md:flex items-center justify-between space-x-1"
        >
          <router-link
            to="/Login"
            class="py-5 px-4 text-gray-700 hover:text-gray-900"
          >
            Log in
          </router-link>
          <router-link
            to="/Signin"
            class="py-2 px-4 bg-green-400 rounded text-gray-700 hover:bg-green-600 hover:text-gray-900 transition duration-300"
          >
            Sign in
          </router-link>
        </div>
        <div
          v-else
          class="hidden md:flex items-center justify-between space-x-1 relative"
        >
          <button class="text-gray-700" @click="isProfile = !isProfile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 bg-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>

          <div
            class="left-0 top-full w-max justify-center grid-cols-1 absolute bg-gray-100 text-gray-700"
          >
            <ul v-if="isProfile">
              <li>
                <router-link
                  to="/Profile"
                  class="py-2 px-4 border hover:text-gray-900 block"
                  >Edit Profile</router-link
                >
              </li>
              <li>
                <button
                  class="py-2 px-4 border hover:text-gray-900 block"
                  @click="logout()"
                >
                  Log out
                </button>
              </li>
            </ul>
          </div>
        </div>
        <!-- Mobile Button 
        <div class="md:hidden flex items-center text-gray-700">
          <button class="mobile-menu-button" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div> -->
      </div>
    </div>
    <!-- mobile nav
    <div
      class="mobile-menu text-gray-700 md:hidden block text-center"
      :class="[isActive ? 'hidden' : '']"
    >
      <div class="relative">
        <a class="block py-2 px-4 text-sm hover:bg-gray-200">
          Jadwal Praktek
        </a>
      </div>
      <router-link
        to="/PendaftaranPasien"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Pendaftaran Pasien</router-link
      >
      <div v-if="getUserRole">
        <router-link
          to="/DataAntrian"
          class="block py-2 px-4 text-sm hover:bg-gray-200"
          >Data antrian</router-link
        >
        <router-link
          to="/Profile"
          class="block py-2 px-4 text-sm hover:bg-gray-200"
          >Edit Profile</router-link
        >
      </div>

      <div v-if="!getUserRole">
        <router-link
          to="/Login"
          class="block py-2 px-4 text-sm hover:bg-gray-200"
          >Login</router-link
        >
        <router-link
          to="/Signin"
          class="block py-2 px-4 text-sm bg-green-400 hover:bg-green-600 hover:text-gray-900 transition duration-300"
          >Signin</router-link
        >
      </div>
    </div> -->
  </nav>

  <!-- content goes here -->
  <!-- <div class="py-32 text-center"> -->
  <!-- <h2 class="fontt-extrabold text-4xl">Navbar in Tailwind!</h2> -->
  <!-- <router-view></router-view>
  </div> -->
</template>
<style></style>
