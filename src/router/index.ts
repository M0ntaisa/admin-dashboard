import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "@/views/LayoutView.vue";
import HomeView from "@/views/HomeView.vue";
import KalenderAkademik from "@/views/Akademik/KalenderAkademik.vue";
import IdentitasInstitute from "@/views/Master/IdentitasInstitute.vue";
import IdentitasUpdate from "@/views/Master/IdentitasUpdate.vue";
import ProgramStudi from "@/views/Master/ProgramStudi.vue";
import ProgramStudiAdd from "@/views/Master/ProgramStudiAdd.vue";
import ProgramStudiUpdate from "@/views/Master/ProgramStudiUpdate.vue";
import Program from "@/views/Master/Program.vue";
import Administrator from "@/views/Admin/Administrator.vue";
import AdminAdd from "@/views/Admin/AdminAdd.vue";
import AdminUpdate from "@/views/Admin/AdminUpdate.vue";
import Akademik from "@/views/Admin/Akademik.vue";
import AkademikAdd from "@/views/Admin/AkademikAdd.vue";
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
          name: "Kalender Akademik",
          component: KalenderAkademik,
        },
        {
          path: "master/identitas-institusi",
          name: "Identitas Institusi",
          component: IdentitasInstitute,
        },
        {
          path: "master/identitas-institusi/update/:id",
          name: "Identitas Update",
          component: IdentitasUpdate,
        },
        {
          path: "master/prodi",
          name: "Program Studi",
          component: ProgramStudi,
        },
        {
          path: "master/prodi-add",
          name: "Prodi Add",
          component: ProgramStudiAdd,
        },
        {
          path: "master/prodi-update/:id",
          name: "Prodi Update",
          component: ProgramStudiUpdate,
        },
        {
          path: "master/program",
          name: "Program",
          component: Program,
        },
        {
          path: "admin/administrator",
          name: "Administrator",
          component: Administrator,
        },
        {
          path: "admin/administrator/add",
          name: "Admin Add",
          component: AdminAdd,
        },
        {
          path: "admin/administrator/update",
          name: "Admin Update",
          component: AdminUpdate,
        },
        {
          path: "admin/akademik",
          name: "Akademik",
          component: Akademik,
        },
        {
          path: "admin/akademik/add",
          name: "Akademik Add",
          component: AkademikAdd,
        },
        {
          path: "admin/hak-modul",
          name: "Hak Modul",
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
