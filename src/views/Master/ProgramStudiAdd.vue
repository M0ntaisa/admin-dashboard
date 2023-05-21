<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'MyComponent',
    data() {
      return {

      };
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
                htmlFor="institusi"
                class="block text-sm font-medium text-gray-700"
              >
                Institusi
              </label>
              <select
                id="institusi"
                name="institusi"
                autoComplete="institusi-name"
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>- Pilih -</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="fakultas"
                class="block text-sm font-medium text-gray-700"
              >
                Fakultas
              </label>
              <select
                id="fakultas"
                name="fakultas"
                autoComplete="fakultas-name"
                class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>- Pilih -</option>
              </select>
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label
                htmlFor="kodeProdi"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Program Studi
              </label>
              <input
                type="text"
                name="kodeProdi"
                id="kodeProdi"
                autoComplete="kodeProdi"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label
                htmlFor="namaProdi"
                class="block text-sm font-medium text-gray-700"
              >
                Nama Program Studi
              </label>
              <input
                type="text"
                name="namaProdi"
                id="namaProdi"
                autoComplete="namaProdi"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-12 sm:col-span-6">
              <label
                htmlFor="ketuaProdi"
                class="block text-sm font-medium text-gray-700"
              >
                Ketua Program Studi
              </label>
              <input
                type="text"
                name="ketuaProdi"
                id="ketuaProdi"
                autoComplete="ketuaProdi"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="jenjang"
                class="block text-sm font-medium text-gray-700"
              >
                Jenjang
              </label>
              <input
                type="text"
                name="jenjang"
                id="jenjang"
                autoComplete="jenjang"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="akreditasi"
                class="block text-sm font-medium text-gray-700"
              >
                Akreditasi
              </label>
              <input
                type="text"
                name="akreditasi"
                id="akreditasi"
                autoComplete="akreditasi"
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