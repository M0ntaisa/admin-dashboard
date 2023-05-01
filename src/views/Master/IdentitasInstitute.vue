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
};

</script>

<template>
  <main class="bg-gray-100 p-4">
    <form action="#" method="POST">
      <div class="shadow rounded overflow-hidden">
        <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
          
        </div>
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
         
        </div>
      </div>
    </form>

    <form action="#" method="POST" class="mt-4">
      <div class="shadow rounded overflow-hidden">
        
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          
        </div>
      </div>
    </form>
    <form action="#" method="POST" class="mt-4">
      <div class="shadow rounded overflow-hidden">
        
        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
          
        </div>
      </div>
    </form>
  </main>
</template>