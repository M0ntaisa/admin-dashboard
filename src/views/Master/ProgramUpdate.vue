<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import router from '@/router';
import axios from 'axios';

// interfaces
interface Identitas {
  ID: number;
  Identitas_ID: number;
  Nama_Identitas: string;
};

// define the ref
const formData = ref({
  Identitas_ID: '',
  Program_ID: '',
  nama_program: '',
})

const rules = {
  Program_ID: { required },
  nama_program: { required },
}

const v$ = useVuelidate(rules, formData);

// define the function
// get institusi
const getCodeIdentitas = async () => {
  try {
    const response = await axios.get<Identitas[]>("http://localhost:5000/identitas-code");
    formData.value.Identitas_ID = response.data[0].Identitas_ID.toString();
  } catch (error) {
    console.log(error);
  }
};

// get program that'll get updated
const getProgramById = async () => {
  try {
    const id = router.currentRoute.value.params.id;
    const response = await axios.get(`http://localhost:5000/program/${id}`);
    formData.value = response.data[0];
  } catch (error) {
    console.log(error);
  }
}

// submit form
const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    // console.log(formData.value);
    const id = router.currentRoute.value.params.id;
    // Make the PUT request using Axios
    axios
      .put(`http://localhost:5000/program/${id}`, formData.value)
      .then(response => {
        // Handle the response if needed
        alert("Sukses! data tersimpan.");
        // console.log(response.data);
        // redirect
        router.push('/master/program');
      })
      .catch(error => {
        // Handle the error if needed
        console.error(error);
      });
  } else {
    alert("Galat! data tidak tersimpan.");
  }
}

onMounted( async () => {
  await getCodeIdentitas();
  await getProgramById();
});

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
                v-model="formData.Program_ID"
              />
              <span
                v-for="error in v$.Program_ID.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
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
                v-model="formData.nama_program"
              />
              <span
                v-for="error in v$.nama_program.$errors" :key="error.$uid"
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