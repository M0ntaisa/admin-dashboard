<script setup lang="ts">
import {  ref, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import router from '@/router';
import axios from 'axios';

// define ref
const formData = ref({
  Identitas_ID: '',
  kode_fakultas: '',
  nama_fakultas: '',
  Dekan: '',
});

// define rules 
const rules = {
  kode_fakultas: { required },
  nama_fakultas: { required },
  Dekan: { required },
};

const v$ = useVuelidate(rules, formData);

// define functions
// get fakultas that'll get updated
const getFakultasById = async () => {
  try {
    const id = router.currentRoute.value.params.id;
    const response = await axios.get(`http://localhost:5000/fakultas/${id}`);
    formData.value = response.data[0];
  } catch (error) {
    console.log(error);
  }
};

// submit form
const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    // console.log(formData.value);
    const id = router.currentRoute.value.params.id;
    // Make the PUT request using Axios
    axios
      .put(`http://localhost:5000/fakultas/${id}`, formData.value)
      .then(response => {
        // Handle the response if needed
        alert("Sukses! data tersimpan.");
        // console.log(response.data);
        // redirect
        router.push('/master/fakultas');
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
  } else {
    alert("Galat! data tidak tersimpan.");
  }
};

onMounted( async () => {
  await getFakultasById();
})
</script>
<template>
  <main class="bg-gray-100 p-4">
    <form 
      @submit.prevent="submitForm"
      class="mt-4"
    >
      <div class="shadow rounded overflow-hidden">
        <div class="bg-white px-4 py-5 sm:p-6">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3">
              <input name="Identitas_ID" type="text" v-model="formData.Identitas_ID" hidden/>
              <label
                htmlFor="kode_fakultas"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Fakultas
              </label>
              <input
                type="text"
                name="kode_fakultas"
                id="kode_fakultas"
                autoComplete="kode_fakultas"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.kode_fakultas"
              />
              <span
                v-for="error in v$.kode_fakultas.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="nama_fakultas"
                class="block text-sm font-medium text-gray-700"
              >
                Nama Fakultas
              </label>
              <input
                type="text"
                name="nama_fakultas"
                id="nama_fakultas"
                autoComplete="nama_fakultas"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.nama_fakultas"
              />
              <span
                v-for="error in v$.nama_fakultas.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="col-span-6">
              <label
                htmlFor="dekan"
                class="block text-sm font-medium text-gray-700"
              >
                Dekan
              </label>
              <input
                type="text"
                name="dekan"
                id="dekan"
                autoComplete="dekan"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.Dekan"
              />
              <span
                v-for="error in v$.Dekan.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
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