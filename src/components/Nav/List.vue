<script setup lang="ts">
import {
  HomeIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BuildingLibraryIcon
} from "@heroicons/vue/24/outline";
import NavItem from "@/components/Nav/Item.vue"


const navs = [
  {
    title: "DASHBOARDS",
    items: [
      {
        path: "/home",
        name: "Home",
        icon: HomeIcon,
      },
      {
        name: "Akademik",
        icon: AcademicCapIcon,
        child: [
          {
            name: "Kalender Akademik",
            path: "/akademik/kalender-akademik",
          },
          {
            name: "Penjadwalan Kuliah",
            path: "/akademik/penjadwalan-kuliah",
          },
          {
            name: "Registrasi Ulang Mahasiswa",
            path: "/akademik/re-regis-mhs",
          },
          {
            name: "KRS Mahasiswa",
            path: "/akademik/krs-mhs",
          },
          {
            name: "Nilai Mahasiswa",
            path: "/akademik/nilai-mhs",
          },
          {
            name: "KHS Mahasiswa",
            path: "/akademik/khs-mhs",
          },
          {
            name: "Transkrip Nilai Mahasiswa",
            path: "/akademik/transkrip-mhs",
          },
          {
            name: "Absensi Mahasiswa",
            path: "/akademik/absensi-mhs",
          },
          {
            name: "ABsensi Dosen",
            path: "/akademik/absensi-dosen",
          },
          {
            name: "Pengumuman",
            path: "/akademik/pengumuman",
          },
          {
            name: "Range PMB",
            path: "/akademik/range-pmb",
          },
          {
            name: "Export Nilai",
            path: "/akademik/export-nilai",
          },
          {
            name: "Cetak Kartu Ujian Mahasiswa",
            path: "/akademik/cetak-kartu-ujian-mhs",
          },
        ]
      },
      {
        name: "Master",
        icon: BuildingLibraryIcon,
        child: [
          {
            name: "Identitas Institusi",
            path: "/master/identitas-institusi",
          },
          {
            name: "Program Studi",
            path: "/master/prodi",
          },
          {
            name: "Program",
            path: "/master/program",
          },
          {
            name: "Fakultas",
            path: "/master/fakultas",
          },
          {
            name: "Kampus",
            path: "/master/kampus",
          },
          {
            name: "Ruangan",
            path: "/master/ruangan",
          },
          {
            name: "Matakuliah",
            path: "/master/matakuliah",
          },
          {
            name: "Dosen",
            path: "/master/dosen",
          },
          {
            name: "Mahasiswa",
            path: "/master/mahasiswa",
          },
          {
            name: "Range Nilai",
            path: "/master/range-nilai",
          },
          {
            name: "Data Nilai",
            path: "/master/data-nilai",
          },
        ]
      },
      {
        name: "Admin",
        icon: WrenchScrewdriverIcon,
        child: [
          {
            name: "Administrator",
            path: "/admin/administrator",
          },
          {
            name: "Akademik",
            path: "/admin/akademik",
          },
          {
            name: "Hak Modul",
            path: "/admin/hak-modul",
          },
        ]
      },
    ],
  },
];
</script>

<template>
  <nav class="mt-4">
    <ul class="flex flex-col gap-2 text-white">
      <li v-for="item in navs">
        <div class="text-sm text-gray-400 my-2 ml-2">{{ item.title }}</div>
        <ul>
          <li v-for="nav in item.items">
           <NavItem :navItem="nav" />
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
