<script setup lang="ts"></script>

<template>
  <section id="manifiesto" class="manifiesto">
    <div class="manifiesto__inner">
      <div class="eyebrow">Nuestra mirada</div>
      <p class="manifiesto__quote">
        La Universidad de Chile no existe solo en sus aulas, laboratorios o
        publicaciones. Existe también en el trabajo cotidiano de quienes abren
        espacios, sostienen procesos, cuidan comunidades y resguardan la memoria
        institucional.
        <span>Si entre todos y todas construimos la Chile, todos y todas decidamos en ella.</span>
      </p>
      <div class="manifiesto__sign">
        <div class="manifiesto__rule"></div>
        <div class="manifiesto__name">
          Myriam Barahona <span>— al Senado Universitario</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.manifiesto {
  background: var(--cream);
  padding: 96px 28px;
}
.manifiesto__inner {
  max-width: 920px;
  margin: 0 auto;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 28px;
}
.manifiesto__quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 400;
  font-size: clamp(1.7rem, 3.4vw, 2.85rem);
  line-height: 1.28;
  color: #1a2150;
  letter-spacing: -0.01em;
}
.manifiesto__quote span {
  color: var(--red);
  font-style: normal;
  font-weight: 500;
}
.manifiesto__sign {
  margin-top: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.manifiesto__rule {
  width: 46px;
  height: 2px;
  background: #1a2150;
}
.manifiesto__name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  color: #1a2150;
}
.manifiesto__name span {
  font-weight: 400;
  color: #6b7099;
}
@media (max-width: 880px) {
  .manifiesto {
    padding: 64px 24px;
  }
}
</style>
