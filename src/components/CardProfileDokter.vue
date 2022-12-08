<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default {
  props: ["data"],
  components: {},
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<template>
  <div>
    <!-- <div class="h-28 bg-blue-200 text-gray-700"></div> -->
    <div class="my-20 mx-20 grid grid-cols-3 bg-white text-gray-700">
      <!-- card img goes here -->
      <div class="card">
        <img
        class="mx-5 w-72 pb-10 mt-5"
          :src="
            data
              ? data.ImageUrl
              : 'https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg'
          "
          alt=""
        />
        <div>
            <h2 class="mx-5 pb-5 text-lg">Jadwal Praktek</h2>
            <table class="mx-5 border-collapse table-auto overflow-hidden shadow-md">
                <thead class="bg-green-400 text-left font-bold">
                    <tr>
                        <th>Hari</th>
                        <th>Waktu</th>
                    </tr>
               
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="pr-10 p">SENIN</td>
                        <td >10.00 – 14.00</td>
                    </tr>
                    <tr class="border-b">
                        <td class="pr-10">SELASA</td>
                        <td >10.00 – 14.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      <!-- data goes here -->
      <div class="col-span-2">
        <div class="">
          <h2 class="mt-5 my-5  text-xl text-black">{{ data.Nama }}</h2>
          <h3 class="my-5">{{ data.Pendidikan }}</h3>
          <h3 class="my-1 text-black">Course / Training:</h3>
          <p class="my-5">{{ data.Course }}</p>
          <h3 class="my-1 text-black">Pengalaman bekerja:</h3>
          <p class="my-5">{{ data.Pengalaman }}</p>
          <h3 class="my-1 text-black">Organisasi:</h3>
          <p class="my-5">{{ data.Organisasi }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
}
</style>
