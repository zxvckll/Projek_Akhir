<script>
import Menus from "./Menus.vue";

export default {
  components: {
    Menus,
  },
  data() {
    return {
      isActive: false,
      isUser: true,
      isMenuActive: true,
      menus: [
        {
          title: "Spesialis THT",
          url: "Spesialis THT",
        },
        {
          title: "Spesialis Bedah",
          url: "Spesialis Bedah",
          subMenu: [
            {
              title: "Bedah Vaskular",
              url: "Bedah Vaskular",
            },
            {
              title: "Bedah Umum",
              url: "Bedah Umum",
            },
          ],
        },
        {
          title: "Spesialis Anak",
          url: "Spesialis Anak",
          subMenu: [
            {
              title: "Bedah Vaskular",
              url: "Bedah Vaskular",
            },
            {
              title: "Bedah Umum",
              url: "Bedah Umum",
              subMenu: [
                {
                  title: "Bedah Vaskular",
                  url: "Bedah Vaskular",
                },
                {
                  title: "Bedah Umum",
                  url: "Bedah Umum",
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>
<template>
  <!-- navbar disini -->
  <nav class="bg-gray-100">
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
                <Menus
                  :class="[isMenuActive ? 'hidden' : '']"
                  v-for="(menu, index) in this.menus"
                  v-bind:key="index"
                  :menu="menu"
                />
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
              v-if="isUser"
            >
              Data antrian
            </router-link>
          </div>
        </div>
        <!-- RIGHT SIDE -->
        <!-- secondary nav -->
        <div
          v-if="!isUser"
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
          class="hidden md:flex items-center justify-between space-x-1"
        >
          <router-link to="/Profile" class="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </router-link>
        </div>
        <!--Mobile Button  -->
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
        </div>
      </div>
    </div>
    <!-- mobile nav -->
    <div
      class="mobile-menu text-gray-700 md:hidden block text-center"
      :class="[isActive ? 'hidden' : '']"
    >
      <div class="relative">
        <a class="block py-2 px-4 text-sm hover:bg-gray-200">
          Jadwal Praktek
        </a>
        <!-- <ul class="absolute">
                <li v-for="(menu,index) in this.menus" v-bind:key="index">
                    <h1>{{ menu.title }}</h1> 
                </li>
            </ul> -->
      </div>
      <router-link
        to="/PendaftaranPasien"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        >Pendaftaran Pasien</router-link
      >
      <div v-if="isUser">
        <router-link
        to="/DataAntrian"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        
        >Data antrian</router-link >
        <router-link
        to="/Profile"
        class="block py-2 px-4 text-sm hover:bg-gray-200"
        
        >Edit Profile</router-link >

      </div>
      
      <div v-if="!isUser">
        <router-link to="/Login" class="block py-2 px-4 text-sm hover:bg-gray-200"
          >Login</router-link
        >
        <router-link
          to="/Signin"
          class="block py-2 px-4 text-sm bg-green-400 hover:bg-green-600 hover:text-gray-900 transition duration-300"
          >Signin</router-link
        >
      </div>
    </div>
  </nav>

  <!-- content goes here -->
  <!-- <div class="py-32 text-center"> -->
  <!-- <h2 class="fontt-extrabold text-4xl">Navbar in Tailwind!</h2> -->
  <!-- <router-view></router-view>
  </div> -->
</template>
<style></style>
