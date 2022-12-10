<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ModalJadwalPraktek from "./ModalJadwalPraktek.vue";
export default {
  props: ["data"],
  components: {
    ModalJadwalPraktek,
  },
  data() {
    return {
      selectedJamPraktek: {},
      isUser : 'Dokter',
      isAdmin : true,
      DokterID : 124,
      showModal: false,
      showDeleteModal: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    openModal() {
      let id = event.srcElement.id;
      console.log(id);
      if (id == 0) {
        this.selectedJamPraktek = {};
        this.showModal = true;
      } else {
        this.selectedJamPraktek = this.data.Waktu.filter((d) => d.id == id);
        this.showModal = true;
      }
    },
    openDeleteModal() {
      let id = event.srcElement.id;
      console.log(id);
      this.selectedJamPraktek = this.data.Waktu.filter((d) => d.id == id);
      this.showDeleteModal = true;
    },
    deleteData() {
      console.log("delete data successfully");
    },
  },
};
</script>

<template>
  <div>
    <!-- <div class="h-28 bg-blue-200 text-gray-700"></div> -->
    <div class="my-20 mx-20 grid grid-cols-3 bg-white text-gray-700 rounded-md">
      <!-- card img goes here -->
      <div class="card">
        <img
          class="mx-5 w-72 pb-10 mt-5 rounded-md"
          :src="
            data
              ? data.ImageUrl
              : 'https://user-images.githubusercontent.com/43302778/106805462-7a908400-6645-11eb-958f-cd72b74a17b3.jpg'
          "
          alt=""
        />
        <div>
          <h2 class="mx-5 pb-5 text-lg">Jadwal Praktek</h2>
          <table
            class="mx-5 mb-5 border-collapse table-auto overflow-hidden shadow-md"
          >
            <thead class="bg-green-400 text-left font-bold">
              <tr>
                <th>Hari</th>
                <th>Waktu</th>
                <th v-if="(isUser != 'Pasien')&&(DokterID == data.id)||(isAdmin)">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(jadwalPraktek, index) in data.Waktu"
                v-bind:key="index"
                class="border-b"
              >
                <td class="pr-10">{{ jadwalPraktek.hari }}</td>
                <td>{{ jadwalPraktek.jam }}</td>
                <td class="flex items-center justify-center" v-if="(isUser != 'Pasien')&&(DokterID == data.id)||(isAdmin)">
                  <button
                    class="bg-green-400 text-black rounded py-2 px-2 hover:bg-green-600"
                    :id="jadwalPraktek.id"
                    @click="openModal()"
                  >
                    Edit
                  </button>

                  <Teleport to="body">
                    <!-- use the modal component, pass in the prop -->
                    <ModalJadwalPraktek
                      :data="selectedJamPraktek"
                      :show="showModal"
                      @close="showModal = false"
                    >
                    </ModalJadwalPraktek>
                  </Teleport>

                  <button
                    :id="jadwalPraktek.id"
                    @click="openDeleteModal()"
                    class="bg-red-400 text-black rounded py-2 px-2 hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <Teleport to="body">
                    <!-- use the modal component, pass in the prop -->
                    <DeleteModal
                      :data="selectedJamPraktek"
                      :show="showDeleteModal"
                      @close="showDeleteModal = false"
                      @delete="deleteData()"
                    >
                    </DeleteModal>
                  </Teleport>
                </td>
              </tr>
            </tbody>
          </table>
          <div class=" mx-5 my-5" v-if="(isUser != 'Pasien')&&(DokterID == data.id)||(isAdmin) ">
            <button
              :id="0"
              class="mt-10 py-3 px-5 bg-blue-400 text-black rounded hover:bg-blue-600"
              @click="openModal()"
            >
              Tambah Data antrian
            </button>
          </div>
        </div>
      </div>
      <!-- data goes here -->
      <div class="col-span-2">
        <div class="">
          <h2 class="mt-5 my-5 text-xl text-black">{{ data.Nama }}</h2>
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
