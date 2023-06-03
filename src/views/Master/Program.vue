<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";
import axios from 'axios';

interface Program {
  ID: number;
  Identitas_ID: number;
  Program_ID: string;
  nama_program: string;
}

// reactive ref for items array
const items = ref<Program[]>([]);

// fetch the items when the component mounts
onMounted( async () => {
  await getProgram();
})

// get all program
const getProgram = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/program`);
    items.value = response.data;
  } catch (error) {
    console.log(error);
  }
}

// handle item deletion
const handleDelete = async (id: number) => {
  const confirmed = window.confirm('Apakah anda yakin ingin menghapus item ini?');
  if (confirmed) {
    try {
      await axios.delete(`http://localhost:5000/program/${id}`);

      alert(`Item telah dihapus!`);

      // You may want to fetch the data again after successful deletion to update the list
      await getProgram();
    } catch (error) {
      // Handle any errors that occurred during deletion
      console.error('Error deleting item:', error);
      // Show an error message or handle the error in any way you prefer
      alert('Galat saat menghapus, coba lagi nanti.');
    }
  }
}

// import components for template
const components = {
  PencilIcon,
  TrashIcon,
}
</script>

<template>
  <main class="bg-gray-100 p-4">
    <div class="bg-white rounded shadow overflow-hidden">
      <div class="flex justify-between items-center p-4">
        <h1>Programs</h1>
        <router-link :to="{name: 'Program Add'}" class="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Tambah Data
        </router-link>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th class="px-4 py-3 font-medium rounded-tl-md">Kode Identitas</th>
              <th class="px-4 py-3 font-medium">Kode Program</th>
              <th class="px-4 py-3 font-medium">Nama Program</th>
              <th class="px-4 py-3 font-medium rounded-tr-md"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="item in items" :key="item.ID"
            >
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Identitas_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Program_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.nama_program }}</td>
              <td class="h-[44px] flex items-center gap-1">
                <router-link :to="{name: 'Program Update', params:{ id: item.ID }}" class="button bg-amber-400 rounded text-black px-2 py-1 text-sm">
                  <PencilIcon class="w-4 h-4 cursor-pointer" />
                </router-link>
                <button class="button bg-red-600 rounded text-white px-2 py-1 text-sm" @click="handleDelete(item.ID)">
                  <TrashIcon class="w-4 h-4 cursor-pointer" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>