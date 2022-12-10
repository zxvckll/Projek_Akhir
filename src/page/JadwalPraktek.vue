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
          Nama: "dr. Lestari Handayani, Mkes, SpTHT-KL",
          ImageUrl:
            "http://rsjakarta.co.id/wp-content/uploads/2020/09/lestari.jpg",
          Pendidikan:
            "Pendidikan Dokter Umum Universitas Brawijaya lulus tahun 1992, Pendidikan Spesialis THT-KL Universitas Padjajaran lulus tahun 2006, Magister Kesehatan Program Pascasarjana Combined Degree UNPAD tahun 2006",
          Course:
            "",
          Pengalaman:
            "",
          Organisasi: "Anggota IDI, Perhimpunan Ahli THT Bedah Kepala Leher Indonesia (PERHATI-KL)",
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
            "http://rsjakarta.co.id/wp-content/uploads/2020/10/fransiskus.png",
          Pendidikan:
            "Pendidikan Dokter Umum Universitas Kristen Indonesia lulus tahun 2007, Pendidikan Spesialis THT-KL Universitas Padjajaran lulus tahun 2017",
          Course:
            "Workshop Pre-Congress CPDP III. Pelatihan Audiometri nada murni, OAE, Speech audiometri speech in nose, timpanometri, Jakarta 2018. Rhinitis/Rhinosinusitis Online Webinar Reileving Rhinosinusitis sufferers, Jakarta, tahun 2017 Therapeutic Strategies for Allergic Rhinits and Rhinosisnusitis, Bandung, tahun 2017",
          Pengalaman:
            "RS Hermina Podomoro tahun 2017 s/d saat ini RS Sumber Waras tahun 2017 s/d saat ini Dosen FK UKI tahun 2017 s/d saat ini",
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
