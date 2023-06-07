<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import router from '@/router';
import axios from 'axios';

// interface
interface Identitas {
  ID: number;
  Identitas_ID: number;
  Nama_Identitas: string;
};

// define ref
const formData = ref({
  Identitas_ID: '',
  Kampus_ID: '',
  Nama: '',
  Alamat: '',
  Kota: '',
  Telepon: '',
  Fax: '',
});

// define rules
const rules = {
  Identitas_ID: { required },
  Kampus_ID: { required },
  Nama: { required },
  Alamat: { required },
  Kota: { required },
  Telepon: { required },
  Fax: { required },
};

const v$ = useVuelidate(rules, formData);

// define functions
// get institusi
const getCodeIdentitas = async () => {
  try {
    const response = await axios.get<Identitas[]>(`http://localhost:5000/identitas-code`);
    formData.value.Identitas_ID = response.data[0].Identitas_ID.toString();
  } catch (error) {
    console.log(error);
  }
};

// submit form
const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    // console.log(formData.value);
    // post request
    axios
      .post(`http://localhost:5000/fakultas`, formData.value)
      .then(response => {
        // handle the response if needed
        // show success alert
        alert("Sukses! data tersimpan.");

        // redirect
        router.push('master/fakultas');
      })
      .catch(error => {
        // handle the error if needed
        console.error(error);
      })
  } else {
    // show alert if failed
    alert("Galat! data tidak tersimpan.");
  }
};

onMounted( async () => {
  await getCodeIdentitas();
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
                htmlFor="Kampus_ID"
                class="block text-sm font-medium text-gray-700"
              >
                Kode Kampus
              </label>
              <input
                type="text"
                name="Kampus_ID"
                id="Kampus_ID"
                autoComplete="Kampus_ID"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.Kampus_ID"
              />
              <span
                v-for="error in v$.Kampus_ID.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label
                htmlFor="Nama"
                class="block text-sm font-medium text-gray-700"
              >
                Nama Kampus
              </label>
              <input
                type="text"
                name="Nama"
                id="Nama"
                autoComplete="Nama"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.Nama"
              />
              <span
                v-for="error in v$.Nama.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
            </div>
            <div class="col-span-6">
              <label
                htmlFor="Alamat"
                class="block text-sm font-medium text-gray-700"
              >
                Alamat
              </label>
              <input
                type="text"
                name="Alamat"
                id="Alamat"
                autoComplete="Alamat"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                v-model="formData.Alamat"
              />
              <span
                v-for="error in v$.Alamat.$errors" :key="error.$uid"
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