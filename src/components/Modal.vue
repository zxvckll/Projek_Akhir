<script>
export default {
  props: ["show","data"],
  methods: {
  },
    
  
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask text-gray-700">
      <div class="modal-wrapper">
        <div class="modal-container w-fit mx-auto">
          <div
            class="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24 mb-24"
          >
            <header class="text-center">
              <h2 class="text-2xl font-bold mb-1">
                {{
                  !this.data[0] ? "Add Data Antrian" : "Edit Data Antrian"
                }} 
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
                :value=" this.data[0] ? this.data[0].NoRM:'' "
              />
            </div>

            <div class="mb-6">
              <label for="PasienID" class="inline-block text-lg mb-2"
                >Pasien ID</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="PasienID"
                :value=" this.data[0] ? this.data[0].NamaPasien:'' "
              />
            </div>
            <div class="mb-6">
              <label for="DokterID" class="inline-block text-lg mb-2"
                >ID Dokter</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="DokterID"
                :value=" this.data[0] ? this.data[0].NamaDokter:'' "
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
                :value=" this.data[0] ? this.data[0].Poliklinik:'' "
              />
            </div>
            <div class="mb-6">
              <label for="Spesialis" class="inline-block text-lg mb-2"
                >Spesialis</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="Spesialis"
                :value=" this.data[0] ? this.data[0].Spesialis:'' "
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
                :value=" this.data[0] ? this.data[0].Tanggal:'' "
              />
            </div>
            <div class="mb-6">
              <label for="TanggalAntrian" class="inline-block text-lg mb-2"
                >Waktu</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="TanggalAntrian"
                :value=" this.data[0] ? this.data[0].Waktu:'' "
              />
            </div>
            <div class="mb-6">
              <label for="TanggalAntrian" class="inline-block text-lg mb-2"
                >Estimasi Menunggu</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="TanggalAntrian"
                :value=" this.data[0] ? this.data[0].EstimasiMenunggu:'' "
              />
            </div>
            <div class="mb-6">
              <label for="TanggalAntrian" class="inline-block text-lg mb-2"
                >Status</label
              >
              <input
                type="text"
                class="border border-gray-200 rounded p-2 w-full"
                name="TanggalAntrian"
                :value=" this.data[0] ? this.data[0].Status:'' "
              />
            </div>
            <div class="mb-6">
              <button
                class="bg-blue-400 text-black rounded py-2 px-4 hover:bg-blue-600"
              >
                Tambah
              </button>

              <button class="text-black ml-4" @click="$emit('close') ">
                Back
              </button>
            </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  max-height: calc(100vh - 210px);
  overflow-y: auto;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
