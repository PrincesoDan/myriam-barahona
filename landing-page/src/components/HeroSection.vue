<script setup lang="ts">
import { FORMULARIO_APOYO_URL, PROGRAMA_PDF_URL } from '../data/enlaces'
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__banner">
      <div class="hero__inner">
        <div class="hero__copy">
          <div class="badge">
            <span class="badge__dot"></span>
            <span>Candidatura · Senado Universitario · U. de Chile</span>
          </div>
          <h1 class="hero__title">
            Construyamos <span>juntos</span><br />
            la universidad.
          </h1>
          <p class="hero__claim">Hechos, no solo palabras.</p>
          <p class="hero__lead">
            El trabajo que sostiene cada día a la Universidad de Chile debe estar
            en el centro de las decisiones que definen su futuro. Llevemos la voz
            de las <strong>trabajadoras y trabajadores universitarios</strong> al
            Senado.
          </p>
          <div class="hero__actions">
            <a
              :href="FORMULARIO_APOYO_URL"
              target="_blank"
              rel="noopener"
              class="btn btn--gold"
            >
              Suscríbete →
            </a>
            <a
              :href="PROGRAMA_PDF_URL"
              target="_blank"
              rel="noopener"
              download
              class="btn btn--ghost"
            >
              Leer el programa
            </a>
          </div>
        </div>

        <figure class="hero__media">
          <img
            src="/foto-campana-hero.jpg"
            alt="Myriam Barahona, candidata al Senado Universitario de la U. de Chile"
            width="2000"
            height="1333"
            fetchpriority="high"
          />
        </figure>
      </div>
    </div>

    <div class="strip">
      <div class="strip__inner">
        <div class="strip__item">
          <div class="strip__label">HECHOS</div>
          <div class="strip__text">
            Una trayectoria de conquistas concretas: beca de hijo/a, vivienda y
            reajuste 2022.
          </div>
        </div>
        <div class="strip__item">
          <div class="strip__label">COMPROMISO</div>
          <div class="strip__text">
            Ha defendido posiciones difíciles y transformado conflictos en
            acuerdos firmados.
          </div>
        </div>
        <div class="strip__item">
          <div class="strip__label">INCIDENCIA</div>
          <div class="strip__text">
            Lleva esa fuerza al lugar donde se deciden presupuesto, carrera y
            reglas: el Senado.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--navy);
  color: #fff;
  position: relative;
}
.hero__banner {
  position: relative;
  display: flex;
  align-items: center;
  min-height: clamp(560px, 78vh, 760px);
}
/* Dos columnas: el texto manda, la foto acompaña al costado derecho. */
.hero__inner {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 28px;
  width: 100%;
  /* Es flex item de .hero__banner: sin esto no baja de su min-content. */
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
}
.hero__copy {
  max-width: 600px;
}
.hero__media {
  margin: 0;
  position: relative;
}
/* Filete dorado desplazado: da profundidad sin recargar el bloque. */
.hero__media::before {
  content: '';
  position: absolute;
  inset: 18px -18px -18px 18px;
  border: 1px solid rgba(239, 181, 43, 0.5);
  border-radius: 2px;
  pointer-events: none;
}
/* Encuadre cuadrado: la foto original es 3:2, así que el recorte solo cede
   ancho y conserva a Myriam completa, de la cabeza a las manos. */
.hero__media img {
  position: relative;
  display: block;
  width: 100%;
  /* Neutraliza el height del atributo HTML para que mande el aspect-ratio. */
  height: auto;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  border-radius: 2px;
  box-shadow: 0 24px 60px rgba(6, 11, 38, 0.55);
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(239, 181, 43, 0.45);
  border-radius: 2px;
  padding: 7px 14px;
  margin-bottom: 30px;
  font-size: 11.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e7d9a8;
  font-weight: 600;
  background: rgba(15, 24, 69, 0.35);
  backdrop-filter: blur(2px);
}
.badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
}
.hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.6rem, 5.4vw, 4.7rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin-bottom: 26px;
}
.hero__title span {
  color: var(--accent);
}
.hero__claim {
  display: inline-block;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(1rem, 1.6vw, 1.25rem);
  letter-spacing: 0.02em;
  color: var(--navy);
  background: var(--accent);
  padding: 6px 14px;
  border-radius: 2px;
  margin-bottom: 26px;
}
.hero__lead {
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  line-height: 1.55;
  color: #d7dcf1;
  max-width: 520px;
  margin-bottom: 34px;
}
.hero__lead strong {
  color: #fff;
  font-weight: 600;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-display);
  border-radius: 2px;
  font-size: 15px;
}
.btn--gold {
  background: var(--accent);
  color: var(--navy);
  font-weight: 800;
  padding: 15px 28px;
}
.btn--ghost {
  background: rgba(15, 24, 69, 0.25);
  color: #fff;
  font-weight: 700;
  padding: 15px 26px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(2px);
}
.strip {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  position: relative;
}
.strip__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.strip__item {
  padding: 22px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.strip__item:first-child {
  padding-left: 0;
}
.strip__item:last-child {
  border-right: none;
  padding-right: 0;
}
.strip__label {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 4px;
}
.strip__text {
  font-size: 13.5px;
  color: #b6bcdb;
  line-height: 1.4;
}

@media (max-width: 880px) {
  .hero__banner {
    min-height: 0;
  }
  .hero__inner {
    padding: 44px 24px 40px;
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
  }
  .hero__copy {
    max-width: none;
  }
  /* En móvil la foto pasa a ser una banda horizontal bajo el texto. */
  .hero__media img {
    aspect-ratio: 3 / 2;
    object-position: center 24%;
  }
  /* Offset menor: debe caber dentro de los 24px de padding del contenedor. */
  .hero__media::before {
    inset: 12px -12px -12px 12px;
  }
  .strip__inner {
    grid-template-columns: 1fr;
  }
  .strip__item,
  .strip__item:first-child,
  .strip__item:last-child {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 18px 0;
  }
  .strip__item:last-child {
    border-bottom: none;
  }
}
</style>
