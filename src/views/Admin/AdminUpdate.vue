<script>
import { defineComponent } from 'vue';
// import axios
import axios from 'axios';

export default defineComponent({
  name: 'MyComponent',
  data() {
    return {
      nama_lengkap: "",
      email: "",
      username: "",
      telepon: "",
      keterangan: "",
    };
  },
  created() {
    this.getAdminById();
  },
  methods: {
    uploadFile(event) {
      const file = event.target.files[0];
      // call your upload function here, passing the file as an argument
    },

    // get admin by id
    async getAdminById() {
      try {
        const id = this.$route.params.id;
        const response = await axios.get(`http://localhost:5000/administrator/${id}`);
        this.nama_lengkap = response.data.nama_lengkap;
        this.email = response.data.email;
        this.username = response.data.username;
        this.telepon = response.data.telepon;
        this.keterangan = response.data.keterangan;
      } catch (error) {
        console.log(error);
      }
    }
  },
});
</script>

<template>
  <main class="bg-gray-100 p-4">
    <form action="#" method="POST" class="mt-4">
      <div class="shadow rounded overflow-hidden">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="name"
                class="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="nama_lengkap"
              />
            </div>

            <!-- <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="last-name"
                class="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div> -->

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
                v-model="email"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="username"
                class="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="username"
              />
            </div>
            
            <div class="col-span-6 sm:col-span-4">
              <label
                htmlFor="password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
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
                v-model="telepon"
              />
            </div>

            <div class="col-span-6">
              <label
                htmlFor="keterangan"
                class="block text-sm font-medium text-gray-700"
              >
                Keterangan
              </label>
              <input
                type="text"
                name="keterangan"
                id="keterangan"
                autoComplete="keterangan"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="keterangan"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div class="mt-1 flex items-center">
                <span
                  class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100"
                >
                  <svg
                    class="h-full w-full text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </span>
                <button
                  type="button"
                  class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  @click="$refs.fileInput.click()"
                >
                  Change
                </button>
                <input
                  ref="fileInput"
                  type="file"
                  class="hidden"
                  @change="uploadFile"
                />
              </div>
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