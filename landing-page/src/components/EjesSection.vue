<script setup lang="ts">
import { ejes } from '../data/ejes'
</script>

<template>
  <section id="ejes" class="ejes">
    <div class="ejes__inner">
      <div class="ejes__head">
        <div class="eyebrow">Cinco compromisos</div>
        <h2 class="ejes__title">
          El trabajo universitario al centro de las decisiones.
        </h2>
      </div>
      <div class="ejes__grid">
        <article v-for="eje in ejes" :key="eje.numero" class="card">
          <span class="card__num">{{ eje.numero }}</span>
          <h3 class="card__title">{{ eje.titulo }}</h3>
          <p class="card__text">{{ eje.descripcion }}</p>
        </article>
        <article class="card card--cta">
          <p class="card__quote">
            «No queremos solo ser escuchados: queremos incidir.»
          </p>
          <a href="#sumarse" class="card__link">Súmate a la campaña →</a>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ejes {
  background: var(--cream-2);
  padding: 96px 28px;
}
.ejes__inner {
  max-width: 1200px;
  margin: 0 auto;
}
.ejes__head {
  max-width: 760px;
  margin-bottom: 54px;
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
.ejes__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 3.8vw, 3.1rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--navy-text);
}
.ejes__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #dcd3bf;
  border: 1px solid #dcd3bf;
}
.card {
  background: var(--cream);
  padding: 34px 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 230px;
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
  color: var(--navy-text);
  line-height: 1.1;
}
.card__text {
  font-size: 14.5px;
  line-height: 1.55;
  color: #54597d;
}
.card--cta {
  background: var(--navy-text);
  justify-content: center;
  gap: 16px;
}
.card__quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 21px;
  line-height: 1.3;
  color: #fff;
}
.card__link {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
}
@media (max-width: 980px) {
  .ejes__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 620px) {
  .ejes {
    padding: 64px 24px;
  }
  .ejes__grid {
    grid-template-columns: 1fr;
  }
}
</style>
