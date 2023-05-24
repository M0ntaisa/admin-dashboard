<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

// import axios
import axios from 'axios';

// interfaces
interface Identitas {
  ID: number;
  Identitas_ID: number;
  Nama_Identitas: string;
};

interface Fakulties {
  ID: number;
  kode_fakultas: string;
  nama_fakultas: string;
};

const formData = ref({
  Identitas_ID: "- Pilih -",
  Jurusan_ID: "",
  nama_jurusan: "",
  nama_fakultas: "",
  kprodi: "",
  jenjang: "",
  Akreditasi: "",
});

const rules = {
  Identitas_ID: { required },
  Jurusan_ID: { required },
  nama_jurusan: { required },
  nama_fakultas: { required },
  kprodi: { required },
  jenjang: { required },
  Akreditasi: { required },
}

const v$ = useVuelidate(rules, formData);

const submitForm = async () => {
  const result = await v$.value.$validate();
  if (result) {
    alert("success, form submitted!");
  } else {
    alert("error, form not submitted!");
  }
}

// define the ref
const identitas = ref<Identitas[]>([]);
const fakultas = ref<Fakulties[]>([]);

// define the function
// get institusi
const getCodeIdentitas = async () => {
  try {
    const response = await axios.get<Identitas[]>("http://localhost:5000/identitas-code");
    identitas.value = response.data;
    console.log(identitas.value);
  } catch (error) {
    console.log(error);
  }
};
// get fakultas
const getCodeFakultas = async () => {
  try {
    const response = await axios.get<Fakulties[]>("http://localhost:5000/fakultas-code");
    fakultas.value = response.data;
    console.log(fakultas.value);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getCodeIdentitas();
  getCodeFakultas();
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
                v-model="formData.Identitas_ID"
              >
                <!-- <option value="0">- Pilih -</option> -->
                <option 
                  v-for="institusi in identitas" :key="institusi.ID"
                  value="{{ institusi.Identitas_ID }}"
                >
                  {{ institusi.Nama_Identitas }}
                </option>
              </select>
              <span
                v-if="formData.Identitas_ID === '0'"
                class="text-red-500 italic"
              >
                Please select an option
              </span>
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
                <option
                  v-for="fak in fakultas" :key="fak.ID" 
                  value="{{ fak.Jurusan_ID }}"
                >
                  {{ fak.nama_fakultas }}
                </option>
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
                v-model="formData.Jurusan_ID"
              />
              <span
                v-for="error in v$.Jurusan_ID.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
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
                v-model="formData.nama_jurusan"
              />
              <span
                v-for="error in v$.nama_jurusan.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
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
                v-model="formData.kprodi"
              />
              <span
                v-for="error in v$.kprodi.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
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
                v-model="formData.jenjang"
              />
              <span
                v-for="error in v$.jenjang.$errors" :key="error.$uid"
                class="text-red-500 italic"
              >
                {{ error.$message }}
              </span>
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
                v-model="formData.Akreditasi"
              />
              <span
                v-for="error in v$.Akreditasi.$errors" :key="error.$uid"
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