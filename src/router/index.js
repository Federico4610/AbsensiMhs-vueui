import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mahasiswa from '../views/Mahasiswa.vue'
import Absen from '../views/Absen.vue'
import MataKuliah from '../views/MataKuliah.vue'
import Jadwal from '../views/Jadwal.vue'
import KontrakMataKuliah from '../views/KontrakMataKuliah.vue'
import Semester from '../views/Semester.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/mahasiswa',
    name: 'Mahasiswa',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mahasiswa
  },
  {
    path: '/absen',
    name: 'Absen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Absen
  },
  {
    path: '/matakuliah',
    name: 'MataKuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MataKuliah
  },
  {
    path: '/jadwal',
    name: 'Jadwal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Jadwal
  },
  {
    path: '/kontrakmatakuliah',
    name: 'KontrakMataKuliah',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: KontrakMataKuliah
  },
  {
    path: '/semester',
    name: 'Semester',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Semester
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
