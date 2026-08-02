<script setup lang="ts">
import prensaImg from '../assets/image/myriam-prensa.jpg'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'

// Datos de trayectoria tomados de info/myriam-barahona-fenafuch.md
const trayectoria = [
  {
    titulo: 'Presidenta de la FENAFUCH',
    detalle:
      'Federación Nacional de Funcionarios de la U. de Chile. Electa para 2025–2027; ya encabezó el gremio en 2021–2023.',
  },
  {
    titulo: 'Seguridad y condiciones laborales',
    detalle:
      'Visibilizó el grave accidente laboral en la Facultad de Artes (2024) y la sobrecarga por falta de personal.',
  },
  {
    titulo: 'Democratización universitaria',
    detalle:
      'Reclama derecho a voz y voto de las y los funcionarios en las decisiones de la Universidad.',
  },
  {
    titulo: 'Salarios dignos',
    detalle:
      'Impulsa un sueldo mínimo que cubra las necesidades de una familia y termine con la desigualdad salarial interna.',
  },
]
</script>

<template>
  <section id="quien" class="quien">
    <div class="quien__inner">
      <div class="quien__media">
        <img :src="prensaImg" alt="Myriam Barahona ante la prensa" class="quien__img" />
        <div class="quien__tag">VOZ TRABAJADORA</div>
      </div>
      <div class="quien__copy">
        <div class="eyebrow">Quién es Myriam</div>
        <h2 class="quien__title">
          De la defensa gremial al gobierno universitario.
        </h2>
        <p class="quien__p">
          Myriam Barahona es trabajadora universitaria y dirigenta con
          trayectoria en la defensa de los derechos de las y los trabajadores de
          la Universidad de Chile. Ha aprendido a representar, negociar, sostener
          conflictos y construir acuerdos leyendo la Universidad desde abajo.
        </p>
        <p class="quien__p">
          Hoy busca llevar esa experiencia a un espacio de deliberación
          normativa y estratégica: el Senado Universitario. Una voz trabajadora
          con experiencia para transformar demandas en decisiones.
        </p>
        <ul class="tray">
          <li v-for="t in trayectoria" :key="t.titulo" class="tray__item">
            <span class="tray__title">{{ t.titulo }}</span>
            <span class="tray__detail">{{ t.detalle }}</span>
          </li>
        </ul>
        <a
          :href="FORMULARIO_APOYO_URL"
          target="_blank"
          rel="noopener"
          class="quien__cta"
        >
          Quiero apoyar a Myriam →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.quien {
  background: var(--cream);
  padding: 96px 28px;
}
.quien__inner {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 60px;
  align-items: center;
}
.quien__media {
  position: relative;
}
.quien__img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  object-position: center 20%;
}
.quien__tag {
  position: absolute;
  bottom: -1px;
  left: -1px;
  background: var(--accent);
  color: var(--navy);
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.04em;
  padding: 12px 18px;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 20px;
}
.quien__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.9rem, 3.4vw, 2.7rem);
  line-height: 1.04;
  letter-spacing: -0.02em;
  color: var(--navy-text);
  margin-bottom: 24px;
}
.quien__p {
  font-size: 16.5px;
  line-height: 1.62;
  color: #454a72;
  margin-bottom: 18px;
}
.tray {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #e3dbc8;
  border: 1px solid #e3dbc8;
  margin: 26px 0 32px;
}
.tray__item {
  background: var(--cream);
  padding: 16px 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.tray__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 14px;
  color: var(--navy-text);
}
.tray__detail {
  font-size: 13px;
  line-height: 1.5;
  color: #6b7099;
}
.quien__cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--navy-text);
  color: #fff;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 14.5px;
  padding: 14px 26px;
  border-radius: 2px;
}
@media (max-width: 880px) {
  .quien {
    padding: 64px 24px;
  }
  .quien__inner {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .tray {
    grid-template-columns: 1fr;
  }
}
</style>
