<script lang="ts">
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
      formData: {
        Identitas_ID: "",
        KodeHukum: "",
        Nama_Identitas: "",
        Alamat1: "",
        Kota: "",
        KodePos: "",
        Telepon: "",
        Email: "",
        Website: "",
        TglMulai: "",
        NoAkta: "",
        NoSah: "",
      },
      submitted: false,
    };
  },
  created() {
    this.getIdentitas();
  },
  methods: {
    // debugging
    handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();
      // Do something with the submitted data (e.g., send it to the server)
      console.log(this.formData);
      const id = this.$route.params.id;
      console.log(this.$route.params.id);

      let TglMulai = this.formData.TglMulai.substring(0, 10);
      console.log(TglMulai);

      // Show the submitted data
      this.submitted = true;
    },
    // uploadFile(event: { target: { files: any[]; }; }) {
    //   const file = event.target.files[0];
    //   // call your upload function here, passing the file as an argument
    // },

    // get identitas
    async getIdentitas() {
      try {
        const response = await axios.get("http://localhost:5000/identitas");

        this.formData.Identitas_ID = response.data[0].Identitas_ID;
        this.formData.KodeHukum = response.data[0].KodeHukum;
        this.formData.Nama_Identitas = response.data[0].Nama_Identitas;
        this.formData.Alamat1 = response.data[0].Alamat1;
        this.formData.Kota = response.data[0].Kota;
        this.formData.KodePos = response.data[0].KodePos;
        this.formData.Telepon = response.data[0].Telepon;
        this.formData.Email = response.data[0].Email;
        this.formData.Website = response.data[0].Website;
        this.formData.TglMulai = response.data[0].TglMulai;
        this.formData.NoAkta = response.data[0].NoAkta;
        this.formData.NoSah = response.data[0].NoSah;
      } catch (error) {
        console.log(error);
      }
    },

    // update identitas
    async updateIdentitas() {
      try {
        const id = this.$route.params.id;
        let TglMulai = this.formData.TglMulai.substring(0, 10);
        
        await axios.put(
          `http://localhost:5000/identitas/${id}`, 
          {
            Identitas_ID:this.formData.Identitas_ID,
            KodeHukum:this.formData.KodeHukum,
            Nama_Identitas:this.formData.Nama_Identitas,
            Alamat1:this.formData.Alamat1,
            Kota:this.formData.Kota,
            KodePos:this.formData.KodePos,
            Telepon:this.formData.Telepon,
            Email:this.formData.Email,
            Website:this.formData.Website,
            TglMulai:TglMulai,
            NoAkta:this.formData.NoAkta,
            NoSah:this.formData.NoSah,
          },
          {
            timeout: 300000, // Increase timeout to 10 seconds (adjust as needed)
          }
        );
        ( this.formData.Identitas_ID = "" ), ( this.formData.KodeHukum = "" ), ( this.formData.Nama_Identitas = "" ), ( this.formData.Alamat1 = "" ), ( this.formData.Kota = "" ), ( this.formData.KodePos = "" ), ( this.formData.Telepon = "" ), ( this.formData.Email = "" ), ( this.formData.Website = "" ), ( TglMulai = ""), ( this.formData.NoAkta = "" ), ( this.formData.NoSah = "" );
        this.$router.push("/master/identitas-institusi");
      } catch (error: any) {
        console.log(error)
        if (error.code === 'ECONNABORTED') {
          console.log('Request timeout:', error.message);
        } else {
          console.error('Error:', error.message);
        }
      }
    },
  },
});
</script>

<template>
  <main class="bg-gray-100 p-4">
    <form class="mt-4" @submit="updateIdentitas">
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
                v-model="formData.Identitas_ID"
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
                v-model="formData.KodeHukum"
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
                v-model="formData.Nama_Identitas"
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
                v-model="formData.Alamat1"
              />
            </div>
            
            <div class="col-span-6 sm:col-span-4 lg:col-span-3">
              <label
                htmlFor="Kota"
                class="block text-sm font-medium text-gray-700"
              >
                Kota
              </label>
              <input
                type="text"
                name="Kota"
                id="Kota"
                autoComplete="Kota"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.Kota"
              />
            </div>

            <div class="col-span-6 sm:col-span-4 lg:col-span-3">
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
                v-model="formData.KodePos"
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
                v-model="formData.Telepon"
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
                v-model="formData.Email"
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
                  v-model="formData.Website"
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
                class="mt-1 block w-full rounded-md"
                v-model="formData.TglMulai"
                disabled
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
                v-model="formData.NoAkta"
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
                v-model="formData.NoSah"
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