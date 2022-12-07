<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  props: ["data"],
  components: {},
  data() {
    return {
      isUser: "Dokter",
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
  <div class="text-gray-700">
    <div
      class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24 mb-24"
    >
      <header class="text-center">
        <h2 class="text-2xl font-bold mb-1">Profile</h2>
        <img
          src="https://www.rspkt.com/sites/rspkt.com/files/rsmup-landscape.png"
          alt=""
          class="h-10 mx-auto mb-10 mt-5"
        />
      </header>
      <!-- <form method="POST" action="/products" enctype="multipart/form-data"> -->
      <div class="mb-6">
        <label for="Nama" class="inline-block text-lg mb-2">Nama Dokter</label>
        <input
          type="text"
          class="border border-gray-200 rounded p-2 w-full"
          name="Nama"
          :value="this.data.Nama"
        />
      </div>
      <div class="mb-6">
        <label for="imageUrl" class="inline-block text-lg mb-2"
          >Image Url</label
        >
        <input
          type="text"
          class="border border-gray-200 rounded p-2 w-full"
          name="imageUrl"
          :value="this.data.ImageUrl"
        />
      </div>

      <div class="mb-6">
        <label for="Pendidikan" class="inline-block text-lg mb-2"
          >Pendidikan</label
        >
        <input
          type="text"
          class="border border-gray-200 rounded p-2 w-full"
          name="Pendidikan"
          :value="this.data.Pendidikan"
        />
      </div>
      <div class="mb-6">
        <label for="Training" class="inline-block text-lg mb-2"
          >Course / Training:</label
        >
        <textarea
          rows="5"
          class="border border-gray-200 rounded p-2 w-full"
          name="Training"
          :value="this.data.Course"
        />
      </div>
      <div class="mb-6">
        <label for="pengalamanBekerja:" class="inline-block text-lg mb-2"
          >Pengalaman bekerja:</label
        >
        <textarea
          rows="5"
          class="border border-gray-200 rounded p-2 w-full"
          name="pengalamanBekerja"
          :value="this.data.Pengalaman"
        />
      </div>
      <div class="mb-6">
        <label for="Organisasi:" class="inline-block text-lg mb-2"
          >Organisasi:</label
        >
        <textarea
          rows="5"
          class="border border-gray-200 rounded p-2 w-full"
          name="Organisasi:"
          :value="this.data.Organisasi"
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

<style scoped></style>
