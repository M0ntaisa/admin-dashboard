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
    this.getAkademik();
  },
  methods: {
    // get all Akademik
    async getAkademik() {
      try {
        const response = await axios.get("http://localhost:5000/akademik");
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
        <h1>Akademik</h1>
        <router-link :to="{name: 'Akademik Add'}" class="button bg-indigo-600 rounded text-white px-4 py-2 text-sm">
          Add Akademik
        </router-link>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th class="px-4 py-3 font-medium rounded-tl-md">Name</th>
              <th class="px-4 py-3 font-medium">Username</th>
              <th class="px-4 py-3 font-medium">Email</th>
              <th class="px-4 py-3 font-medium">Status</th>
              <th class="px-4 py-3 font-medium">Telepon</th>
              <th class="px-4 py-3 font-medium">Keterangan</th>
              <th class="px-4 py-3 font-medium rounded-tr-md"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="item in items" :key="item.ID"
            >
              <td class="px-4 py-3 whitespace-nowrap">{{ item.nama_lengkap }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.username }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.email }}</td>
              <td class="px-4 py-3 whitespace-nowrap text-xs font-medium">
                <span
                  class="bg-green-100 text-green-600 px-2 py-0.5 rounded-full"
                  v-if="item.aktif === 'Y'"
                >
                  Active
                </span>
                <span
                  class="bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full"
                  v-else
                >
                  InActive
                </span>
              </td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.telepon }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.keterangan }}</td>
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