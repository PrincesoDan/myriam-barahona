<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'
import { documentosRecortes } from '../data/recortes-2027'

// Barra de navegación inferior para teléfonos (estilo app). En «Recortes 2027» cambia a los documentos del análisis.
const route = useRoute()

// Íconos en línea (viewBox 0 0 24 24, trazo) para no depender de una librería.
const ICONOS: Record<string, string> = {
  inicio: 'M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
  senado: 'M3 21h18M5 21V10m4 11V10m6 11V10m4 11V10M2 10h20L12 3z',
  propuestas: 'M9 6h11M9 12h11M9 18h11M4 6h.01M4 12h.01M4 18h.01',
  recortes: 'M3 3v18h18M7 9l4 4 3-3 6 6',
  suscribete: 'M3 6h18v12H3zM3 7l9 6 9-6',
  volver: 'M15 18l-6-6 6-6',
}

const enRecortes = computed(() => route.name === 'recortes-2027')

const docActivo = computed(() => {
  const id = route.query.doc
  return documentosRecortes.find((d) => d.id === id)?.id ?? documentosRecortes[0]!.id
})

const secciones = [
  { to: '/', label: 'Inicio', icono: 'inicio' },
  { to: '/senado', label: 'Senado', icono: 'senado' },
  { to: '/propuestas', label: 'Propuestas', icono: 'propuestas' },
  { to: '/recortes-2027', label: 'Recortes 2027', icono: 'recortes' },
]
</script>

<template>
  <nav class="tabbar" aria-label="Navegación principal">
    <template v-if="enRecortes">
      <RouterLink to="/" class="tabbar__item tabbar__item--back">
        <svg class="tabbar__icon" viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.volver" /></svg>
        <span class="tabbar__label">Inicio</span>
      </RouterLink>
      <RouterLink
        v-for="doc in documentosRecortes"
        :key="doc.id"
        :to="{ path: '/recortes-2027', query: { doc: doc.id } }"
        replace
        active-class=""
        exact-active-class=""
        :class="['tabbar__item', { 'tabbar__item--on': doc.id === docActivo }]"
        :aria-current="doc.id === docActivo ? 'page' : undefined"
      >
        <span class="tabbar__num">{{ doc.numero }}</span>
        <span class="tabbar__label">{{ doc.corta }}</span>
      </RouterLink>
    </template>

    <template v-else>
      <RouterLink
        v-for="s in secciones"
        :key="s.to"
        :to="s.to"
        class="tabbar__item"
        exact-active-class="tabbar__item--on"
      >
        <svg class="tabbar__icon" viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS[s.icono]" /></svg>
        <span class="tabbar__label">{{ s.label }}</span>
      </RouterLink>
      <a :href="FORMULARIO_APOYO_URL" target="_blank" rel="noopener" class="tabbar__item tabbar__item--cta">
        <svg class="tabbar__icon" viewBox="0 0 24 24" aria-hidden="true"><path :d="ICONOS.suscribete" /></svg>
        <span class="tabbar__label">Suscríbete</span>
      </a>
    </template>
  </nav>
</template>

<style scoped>
.tabbar {
  display: none;
}
@media (max-width: 860px) {
  .tabbar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 60;
    background: rgba(11, 18, 56, 0.97);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(239, 181, 43, 0.3);
    padding: 6px 4px calc(6px + env(safe-area-inset-bottom));
  }
  .tabbar__item {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 6px 2px;
    color: #aab2d6;
    text-decoration: none;
    border-radius: 10px;
  }
  .tabbar__item--on {
    color: var(--accent);
    background: rgba(239, 181, 43, 0.1);
  }
  .tabbar__item--back {
    flex: 0 0 56px;
  }
  .tabbar__item--cta {
    color: var(--navy);
    background: var(--accent);
    margin-left: 2px;
  }
  .tabbar__icon {
    width: 22px;
    height: 22px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .tabbar__num {
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    border: 1.6px solid currentColor;
    font-family: var(--font-display);
    font-weight: 900;
    font-size: 12.5px;
    line-height: 1;
  }
  .tabbar__item--on .tabbar__num {
    background: var(--accent);
    color: var(--navy);
    border-color: var(--accent);
  }
  .tabbar__label {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 10.5px;
    letter-spacing: 0.01em;
    line-height: 1.1;
    text-align: center;
    max-width: 100%;
    /* Hasta dos líneas: «Comparativo general» o «Recortes 2027» no se cortan. */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
