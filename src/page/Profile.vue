<script>
// This starter template is using Vue 3 <script setup> SFCs
import ProfilePasien from "@/components/ProfilePasien.vue";
import ProfileDokter from "@/components/ProfileDokter.vue";
import ProfileAdmin from "@/components/ProfileAdmin.vue";
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  props: [],
  components: {
    ProfilePasien,
    ProfileDokter,
    ProfileAdmin,
  },
  data() {
    return {
      isUser: "Admin",
      userDokter: {
        Nama: "dr. Triana Darmayanti Akbar, SpA",
        Password: "123456",
        Email: "example@mail.com",
        ImageUrl: "google.com",
        Pendidikan:
          "Pendidikan Dokter UmumFakultas Kedokteran Universitas Trisakti lulus tahun 2003, Pendidikan Spesialis Bedah Umum di Universitas Indonesia lulus tahun 2012, Pendidikan Program Bedah Vaskular di Universitas Indonesia lulus tahun 2019",
        Course:
          "Dialysis Access SInergy (DASy), Singapore, tahun 2019  Workshop peripheral Intervention, INAVASC IX, Bali, tahun 2018  Instruktur pada pelatihan Workshop Vascular Access for Hemodialysis, IKABI, tahun 2017  Workshop pemasangan berbagai macam Akses Vaskuler di 6th INAVAS, Bekasi, tahun 2015",
        Pengalaman:
          "Dokter umum di Klinik Duta Jelambar tahun 2003 – 2004  PTT di kabupaten Solok Selatan, Sumatera barat tahun 2004 – 2006  Dokter spesialis Bedah di RS Amanda CIkarang tahun 2012 – 2013",
        Organisasi: "Anggota IDI Perhimpunan Spesialis Bedah Umum (PABI)",
        Waktu: [
          {
            id: 1,
            waktu: "10.00-14.00",
            hari: "SENIN",
          },
          { id: 1, waktu: "10.00-14.00", hari: "SELASA" },
          { id: 1, waktu: "10.00-14.00", hari: "RABU" },
          
        ],
      },
      userPasien: {
        Nama: "Andi",
        Email: "example@mail.com",
        ImageUrl: "google.com",
        Pendidikan:
          "Pendidikan Dokter UmumFakultas Kedokteran Universitas Trisakti lulus tahun 2003, Pendidikan Spesialis Bedah Umum di Universitas Indonesia lulus tahun 2012, Pendidikan Program Bedah Vaskular di Universitas Indonesia lulus tahun 2019",
        Password: "123456",
        Alamat: "Perum ABC Taman Sidoarjo",
        TanggalLahir: "11/12/2002",
        Umur: 20,
        Kewarganegaraan: "Indonesia",
      },
      userAdmin: {
        Nama: "Andi",
        Email: "example@mail.com",
        Password: "123456",
        ImageUrl: "google.com",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div v-if="isUser == 'Pasien'">
    <ProfilePasien :data="userPasien"></ProfilePasien>
  </div>
  <div v-if="isUser == 'Dokter'">
    <ProfileDokter :data="userDokter"></ProfileDokter>
  </div>
  <div v-if="isUser == 'Admin'">
    <ProfileAdmin :data="userAdmin"></ProfileAdmin>
  </div>
</template>

<style scoped></style>
