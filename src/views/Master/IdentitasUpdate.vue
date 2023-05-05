<script>
import { defineComponent } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// import axios
import axios from 'axios';

export default defineComponent({
  name: 'MyComponent',
  components: { VueDatePicker },
  data() {
    return {
      date: null,
      kodeInstitusi: "",
      kodeHukum: "",
      namaInstitusi: "",
      alamat: "",
      kota: "",
      kodePos: "",
      telepon: "",
      email: "",
      website: "",
      tanggalBerdiri: "",
      noAkta: "",
      noSah: "",
    };
  },
  created() {
    this.getIdentitas();
  },
  methods: {
    uploadFile(event) {
      const file = event.target.files[0];
      // call your upload function here, passing the file as an argument
    },

    // get identitas
    async getIdentitas() {
      try {
        const response = await axios.get("http://localhost:5000/identitas");
        this.kodeInstitusi = response.data[0].Identitas_ID;
        this.kodeHukum = response.data[0].KodeHukum;
        this.namaInstitusi = response.data[0].Nama_Identitas;
        this.alamat = response.data[0].Alamat;
        this.kota = response.data[0].Kota;
        this.kodePos = response.data[0].KodePos;
        this.telepon = response.data[0].Telepon;
        this.email = response.data[0].Email;
        this.website = response.data[0].Website;
        this.tanggalBerdiri = response.data[0].TglMulai;
        this.noAkta = response.data[0].NoAkta;
        this.noSah = response.data[0].NoSah;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
</script>

<template>
  <main class="bg-gray-100 p-4">
    <form action="#" method="POST" class="mt-4">
      <div class="shadow rounded overflow-hidden">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="institute-code"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Institusi
              </label>
              <input
                type="text"
                name="institute-code"
                id="institute-code"
                autoComplete="institute-code"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="kodeInstitusi"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="law-code"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Hukum
              </label>
              <input
                type="text"
                name="law-code"
                id="law-code"
                autoComplete="law-code"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="nama-institusi"
                class="block text-sm font-medium text-gray-700"
              >
                Nama Institusi
              </label>
              <input
                type="text"
                name="nama-institusi"
                id="nama-institusi"
                autoComplete="institusi"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="alamat"
                class="block text-sm font-medium text-gray-700"
              >
                Alamat
              </label>
              <input
                type="text"
                name="alamat"
                id="alamat"
                autoComplete="alamat"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            
            <div class="col-span-6 sm:col-span-4 lg:col-span-3">
              <label
                htmlFor="kota"
                class="block text-sm font-medium text-gray-700"
              >
                Kota
              </label>
              <input
                type="text"
                name="kota"
                id="kota"
                autoComplete="kota"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3 lg:col-span-3">
              <label
                htmlFor="postal-code"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Pos
              </label>
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="telepon"
                class="block text-sm font-medium text-gray-700"
              >
                Telepon
              </label>
              <input
                type="text"
                name="telepon"
                id="telepon"
                autoComplete="telepon"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="email-address"
                class="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="company-website"
                class="block text-sm font-medium text-gray-700"
              >
                Website
              </label>
              <div class="mt-1 flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500"
                >
                  http://
                </span>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  class="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="www.example.com"
                />
              </div>
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="first-date"
                class="block text-sm font-medium text-gray-700"
              >
                Tanggal Berdiri
              </label>
              <VueDatePicker 
                v-model="date"
                class="mt-1 block w-full rounded-md"
              ></VueDatePicker>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="no-akta"
                class="block text-sm font-medium text-gray-700"
              >
                Nomor Akta
              </label>
              <input
                type="text"
                name="no-akta"
                id="no-akta"
                autoComplete="no-akta"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="no-sah"
                class="block text-sm font-medium text-gray-700"
              >
                Nomor Sah
              </label>
              <input
                type="text"
                name="no-sah"
                id="no-sah"
                autoComplete="no-sah"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </main>
</template>