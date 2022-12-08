<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Modal from "@/components/Modal.vue";
import DeleteModal from "./DeleteModal.vue";
export default {
  components: {
    Modal,
    DeleteModal,
  },
  methods: {
    openModal() {
      let id = event.srcElement.id;
      console.log(id);
      if (id == 1) {
        this.selectedData = {};
        this.showModal = true;
      } else {
        this.selectedData = this.DataAntrian.filter((data) => data.NoRM == id);
        this.showModal = true;
      }
    },
    openDeleteModal() {
      let id = event.srcElement.id;
      console.log(id);
      this.selectedData = this.DataAntrian.filter((data) => data.NoRM == id);
      this.showDeleteModal = true;
    },
    deleteData() {
      console.log("delete data successfully");
    },
  },
  data() {
    return {
      showModal: false,
      deleteModal: false,
      showDeleteModal: false,
      selectedData: {},
      DataAntrian: [
        {
          NamaPasien: "Bagus",
          NamaDokter: "Dr.Anita",
          NoRM: 123523,
          Poliklinik: "Gigi",
          Spesialis: "Gigi",
          Tanggal: "10/11/2022",
          Waktu: "08.00",
          EstimasiMenunggu: "10 menit",
          Status: "Pending",
        },
        {
          NamaPasien: "Agus",
          NamaDokter: "Dr.Nico",
          NoRM: 342252,
          Poliklinik: "Mulut",
          Spesialis: "Bedah",
          Tanggal: "10/12/2022",
          Waktu: "15.00",
          EstimasiMenunggu: "5 menit",
          Status: "Diteima",
        },
        {
          NamaPasien: "Andi",
          NamaDokter: "Dr.Anita",
          NoRM: 647543,
          Poliklinik: "THT",
          Spesialis: "THT",
          Tanggal: "10/11/2022",
          Waktu: "18.00",
          EstimasiMenunggu: "10 menit",
          Status: "Diteima",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-white mx-auto mt-10 w-max h-max text-gray-700">
    <table
      class="border-collapse min-w-400 table-auto overflow-hidden shadow-md"
    >
      <thead>
        <tr class="bg-green-500 text-center font-bold">
          <th class="pt-2 pr-10">No RM</th>
          <th class="pt-2 pr-10">Nama Pasien</th>
          <th class="pt-2 pr-10">Nama Dokter</th>
          <th class="pt-2 pr-10">Poliklinik</th>
          <th class="pt-2 pr-10">Spesialis</th>
          <th class="pt-2 pr-10">Tanggal</th>
          <th class="pt-2 pr-10">Waktu</th>
          <th class="pt-2 pr-10">Estimasi Menunggu</th>
          <th class="pt-2 pr-10">Status</th>
          <th class="pt-2 pr-10">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in this.DataAntrian"
          v-bind:key="index"
          class="border"
        >
          <td>{{ data.NoRM }}</td>
          <td>{{ data.NamaPasien }}</td>
          <td>{{ data.NamaDokter }}</td>
          <td>{{ data.Poliklinik }}</td>
          <td>{{ data.Spesialis }}</td>
          <td>{{ data.Tanggal }}</td>
          <td>{{ data.Waktu }}</td>
          <td>{{ data.EstimasiMenunggu }}</td>
          <td>{{ data.Status }}</td>
          <td class="flex items-center justify-center">
            <button
              class="bg-green-400 text-black rounded py-2 px-4 hover:bg-green-600"
              :id="data.NoRM"
              @click="openModal()"
            >
              Edit
            </button>

            <Teleport to="body">
              <!-- use the modal component, pass in the prop -->
              <modal
                :data="selectedData"
                :show="showModal"
                @close="showModal = false"
              >
              </modal>
            </Teleport>

            <button
              :id="data.NoRM"
              @click="openDeleteModal()"
              class="bg-red-400 text-black rounded py-2 px-4 hover:bg-red-600"
            >
              Delete
            </button>
            <Teleport to="body">
              <!-- use the modal component, pass in the prop -->
              <DeleteModal
                :data="selectedData"
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
  </div>
  <div class="text-gray-700 w-full flex justify-center">
    <button
      :id="1"
      class="mt-10 py-3 px-5 bg-blue-400 text-black rounded hover:bg-blue-600"
      @click="openModal()"
    >
      Tambah Data antrian
    </button>
  </div>
</template>

<style scoped></style>
