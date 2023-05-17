<script lang="ts">
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";

// import axios
import axios from 'axios';

interface Jurusan {
  ID: number;
  Identitas_ID: number;
  nama_jurusan: string;
  Jurusan_ID: number;
  kprodi: string;
  nama_fakultas: string;
  jenjang: string;
  Akreditasi: string;
};

export default {
  data() {
    return {
      items: [] as Jurusan[],
    };
  },
  created() {
    this.getProdi();
  },
  methods: {
    // get all Prodi
    async getProdi() {
      try {
        const response = await axios.get("http://localhost:5000/prodi");
        this.items = response.data;
        console.log(this.items);
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    PencilIcon,
    TrashIcon,
  },
};


</script>

<template>
  <main class="bg-gray-100 p-4">
    <div class="bg-white rounded shadow overflow-hidden">
      <div class="flex justify-between items-center p-4">
        <h1>Program Studi</h1>
        <router-link :to="{name: 'Prodi Add'}" class="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Tambah Data
        </router-link>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th class="px-4 py-3 font-medium rounded-tl-md">Kode Identitas</th>
              <th class="px-4 py-3 font-medium">Kode Prodi</th>
              <th class="px-4 py-3 font-medium">Nama Prodi</th>
              <th class="px-4 py-3 font-medium">Ketua Prodi</th>
              <th class="px-4 py-3 font-medium">Nama Fakultas</th>
              <th class="px-4 py-3 font-medium">Jenjang</th>
              <th class="px-4 py-3 font-medium">Akreditasi</th>
              <th class="px-4 py-3 font-medium rounded-tr-md">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="item in items" :key="item.ID"
            >
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Identitas_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Jurusan_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.nama_jurusan }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.kprodi }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.nama_fakultas }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.jenjang }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Akreditasi }}</td>
              <td class="h-[44px] flex items-center gap-1">
                <router-link :to="{name: 'Prodi Update', params:{ id: item.ID }}" class="button bg-amber-400 rounded text-black px-2 py-1 text-sm">
                  <PencilIcon class="w-4 h-4 cursor-pointer" />
                </router-link>
                <TrashIcon class="w-4 h-4 cursor-pointer" />
                <!-- <router-link :to="{name: 'Prodi Delete', params:{ id: item.ID }}" class="button bg-red-600 rounded text-black px-2 py-1 text-sm">
                </router-link> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>