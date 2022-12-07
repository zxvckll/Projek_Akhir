<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
    props: ["data",],
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
</script>

<template>
  <div class="text-gray-700 ">
    <div
      class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24 mb-24 "
    >
      <header class="text-center">
        <h2 class="text-2xl font-bold  mb-1">Profile</h2>
        <img
                src="https://www.rspkt.com/sites/rspkt.com/files/rsmup-landscape.png"
                alt=""
                class="h-10 mx-auto mb-10 mt-5"
              />
      </header>
      <!-- <form method="POST" action="/products" enctype="multipart/form-data"> -->
        <div class="mb-6">
          <label for="Email" class="inline-block text-lg mb-2">Email</label>
          <input
            type="text"
            class="border border-gray-200 rounded p-2 w-full"
            name="Email"
            :value="this.data.Email"
          />
        </div>

        <div class="mb-6">
          <label for="Password" class="inline-block text-lg mb-2"
            >Password</label
          >
          <input
            type="password"
            class="border border-gray-200 rounded p-2 w-full"
            name="Password"
            :value="this.data.Password"
          />
        </div>
        <div class="mb-6">
          <label for="Nama" class="inline-block text-lg mb-2"
            >Nama</label
          >
          <input
            type="text"
            class="border border-gray-200 rounded p-2 w-full"
            name="Nama"
            :value="this.data.Nama"
          />
        </div>
        <div class="mb-6">
          <label for="Alamat" class="inline-block text-lg mb-2"
            >Alamat</label
          >
          <input
            type="text"
            class="border border-gray-200 rounded p-2 w-full"
            name="Alamat"
            :value="this.data.Alamat"
          />
        </div>
        <div class="mb-6">
          <label for="TanggalLahir" class="inline-block text-lg mb-2"
            >Tanggal Lahir</label
          >
          <input
            type="text"
            class="border border-gray-200 rounded p-2 w-full"
            name="TanggalLahir"
            :value="this.data.TanggalLahir"
          />
        </div>
        <div class="mb-6">
          <label for="Umur" class="inline-block text-lg mb-2"
            >Umur</label
          >
          <input
            type="text"
            class="border border-gray-200 rounded p-2 w-full"
            name="Umur"
            :value="this.data.Umur"
          />
        </div>
        <div class="mb-6">
          <label for="Kewarganegaraan" class="inline-block text-lg mb-2"
            >Kewarganegaraan</label
          >
          <input
            type="text"
            class="border border-gray-200 rounded p-2 w-full"
            name="Kewarganegaraan"
            :value="this.data.Kewarganegaraan"
          />
        </div>
        <div class="mb-6">
          <button
            class="bg-green-400 text-black rounded py-2 px-4 hover:bg-green-600"
          >
            Simpan
          </button>
          
    
            <button class="text-black ml-4" @click="goBack()">Back</button>
            

        </div>
      <!-- </form> -->
    </div>
  </div>
</template>

<style scoped>

</style>
