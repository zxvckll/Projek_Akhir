<script >
// This starter template is using Vue 3 <script setup> SFCs
import ProfilePasien from '@/components/ProfilePasien.vue'
import ProfileDokter from '@/components/ProfileDokter.vue'
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
    props: [],
    components: {
        ProfilePasien,
        ProfileDokter,
  },
  data() {
    return {
        isUser:"Dokter",
        userDokter: {
          Nama: "dr. Rino Meridian, SpB (K) V",
          ImageUrl: "google.com",
          Pendidikan: "Pendidikan Dokter UmumFakultas Kedokteran Universitas Trisakti lulus tahun 2003, Pendidikan Spesialis Bedah Umum di Universitas Indonesia lulus tahun 2012, Pendidikan Program Bedah Vaskular di Universitas Indonesia lulus tahun 2019",
          Course: "Dialysis Access SInergy (DASy), Singapore, tahun 2019  Workshop peripheral Intervention, INAVASC IX, Bali, tahun 2018  Instruktur pada pelatihan Workshop Vascular Access for Hemodialysis, IKABI, tahun 2017  Workshop pemasangan berbagai macam Akses Vaskuler di 6th INAVAS, Bekasi, tahun 2015",
          Pengalaman : "Dokter umum di Klinik Duta Jelambar tahun 2003 – 2004  PTT di kabupaten Solok Selatan, Sumatera barat tahun 2004 – 2006  Dokter spesialis Bedah di RS Amanda CIkarang tahun 2012 – 2013",
          Organisasi: "Anggota IDI Perhimpunan Spesialis Bedah Umum (PABI)",
        },
        userPasien: {
          Nama: "Andi",
          Email: "example@mail.com",
          Pendidikan: "Pendidikan Dokter UmumFakultas Kedokteran Universitas Trisakti lulus tahun 2003, Pendidikan Spesialis Bedah Umum di Universitas Indonesia lulus tahun 2012, Pendidikan Program Bedah Vaskular di Universitas Indonesia lulus tahun 2019",
          Password: "123456",
          Alamat : "Perum ABC Taman Sidoarjo",
          TanggalLahir : "11/12/2002",
          Umur : 20,
          Kewarganegaraan: "Indonesia",
          Organisasi: "Anggota IDI Perhimpunan Spesialis Bedah Umum (PABI)",
          Organisasi: "Anggota IDI Perhimpunan Spesialis Bedah Umum (PABI)",
        },
    };
  },
  methods: {
    goBack() {
        this.$router.go(-1)
    },
  },
};
</script>

<template>
 <div v-if="isUser=='Pasien'">
    <ProfilePasien :data="userPasien"></ProfilePasien>
 </div>
 <div v-if="isUser=='Dokter'">
    <ProfileDokter :data="userDokter"></ProfileDokter>
 </div>
  
</template>

<style scoped>

</style>
