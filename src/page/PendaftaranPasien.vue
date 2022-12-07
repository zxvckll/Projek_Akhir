<script >
// This starter template is using Vue 3 <script setup> SFCs

export default {
    props: [],
    components: {
    
  },
  data() {
    return {

    };
  },
  methods: {
    goBack() {
        this.$router.go(-1)
    },
  },
};
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div
    class="text-gray-700 bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24 mb-24"
  >
    <header class="text-center">
      <h2 class="text-2xl font-bold mb-1">
        Form Pendaftaran Pasien
      </h2>
      <img
        src="https://www.rspkt.com/sites/rspkt.com/files/rsmup-landscape.png"
        alt=""
        class="h-10 mx-auto mb-10 mt-5"
      />
    </header>
    <!-- <form method="POST" action="/products" enctype="multipart/form-data"> -->
    <div class="mb-6">
      <label for="NoRM" class="inline-block text-lg mb-2">No RM</label>
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="NoRM"
      />
    </div>

    <div class="mb-6">
      <label for="Nama" class="inline-block text-lg mb-2">Nama</label>
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="Nama"
      />
    </div>
    <div class="mb-6">
      <label for="TanggalLahir" class="inline-block text-lg mb-2">Tanggal Lahir</label>
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="TanggalLahir"
      />
    </div>
    <div class="mb-6">
      <label for="noHP" class="inline-block text-lg mb-2"
        >No Telepon</label
      >
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="noHP"
      />
    </div>
    <div class="mb-6">
      <label for="Poliklinik" class="inline-block text-lg mb-2"
        >Poliklinik</label
      >
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="Poliklinik"
      />
    </div>
    <div class="mb-6">
      <label for="Spesialis" class="inline-block text-lg mb-2">Spesialis</label>
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="Spesialis"
      />
    </div>
    <div class="mb-6">
      <label for="TanggalAntrian" class="inline-block text-lg mb-2"
        >Tanggal Antrian</label
      >
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="TanggalAntrian"
      />
    </div>
    <div class="mb-6">
      <label for="Dokter" class="inline-block text-lg mb-2"
        >Pilih Dokter</label
      >
      <input
        type="text"
        class="border border-gray-200 rounded p-2 w-full"
        name="Dokter"
      />
    </div>
    <div class="mb-6">
      <button
        class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600"
      >
        Tambah
      </button>

      
      <button class="text-black ml-4" @click="goBack()">Back</button>
    </div>
    <!-- </form> -->
  </div>
</template>

<style scoped></style>
