<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import {
  audiencias,
  visiones,
  frentes,
  iniciativas,
} from '../data/universidad-que-viene'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'
</script>

<template>
  <PageHero
    eyebrow="La universidad que viene"
    title="La pregunta no es cómo usamos la IA. Es qué universidad queremos ser frente a ella."
    lead="Por primera vez, la universidad enfrenta una tecnología que no automatiza el trabajo físico, sino el cognitivo: leer, escribir, analizar, decidir. Es un cambio de época que nos incluye a todos, y exige una respuesta de toda la comunidad."
  />

  <!-- La tesis -->
  <section class="block block--cream">
    <div class="wrap wrap--narrow">
      <div class="eyebrow eyebrow--red">La tesis</div>
      <p class="lede">
        Frente a esta tecnología, la Universidad de Chile tiene dos caminos. Uno:
        usarla para <strong>hacer más con menos</strong> —automatizar, recortar,
        precarizar, vigilar—. Otro: usarla para
        <strong>liberar el trabajo intelectual</strong> y elevar la calidad de la
        comunidad, poniendo la tecnología al servicio del bien público.
      </p>
      <p class="lede">
        La diferencia entre ambos caminos no es técnica: es política y
        democrática. Y el lugar donde esa decisión debe tomarse, con los tres
        estamentos presentes, es el Senado Universitario.
      </p>
    </div>
  </section>

  <!-- A quién le hablamos -->
  <section class="block block--cream2">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">A quién le hablamos</div>
      <h2 class="h2">El cambio golpea distinto a cada quien</h2>
      <div class="aud">
        <article v-for="a in audiencias" :key="a.actor" class="aud__item">
          <h3 class="aud__actor">{{ a.actor }}</h3>
          <p class="aud__q">{{ a.pregunta }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Visiones -->
  <section class="block block--navy">
    <div class="wrap">
      <div class="eyebrow eyebrow--gold">Tres visiones</div>
      <h2 class="h2 h2--light">Cómo pensamos la universidad que viene</h2>
      <div class="visiones">
        <article v-for="v in visiones" :key="v.numero" class="vision">
          <span class="vision__num">{{ v.numero }}</span>
          <div class="vision__body">
            <h3 class="vision__title">{{ v.titulo }}</h3>
            <p class="vision__desc">{{ v.descripcion }}</p>
            <p class="vision__frase">{{ v.frase }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Frentes -->
  <section class="block block--cream">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">La agenda</div>
      <h2 class="h2">Los frentes que el Senado debe abrir</h2>
      <div class="frentes">
        <article v-for="f in frentes" :key="f.titulo" class="frente">
          <h3 class="frente__title">{{ f.titulo }}</h3>
          <p class="frente__text">{{ f.detalle }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Iniciativas -->
  <section class="block block--cream2">
    <div class="wrap wrap--narrow">
      <div class="eyebrow eyebrow--red">Iniciativas concretas</div>
      <h2 class="h2">Lo que proponemos impulsar</h2>
      <ul class="inits">
        <li v-for="(i, idx) in iniciativas" :key="idx" class="init">
          <span class="init__mark">→</span>
          <span>{{ i }}</span>
        </li>
      </ul>
    </div>
  </section>

  <!-- CTA -->
  <section class="block block--cta">
    <div class="wrap wrap--narrow cta">
      <h2 class="cta__title">Construyamos juntos la universidad.</h2>
      <p class="cta__sub">
        El futuro de la universidad no se delega. Se piensa entre todos, desde el
        Senado.
      </p>
      <a
        :href="FORMULARIO_APOYO_URL"
        target="_blank"
        rel="noopener"
        class="cta__btn"
      >
        Sumar mi apoyo →
      </a>
    </div>
  </section>
</template>

<style scoped>
.block {
  padding: 80px 28px;
}
.block--cream {
  background: var(--cream);
}
.block--cream2 {
  background: var(--cream-2);
}
.block--navy {
  background: var(--navy);
  color: #fff;
}
.wrap {
  max-width: 1100px;
  margin: 0 auto;
}
.wrap--narrow {
  max-width: 820px;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.eyebrow--red {
  color: var(--red);
}
.eyebrow--gold {
  color: var(--accent);
}
.h2 {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--navy-text);
  margin-bottom: 40px;
}
.h2--light {
  color: #fff;
}
.lede {
  font-family: var(--font-serif);
  font-size: clamp(1.15rem, 2vw, 1.5rem);
  line-height: 1.5;
  color: #1a2150;
  margin-bottom: 22px;
}
.lede strong {
  font-weight: 600;
  color: var(--red);
}
/* Audiencias */
.aud {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #dcd3bf;
  border: 1px solid #dcd3bf;
}
.aud__item {
  background: var(--cream);
  padding: 24px 24px;
}
.aud__actor {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  color: var(--navy-text);
  margin-bottom: 10px;
}
.aud__q {
  font-size: 13.5px;
  line-height: 1.55;
  color: #54597d;
}
/* Visiones */
.visiones {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.vision {
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 8px;
  background: var(--navy);
  padding: 30px 28px;
}
.vision__num {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 44px;
  color: var(--accent);
  line-height: 1;
}
.vision__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  color: #fff;
  margin-bottom: 12px;
  line-height: 1.12;
}
.vision__desc {
  font-size: 15px;
  line-height: 1.6;
  color: #cdd3ec;
  margin-bottom: 16px;
}
.vision__frase {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 16px;
  line-height: 1.4;
  color: var(--accent);
  border-left: 3px solid var(--accent);
  padding-left: 16px;
}
/* Frentes */
.frentes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #dcd3bf;
  border: 1px solid #dcd3bf;
}
.frente {
  background: var(--cream);
  padding: 26px 24px;
}
.frente__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16.5px;
  color: var(--navy-text);
  margin-bottom: 10px;
  line-height: 1.15;
}
.frente__text {
  font-size: 14px;
  line-height: 1.55;
  color: #54597d;
}
/* Iniciativas */
.inits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #dcd3bf;
  border: 1px solid #dcd3bf;
}
.init {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: #fff;
  padding: 20px 22px;
  font-size: 15.5px;
  line-height: 1.55;
  color: #363b60;
}
.init__mark {
  color: var(--red);
  font-family: var(--font-display);
  font-weight: 900;
  flex-shrink: 0;
}
/* CTA */
.block--cta {
  background: var(--accent);
}
.cta {
  text-align: center;
}
.cta__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--navy);
  margin-bottom: 14px;
}
.cta__sub {
  font-size: 16.5px;
  line-height: 1.55;
  color: #4a3d10;
  max-width: 560px;
  margin: 0 auto 28px;
}
.cta__btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--navy-text);
  color: #fff;
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15.5px;
  padding: 15px 30px;
  border-radius: 2px;
}
@media (max-width: 860px) {
  .aud,
  .frentes {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 620px) {
  .block {
    padding: 56px 24px;
  }
  .aud,
  .frentes {
    grid-template-columns: 1fr;
  }
  .vision {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}
</style>
