<script setup lang="ts">
import micImg from '../assets/image/myriam-barahona-mic.jpg'
import lentesImg from '../assets/image/myriam-lentes.jpeg'
import retratoImg from '../assets/image/Myriam-Barahona.jpg'

const galeria = [
  { src: micImg, alt: 'Myriam Barahona interviniendo', pos: 'center 28%' },
  { src: lentesImg, alt: 'Myriam Barahona', pos: 'center 22%' },
  { src: retratoImg, alt: 'Myriam Barahona', pos: 'center 18%' },
]
</script>

<template>
  <section class="comunidad">
    <div class="comunidad__inner">
      <div class="comunidad__head">
        <h2 class="comunidad__title">
          La Universidad se sostiene con trabajo, y debe decidirse con quienes la
          sostienen.
        </h2>
      </div>
      <div class="comunidad__grid">
        <img
          v-for="(img, i) in galeria"
          :key="i"
          :src="img.src"
          :alt="img.alt"
          class="comunidad__img"
          :style="{ objectPosition: img.pos }"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.comunidad {
  background: var(--navy-text);
  color: #fff;
  padding: 84px 28px;
}
.comunidad__inner {
  max-width: 1150px;
  margin: 0 auto;
}
.comunidad__head {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 48px;
}
.comunidad__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  line-height: 1.08;
  letter-spacing: -0.01em;
}
.comunidad__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.comunidad__img {
  width: 100%;
  height: 280px;
  object-fit: cover;
}
@media (max-width: 720px) {
  .comunidad {
    padding: 60px 24px;
  }
  .comunidad__grid {
    grid-template-columns: 1fr;
  }
}
</style>
