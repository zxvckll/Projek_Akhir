<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import DataAntrianPasien from '@/components/DataAntrianPasien.vue'
import DataAntrianDokter from '@/components/DataAntrianDokter.vue'
import DataAntrianAdmin from  '@/components/DataAntrianAdmin.vue'
export default {
    components: {
        DataAntrianPasien,
        DataAntrianDokter,
        DataAntrianAdmin,
  },
  data() {
    return {
        isUser : "Admin"

    };
  },
};
</script>

<template>
 
<div v-if="isUser == 'Pasien'">
    <DataAntrianPasien></DataAntrianPasien>
</div>
<div v-else-if="isUser == 'Dokter'">
    <DataAntrianDokter></DataAntrianDokter>
</div>
<div v-else-if="isUser == 'Admin'">
    <DataAntrianAdmin></DataAntrianAdmin>
</div>


</template>

<style scoped></style>
