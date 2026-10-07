<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHero from '../components/PageHero.vue'
import {
  documentosRecortes,
  fuentesPresupuesto,
  recortesHref,
  fuenteHref,
  DIPRES_PROYECTO_2027_URL,
} from '../data/recortes-2027'
import type { DocumentoRecortes } from '../data/recortes-2027'

const route = useRoute()
const router = useRouter()

// La pestaña activa vive en la URL (?doc=...) para poder compartir un documento directo.
const activo = computed<DocumentoRecortes>(() => {
  const id = route.query.doc
  return documentosRecortes.find((d) => d.id === id) ?? documentosRecortes[0]!
})

function abrir(doc: DocumentoRecortes): void {
  router.replace({ query: { doc: doc.id } })
}

// El iframe es del mismo origen: ajustamos su alto al contenido para que se lea como parte de la página.
const frame = ref<HTMLIFrameElement | null>(null)
const alto = ref(1600)
let observer: ResizeObserver | null = null

// Se ajusta en el siguiente frame y solo si cambia, para no encadenar notificaciones del ResizeObserver.
function ajustarAlto(): void {
  requestAnimationFrame(() => {
    const h = frame.value?.contentDocument?.body?.scrollHeight
    if (h && h !== alto.value) {
      alto.value = h
    }
  })
}

function alCargar(): void {
  ajustarAlto()
  observer?.disconnect()
  const body = frame.value?.contentDocument?.body
  if (body) {
    observer = new ResizeObserver(ajustarAlto)
    observer.observe(body)
  }
}

watch(activo, () => {
  alto.value = 1600
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <PageHero
    eyebrow="Recortes 2027"
    title="Lo que el Presupuesto 2027 le quita a la Universidad de Chile"
    lead="El Proyecto de Ley de Presupuestos 2027 entró al Congreso el 30 de septiembre. Lo comparamos línea por línea con la Ley 2026 para ver qué baja, qué se mantiene y qué está en juego para la U. de Chile, sus estudiantes y su investigación."
  />

  <section class="tabs-bar">
    <div class="wrap">
      <nav class="tabs" aria-label="Documentos del análisis">
        <button
          v-for="doc in documentosRecortes"
          :key="doc.id"
          type="button"
          :class="['tab', { 'tab--on': doc.id === activo.id }]"
          :aria-current="doc.id === activo.id ? 'page' : undefined"
          @click="abrir(doc)"
        >
          {{ doc.pestana }}
        </button>
      </nav>
    </div>
  </section>

  <section v-if="activo.id === 'general'" class="fuentes">
    <div class="wrap">
      <div class="eyebrow">Fuentes oficiales</div>
      <h2 class="fuentes__title">Descarga los presupuestos que comparamos</h2>
      <div class="fuentes__grid">
        <a
          v-for="f in fuentesPresupuesto"
          :key="f.archivo"
          :href="fuenteHref(f)"
          class="fuente"
          download
        >
          <svg
            class="fuente__icon"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="11" />
            <polyline points="9 15 12 18 15 15" />
          </svg>
          <span class="fuente__body">
            <span class="fuente__titulo">{{ f.titulo }}</span>
            <span class="fuente__desc">{{ f.descripcion }}</span>
            <span class="fuente__meta">{{ f.peso }} · Descargar →</span>
          </span>
        </a>
      </div>
      <p class="fuentes__nota">
        El detalle por programa y las glosas del Proyecto 2027 están en el
        <a :href="DIPRES_PROYECTO_2027_URL" target="_blank" rel="noopener">sitio de DIPRES</a>.
      </p>
    </div>
  </section>

  <section class="doc">
    <iframe
      :key="activo.id"
      ref="frame"
      :src="recortesHref(activo)"
      :title="activo.titulo"
      :style="{ height: `${alto}px` }"
      class="doc__frame"
      loading="lazy"
      @load="alCargar"
    ></iframe>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}
.tabs-bar {
  background: var(--navy-deep);
  border-top: 1px solid rgba(239, 181, 43, 0.25);
  position: sticky;
  top: 104px;
  z-index: 10;
}
.tabs {
  display: flex;
  gap: 4px;
  overflow-x: auto;
}
.tab {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #cdd3ec;
  background: none;
  border: 0;
  border-bottom: 3px solid transparent;
  padding: 16px 14px 13px;
  cursor: pointer;
  white-space: nowrap;
}
.tab:hover {
  color: #fff;
}
.tab--on {
  color: #fff;
  border-bottom-color: var(--accent);
}
.fuentes {
  background: var(--cream-2);
  padding: 48px 0 40px;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 12px;
}
.fuentes__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.4rem, 2.4vw, 1.9rem);
  line-height: 1.1;
  letter-spacing: -0.015em;
  color: var(--navy-text);
  margin-bottom: 24px;
}
.fuentes__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
  gap: 16px;
}
.fuente {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #dddddd;
  border-left: 4px solid var(--accent);
  padding: 20px 22px;
  text-decoration: none;
  color: var(--navy-text);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.fuente:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(15, 24, 69, 0.12);
}
.fuente__icon {
  color: var(--accent2);
  flex: none;
  margin-top: 2px;
}
.fuente__body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.fuente__titulo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 17px;
}
.fuente__desc {
  font-size: 14px;
  line-height: 1.5;
  color: #3a4170;
}
.fuente__meta {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent2);
}
.fuentes__nota {
  margin-top: 16px;
  font-size: 13.5px;
  color: #5b6185;
}
.fuentes__nota a {
  color: var(--navy);
  font-weight: 600;
}
.doc {
  background: var(--cream);
}
.doc__frame {
  display: block;
  width: 100%;
  border: 0;
}
/* En teléfonos los documentos se eligen desde la barra inferior (MobileTabBar). */
@media (max-width: 860px) {
  .tabs-bar {
    display: none;
  }
  .wrap {
    padding: 0 16px;
  }
}
</style>
