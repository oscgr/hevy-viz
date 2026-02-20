import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const NotFound = () => import('@/views/NotFound.vue')
const FileImport = () => import('@/views/FileImport.vue')

const routes = [
  {
    name: 'Home',
    path: '/',
    redirect: { name: 'FileImport' },
  },
  {
    name: 'FileImport',
    path: '/import',
    component: FileImport,
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
] satisfies RouteRecordRaw[]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
