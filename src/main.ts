import { createApp } from "vue";
import { createPinia } from "pinia";
import VueApexCharts from "vue3-apexcharts";
import ApexCharts from "apexcharts";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueApexCharts);
app.config.globalProperties.$apexcharts = ApexCharts;

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $apexcharts: typeof ApexCharts;
  }
}

app.mount("#app");

app.config.errorHandler = (err, vm, info) => {
  console.error('Unhandled Vue error:', err);
  console.error('Vue component:', vm);
  console.error('Error info:', info);
};