<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
import axios from 'axios';

interface Kampus {
  ID: number;
  Identitas_ID: string;
  Kampus_ID: string;
  Nama: string;
  Alamat: string;
  Kota: string;
  Telepon: string;
  Fax: string;
}

// defined ref for items
const items = ref<Kampus[]>([]);

// fetch the items
onMounted( async () => {
  await getKampus();
})

// define functions
// get all fakultas
const getKampus = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/kampus`);
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
      await axios.delete(`http://localhost:5000/kampus/${id}`);

      alert('item telah dihapus!');

      // fetch the data again after succesful deletion to update the list
      await getKampus();
    } catch (error) {
      // handle any errors that occurred during deletion
      console.error('Error deleting item:', error);
      // show an error message or handle the error with alert
      alert('Galat saat menghapus, coba lagi nanti!')
    }
  }
}

//import components to template
const components = {
  PencilIcon,
  TrashIcon,
}
</script>

<template>
  <main class="bg-gray-100 p-4">
    <div class="bg-white rounded shadow overflow-hidden">
      <div class="flex justify-between items-center p-4">
        <h1>Fakultas</h1>
        <router-link :to="{name: 'Kampus Add'}" class="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Tambah Data
        </router-link>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th class="px-4 py-3 font-medium rounded-tl-md">Kode Identitas</th>
              <th class="px-4 py-3 font-medium">Kode Kampus</th>
              <th class="px-4 py-3 font-medium">Nama Kampus</th>
              <th class="px-4 py-3 font-medium">Alamat</th>
              <th class="px-4 py-3 font-medium">Kota</th>
              <th class="px-4 py-3 font-medium">Telepon</th>
              <th class="px-4 py-3 font-medium">Fax</th>
              <th class="px-4 py-3 font-medium rounded-tr-md">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="item in items" :key="item.ID"
            >
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Identitas_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Kampus_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Nama }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Alamat }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Kota }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Telepon }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Fax }}</td>
              <td class="h-[44px] flex items-center gap-1">
                <router-link :to="{name: 'Kampus Update', params:{ id: item.ID }}" class="button bg-amber-400 rounded text-black px-2 py-1 text-sm">
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