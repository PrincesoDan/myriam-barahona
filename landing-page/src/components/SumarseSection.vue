<script setup lang="ts">
import { FORMULARIO_APOYO_URL } from '../data/enlaces'

// Lo que pide el Google Form, para que quien entra sepa a qué se compromete
// antes de salir del sitio.
const campos = [
  'Tu nombre y apellido',
  'Tu unidad o facultad',
  'Un correo de contacto',
]

function share() {
  const txt = encodeURIComponent(
    'Construyamos juntos la universidad. Hechos, no solo palabras. — Myriam Barahona al Senado Universitario de la U. de Chile. Súmate.',
  )
  window.open('https://wa.me/?text=' + txt, '_blank', 'noopener')
}
</script>

<template>
  <section id="sumarse" class="sumarse">
    <div class="sumarse__inner">
      <div class="sumarse__copy">
        <div class="eyebrow">Súmate</div>
        <h2 class="sumarse__title">
          Con experiencia y firmeza, llevemos el trabajo universitario al Senado.
        </h2>
        <p class="sumarse__lead">
          Deja tu apoyo en el formulario o comparte la campaña con tu unidad.
          Cada voz suma para que las trabajadoras y trabajadores universitarios
          incidan en el futuro de la Chile.
        </p>
        <button type="button" class="wa" @click="share">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607z"
            />
          </svg>
          Compartir por WhatsApp
        </button>
      </div>

      <div class="card">
        <h3 class="card__title">Sumar mi apoyo</h3>
        <p class="card__sub">
          El registro se hace en un formulario de Google y toma menos de un
          minuto.
        </p>

        <ul class="card__list">
          <li v-for="campo in campos" :key="campo" class="card__item">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {{ campo }}
          </li>
        </ul>

        <a
          :href="FORMULARIO_APOYO_URL"
          target="_blank"
          rel="noopener"
          class="card__cta"
        >
          Completar el formulario →
        </a>
        <p class="card__note">Se abre en Google Forms, en una pestaña nueva.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sumarse {
  background: var(--cream-2);
  padding: 96px 28px;
}
.sumarse__inner {
  max-width: 1080px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 18px;
}
.sumarse__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--navy-text);
  margin-bottom: 20px;
}
.sumarse__lead {
  font-size: 16px;
  line-height: 1.6;
  color: #54597d;
  margin-bottom: 26px;
}
.wa {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  background: #1f8a40;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15px;
  padding: 15px 26px;
  border-radius: 2px;
}
.card {
  background: #fff;
  border: 1px solid #e3dbc8;
  padding: 38px 34px;
  box-shadow: 0 18px 50px -28px rgba(17, 24, 74, 0.5);
}
.card__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 21px;
  color: var(--navy-text);
  margin-bottom: 6px;
}
.card__sub {
  font-size: 13.5px;
  line-height: 1.5;
  color: #7d82a3;
  margin-bottom: 24px;
}
.card__list {
  list-style: none;
  margin: 0 0 28px;
  padding: 0;
  border-top: 1px solid #efe8d8;
}
.card__item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid #efe8d8;
  font-size: 15px;
  color: var(--navy-text);
}
.card__item svg {
  color: var(--red);
  flex: none;
}
.card__cta {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  background: var(--accent);
  color: var(--navy);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15.5px;
  padding: 15px;
  border-radius: 2px;
}
.card__note {
  margin-top: 12px;
  text-align: center;
  font-size: 12.5px;
  color: #aeb0c0;
}
@media (max-width: 880px) {
  .sumarse {
    padding: 64px 24px;
  }
  .sumarse__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}
</style>
