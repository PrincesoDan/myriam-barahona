<script setup lang="ts">
import {
  INSTRUCTIVO_VOTACION_IMG,
  PARTICIPA_UCHILE_URL,
} from '../data/enlaces'

// Resumen del instructivo de la FENAFUCH, en texto: la infografía es una
// imagen y no todo el mundo puede leerla (lector de pantalla, conexión lenta).
const pasos = [
  'Entra a participa.uchile.cl durante la jornada de votación.',
  'Ingresa con tu Cuenta UChile o tu Cuenta Pasaporte.',
  'Escoge tu candidatura. También puedes votar blanco o nulo.',
  'Revisa tu selección y envía el voto: queda encriptado y es secreto.',
  'Al terminar puedes descargar el certificado de votación.',
]
</script>

<template>
  <section id="como-votar" class="votar">
    <div class="votar__inner">
      <div class="votar__copy">
        <div class="eyebrow">Cómo votar</div>
        <h2 class="votar__title">La votación es online, y toma un par de minutos.</h2>
        <p class="votar__lead">
          Las elecciones del Senado Universitario se votan por internet, a
          través de la plataforma Participa UChile. Este es el paso a paso
          publicado por la FENAFUCH.
        </p>

        <ol class="pasos">
          <li v-for="(paso, i) in pasos" :key="paso" class="paso">
            <span class="paso__n">{{ i + 1 }}</span>
            <span class="paso__txt">{{ paso }}</span>
          </li>
        </ol>

        <a
          :href="PARTICIPA_UCHILE_URL"
          target="_blank"
          rel="noopener"
          class="votar__cta"
        >
          Ir a participa.uchile.cl →
        </a>
      </div>

      <figure class="votar__figura">
        <a :href="INSTRUCTIVO_VOTACION_IMG" target="_blank" rel="noopener">
          <img
            :src="INSTRUCTIVO_VOTACION_IMG"
            alt="Infografía de la FENAFUCH «Procedimiento de votación»: los seis pasos para sufragar en Participa UChile, desde el ingreso con la Cuenta UChile hasta la descarga del certificado de voto."
            width="1024"
            height="1536"
            loading="lazy"
            decoding="async"
            class="votar__img"
          />
        </a>
        <figcaption class="votar__pie">
          Instructivo oficial de la FENAFUCH. Haz clic para verlo en grande.
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.votar {
  background: var(--navy-text);
  color: #fff;
  padding: 96px 28px;
}
.votar__inner {
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
  color: var(--accent);
  margin-bottom: 18px;
}
.votar__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.9rem, 3.4vw, 2.7rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
}
.votar__lead {
  font-size: 16px;
  line-height: 1.6;
  color: #cdd3ec;
  margin-bottom: 28px;
}
.pasos {
  list-style: none;
  margin: 0 0 30px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.paso {
  display: grid;
  grid-template-columns: 34px 1fr;
  gap: 16px;
  align-items: baseline;
  background: var(--navy-text);
  padding: 14px 18px;
}
.paso__n {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 20px;
  color: var(--accent);
}
.paso__txt {
  font-size: 15px;
  line-height: 1.55;
  color: #cdd3ec;
}
.votar__cta {
  display: inline-flex;
  align-items: center;
  background: var(--accent);
  color: var(--navy);
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15.5px;
  padding: 15px 28px;
  border-radius: 2px;
}
.votar__figura {
  margin: 0;
}
.votar__img {
  width: 100%;
  height: auto;
  border: 1px solid rgba(255, 255, 255, 0.16);
}
.votar__pie {
  margin-top: 12px;
  font-size: 12.5px;
  line-height: 1.5;
  color: #8f96bd;
  text-align: center;
}
@media (max-width: 880px) {
  .votar {
    padding: 64px 24px;
  }
  .votar__inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  /* En una columna la infografía vertical se come la pantalla: se acota. */
  .votar__figura {
    max-width: 460px;
    margin: 0 auto;
  }
}
</style>
