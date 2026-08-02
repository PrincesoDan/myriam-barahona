<script setup lang="ts">
import { ejes } from '../data/ejes'
import { PROGRAMA_PDF_URL } from '../data/enlaces'
</script>

<template>
  <section id="programa" class="programa">
    <div class="programa__inner">
      <div class="programa__head">
        <div class="eyebrow">El programa</div>
        <h2 class="programa__title">
          Cinco compromisos para poner el trabajo universitario
          <span>al centro de las decisiones</span>.
        </h2>
      </div>

      <!-- 5 ejes + la tarjeta de descarga completan una grilla de 3×2. -->
      <div class="grid">
        <article v-for="eje in ejes" :key="eje.numero" class="card">
          <span class="card__num">{{ eje.numero }}</span>
          <h3 class="card__title">{{ eje.titulo }}</h3>
          <p class="card__text">{{ eje.descripcion }}</p>
        </article>

        <article class="card card--pdf">
          <svg
            class="card__icon"
            width="30"
            height="30"
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
          <h3 class="card__title card__title--pdf">Programa completo</h3>
          <p class="card__text card__text--pdf">
            El detalle de cada compromiso, con diagnóstico y propuestas.
          </p>
          <a
            :href="PROGRAMA_PDF_URL"
            target="_blank"
            rel="noopener"
            download
            class="card__download"
          >
            Descargar el PDF →
          </a>
          <span class="card__meta">PDF · 17 páginas</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.programa {
  background: var(--navy);
  color: #fff;
  padding: 96px 28px;
}
.programa__inner {
  max-width: 1100px;
  margin: 0 auto;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 18px;
}
.programa__head {
  max-width: 700px;
  margin-bottom: 44px;
}
.programa__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.9rem, 3.4vw, 2.9rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
}
.programa__title span {
  color: var(--accent);
}
/* Las líneas de 1px del gap hacen de separadores entre tarjetas. */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.14);
}
.card {
  background: var(--navy);
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 235px;
}
.card__num {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 34px;
  color: var(--accent);
  line-height: 1;
}
.card__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 19px;
  line-height: 1.1;
  color: #fff;
}
.card__text {
  font-size: 14.5px;
  line-height: 1.55;
  color: #b9c0e0;
}
.card--pdf {
  background: linear-gradient(
      160deg,
      rgba(239, 181, 43, 0.18),
      rgba(15, 24, 69, 0) 70%
    ),
    var(--navy);
  justify-content: center;
  gap: 12px;
}
.card__icon {
  color: var(--accent);
}
.card__title--pdf {
  font-size: 21px;
}
.card__text--pdf {
  color: #cdd3ec;
}
.card__download {
  margin-top: 6px;
  align-self: flex-start;
  background: var(--accent);
  color: var(--navy);
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15px;
  padding: 13px 22px;
  border-radius: 2px;
}
.card__meta {
  font-size: 12px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #8b92ba;
}
@media (max-width: 980px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .programa {
    padding: 64px 24px;
  }
  .programa__head {
    margin-bottom: 32px;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .card {
    min-height: 0;
  }
}
</style>
