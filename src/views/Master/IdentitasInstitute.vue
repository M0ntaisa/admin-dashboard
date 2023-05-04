<script>
// import axios
import axios from 'axios';
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";

export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.getIdentitas();
  },
  methods: {
    // get all products
    async getIdentitas() {
      try {
        const response = await axios.get("http://localhost:5000/identitas");
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
        <h1>Identitas Institusi</h1>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead class="bg-slate-50 border-b border-slate-200">
            <tr class="text-slate-900 text-sm text-left">
              <th class="px-4 py-3 font-medium rounded-tl-md">Kode Institusi</th>
              <th class="px-4 py-3 font-medium">Kode Hukum</th>
              <th class="px-4 py-3 font-medium">Nama Institusi</th>
              <th class="px-4 py-3 font-medium">Alamat</th>
              <th class="px-4 py-3 font-medium">Kota</th>
              <th class="px-4 py-3 font-medium">Kode Pos</th>
              <th class="px-4 py-3 font-medium">Telepon</th>
              <th class="px-4 py-3 font-medium">Email</th>
              <th class="px-4 py-3 font-medium">Website</th>
              <th class="px-4 py-3 font-medium rounded-tr-md">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="odd:bg-white even:bg-slate-50 text-sm text-slate-900"
              v-for="item in items" :key="item.ID"
            >
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Identitas_ID }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.KodeHukum }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Nama_Identitas }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Alamat1 }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Kota }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.KodePos }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Telepon }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Email }}</td>
              <td class="px-4 py-3 whitespace-nowrap">{{ item.Website }}</td>
              <td class="h-[44px] flex items-center gap-1">
                <router-link :to="{name: 'Identitas Update'}" class="button bg-amber-400 rounded text-black px-2 py-1 text-sm">
                  <PencilIcon class="w-4 h-4 cursor-pointer" />
                </router-link>
                
                <TrashIcon class="w-4 h-4 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>