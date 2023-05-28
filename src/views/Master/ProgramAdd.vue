<script setup lang="ts">
</script>

<template>
  <main class="bg-gray-100 p-4">
    <form action="#" method="POST" class="mt-4">
      <div class="shadow rounded overflow-hidden">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <input type="text" hidden>
              <label
                htmlFor="Program_ID"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Program
              </label>
              <input
                type="text"
                name="Program_ID"
                id="Program_ID"
                autoComplete="Program_ID"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="nama_program"
                class="block text-sm font-medium text-gray-700"
              >
                Nama Program
              </label>
              <input
                type="text"
                name="nama_program"
                id="nama_program"
                autoComplete="nama_program"
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