<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import CardProfileDokter from "@/components/CardProfileDokter.vue";
export default {
  props: [],
  components: {
    CardProfileDokter,
  },
  data() {
    return {
      DataDokter: [
        {
          id:123,
          Nama: "dr. Triana Darmayanti Akbar, SpA",
          ImageUrl:
            "http://rsjakarta.co.id/wp-content/uploads/2020/09/triana.jpg",
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
              jam: "10.00-14.00",
              hari: "SENIN",
            },
            { id: 2, jam: "10.00-14.00", hari: "SELASA" },
            { id: 3, jam: "10.00-14.00", hari: "RABU" },
          ],
        },
        {
          id:124,
          Nama: "dr. Triana Darmayanti Akbar, SpA",
          ImageUrl:
            "http://rsjakarta.co.id/wp-content/uploads/2020/09/triana.jpg",
          Pendidikan:
            "Pendidikan Dokter UmumFakultas Kedokteran Universitas Trisakti lulus tahun 2003, Pendidikan Spesialis Bedah Umum di Universitas Indonesia lulus tahun 2012, Pendidikan Program Bedah Vaskular di Universitas Indonesia lulus tahun 2019",
          Course:
            "Dialysis Access SInergy (DASy), Singapore, tahun 2019  Workshop peripheral Intervention, INAVASC IX, Bali, tahun 2018  Instruktur pada pelatihan Workshop Vascular Access for Hemodialysis, IKABI, tahun 2017  Workshop pemasangan berbagai macam Akses Vaskuler di 6th INAVAS, Bekasi, tahun 2015",
          Pengalaman:
            "Dokter umum di Klinik Duta Jelambar tahun 2003 – 2004  PTT di kabupaten Solok Selatan, Sumatera barat tahun 2004 – 2006  Dokter spesialis Bedah di RS Amanda CIkarang tahun 2012 – 2013",
          Organisasi: "Anggota IDI Perhimpunan Spesialis Bedah Umum (PABI)",
          Waktu: [
            { id: 1, jam: "10.00-14.00", hari: "SENIN" },
            { id: 2, jam: "10.00-14.00", hari: "SELASA" },
            { id: 3, jam: "10.00-14.00", hari: "RABU" },
          ],
        },
        {
          id:125,
          Nama: "dr. Triana Darmayanti Akbar, SpA",
          ImageUrl:
            "http://rsjakarta.co.id/wp-content/uploads/2020/09/triana.jpg",
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
              jam: "10.00-14.00",
              hari: "SENIN",
            },
            { id: 2, jam: "10.00-14.00", hari: "SELASA" },
            { id: 3, jam: "10.00-14.00", hari: "RABU" },
          ],
        },
      ],
    };
  },
};
</script>

<template>
  <CardProfileDokter
    v-for="(data, index) in this.DataDokter"
    :data="data"
    v-bind:key="index"
  ></CardProfileDokter>
</template>

<style scoped></style>
