import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "@/views/LayoutView.vue";
import HomeView from "@/views/HomeView.vue";
import KalenderAkademik from "@/views/Akademik/KalenderAkademik.vue";
import IdentitasInstitute from "@/views/Master/IdentitasInstitute.vue";
import ProgramStudi from "@/views/Master/ProgramStudi.vue";
import Program from "@/views/Master/Program.vue";
import Administrator from "@/views/Admin/Administrator.vue";
import Akademik from "@/views/Admin/Akademik.vue";
import HakModul from "@/views/Admin/HakModul.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: LayoutView,
      children: [
        {
          path: "",
          component: HomeView,
        },
        {
          path: "home",
          name: "Home",
          component: HomeView,
        },
        {
          path: "akademik/kalender-akademik",
          component: KalenderAkademik,
        },
        {
          path: "Master/identitas-institusi",
          component: IdentitasInstitute,
        },
        {
          path: "Master/prodi",
          component: ProgramStudi,
        },
        {
          path: "Master/program",
          component: Program,
        },
        {
          path: "Admin/administrator",
          component: Administrator,
        },
        {
          path: "Admin/administrator/add",
          name: "Admin Add",
          component: Administrator,
        },
        {
          path: "Admin/akademik",
          component: Akademik,
        },
        {
          path: "Admin/hak-modul",
          component: HakModul,
        },
      ],
    },
    {
      path: "/sign-in",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/SignInView.vue"),
    },
    {
      path: "/sign-up",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/SignUpView.vue"),
    },
    {
      path: "/404",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/NotFountView.vue"),
    },
    {
      path: "/500",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/ServerErrorView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/NotFountView.vue"),
    },
  ],
});

export default router;
