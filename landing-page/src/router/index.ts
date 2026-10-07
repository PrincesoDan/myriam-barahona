import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/senado',
    name: 'senado',
    component: () => import('../views/SenadoView.vue'),
  },
  {
    path: '/propuestas',
    name: 'propuestas',
    component: () => import('../views/PropuestasView.vue'),
  },
  // La sección se llamaba "Trabajo digno": mantenemos la URL antigua viva.
  { path: '/trabajo-digno', redirect: '/propuestas' },
  {
    path: '/recortes-2027',
    name: 'recortes-2027',
    component: () => import('../views/Recortes2027View.vue'),
  },
  // La sección «La U que viene» fue reemplazada por «Recortes 2027»: mantenemos la URL antigua viva.
  { path: '/universidad-que-viene', redirect: '/recortes-2027' },
  // Cualquier ruta desconocida vuelve al Home.
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  // Al navegar entre páginas volvemos arriba; respetamos anclas (#sumarse) del Home.
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})
