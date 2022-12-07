<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import NavBarVue from './components/NavBar.vue';
import Hero from './components/Hero.vue'
import tes from './page/tes.vue'
</script>

<template>
  <div>
  <NavBarVue/>
  <router-view></router-view>
  </div>
  
  <div class="" v-if="this.$route.fullPath=='/'">
    <hero></hero>
  </div>

  
</template>

<style scoped>

</style>
