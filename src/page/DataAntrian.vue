<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DataAntrianPasien from "@/components/DataAntrianPasien.vue";
import DataAntrianDokter from "@/components/DataAntrianDokter.vue";
import DataAntrianAdmin from "@/components/DataAntrianAdmin.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    DataAntrianPasien,
    DataAntrianDokter,
    DataAntrianAdmin,
  },
  computed: {
    ...mapGetters("auth", {
      getUserRole: "getUserRole",
      getUserId: "getUserId",
    }),
  },
  data() {
    return {
      isUser: "Dokter",
      appointment :'',
    };
  },
  methods : {
    async getListAppointment() {
      var url = `http://localhost:5000/appointment/`
      try {
        const response = await axios.get(url);
        const data = await response;
        this.appointment = await data.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<template>
  <div v-if="getUserRole == 'Patient'">
    <DataAntrianPasien></DataAntrianPasien>
  </div>
  <div v-else-if="getUserRole == 'Doctor'">
    <DataAntrianDokter></DataAntrianDokter>
  </div>
  <div v-else-if="getUserRole == 'Admin'">
    <DataAntrianAdmin></DataAntrianAdmin>
  </div>
</template>

<style scoped></style>
