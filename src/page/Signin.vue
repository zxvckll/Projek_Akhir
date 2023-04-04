<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FormSignin from '@/components/FormSignin.vue'
import FormSigninDokter from '@/components/FormSigninDokter.vue';
export default {
    props: [],
    components: {
      FormSignin,
      FormSigninDokter,
  },
  data() {
    return {
      user : "Dokter"
    };
  },
};
</script>

<template>
  <div v-if="user == 'Pasien'">
    <FormSignin></FormSignin>
  </div>
  <div v-if="user == 'Dokter'">
    <FormSigninDokter></FormSigninDokter>
  </div>

</template>

<style scoped>

</style>
