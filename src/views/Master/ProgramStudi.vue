<script>
// import axios
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
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
};


</script>

<template>
  <main class="bg-gray-100 p-4">
    <div class="bg-white rounded shadow overflow-hidden">
      <div class="flex justify-between items-center p-4">
        <h1>Users</h1>
        <button class="bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Add User
        </button>
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
              <th class="px-4 py-3 font-medium rounded-tr-md"></th>
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
                <PencilIcon class="w-4 h-4 cursor-pointer" />
                <TrashIcon class="w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>