<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import { ejes } from '../data/propuestas'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'
</script>

<template>
  <PageHero
    eyebrow="Propuestas · Programa 2026–2030"
    title="Nueve ejes para una universidad que cuida y garantiza trabajo digno."
    lead="En cada eje: el problema, la situación actual verificable y el compromiso concreto que asumo. Todos comparten la misma lógica: existe un compromiso institucional escrito que todavía no se traduce plenamente en resultados y derechos efectivos."
  />

  <!-- Idea de fondo -->
  <section class="block block--cream">
    <div class="wrap wrap--narrow">
      <div class="eyebrow eyebrow--red">La idea de fondo</div>
      <p class="lede">
        Toda universidad se sostiene sobre trabajo. En una universidad pública,
        quienes trabajan <strong>no son un costo a optimizar</strong>, sino parte
        del patrimonio público que la sostiene. Defender el trabajo digno —de
        todos los tipos de vínculo— es defender el carácter público de la
        institución.
      </p>
      <p class="lede lede--quote">
        «No pedimos cosas nuevas: venimos a exigir lo que ya nos prometieron.»
      </p>
    </div>
  </section>

  <!-- Índice de los nueve ejes -->
  <section class="block block--cream2">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">Nueve ejes</div>
      <h2 class="h2">Lo que vamos a impulsar en el Senado</h2>
      <nav class="indice" aria-label="Índice de propuestas">
        <a
          v-for="eje in ejes"
          :key="eje.numero"
          class="indice__item"
          :href="`#eje-${eje.numero}`"
        >
          <span class="indice__num">{{ eje.numero }}</span>
          <span class="indice__title">{{ eje.titulo }}</span>
        </a>
      </nav>
    </div>
  </section>

  <!-- Los nueve ejes en extenso -->
  <section
    v-for="(eje, i) in ejes"
    :id="`eje-${eje.numero}`"
    :key="eje.numero"
    class="block block--eje"
    :class="i % 2 === 0 ? 'block--cream' : 'block--cream2'"
  >
    <article class="wrap eje">
      <header class="eje__head">
        <span class="eje__num">{{ eje.numero }}</span>
        <div>
          <h3 class="eje__title">{{ eje.titulo }}</h3>
          <p class="eje__bajada">{{ eje.bajada }}</p>
        </div>
      </header>

      <div class="eje__body">
        <div class="eje__col">
          <h4 class="eje__label">Situación actual</h4>
          <p v-for="(parrafo, p) in eje.situacion" :key="p" class="eje__text">
            {{ parrafo }}
          </p>
        </div>
        <div class="eje__col">
          <h4 class="eje__label">Propuesta y posicionamiento</h4>
          <ul class="eje__list">
            <li v-for="(c, k) in eje.compromisos" :key="k" class="eje__item">
              <strong v-if="c.etiqueta">{{ c.etiqueta }}. </strong>{{ c.texto }}
            </li>
          </ul>
        </div>
      </div>

      <p class="eje__frase">«{{ eje.frase }}»</p>
    </article>
  </section>

  <!-- Nota de rigor -->
  <section class="block block--navy">
    <div class="wrap wrap--narrow">
      <div class="eyebrow eyebrow--gold">Con rigor</div>
      <p class="rigor">
        El Senado no dicta leyes: dicta reglamentos, políticas y acuerdos
        internos. Por eso no prometemos sueldos que el cargo no puede fijar.
        Prometemos lo que el Senado sí puede:
        <strong>poner por escrito las reglas</strong> que hacen posible la
        estabilidad, la equidad y el cuidado —y exigir que se cumplan.
      </p>
    </div>
  </section>

  <!-- CTA -->
  <section class="block block--cta">
    <div class="wrap wrap--narrow cta">
      <h2 class="cta__title">Hechos, no solo palabras.</h2>
      <p class="cta__sub">
        Llevemos estas propuestas al lugar donde se deciden el presupuesto, la
        carrera y las reglas de la Universidad.
      </p>
      <a
        :href="FORMULARIO_APOYO_URL"
        target="_blank"
        rel="noopener"
        class="cta__btn"
      >
        Suscríbete →
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
/* Los ejes van uno tras otro: separador fino en vez de aire duplicado. */
.block--eje {
  padding: 64px 28px;
  border-top: 1px solid #e5e5e5;
  /* Compensa la nav sticky al saltar desde el índice. */
  scroll-margin-top: 104px;
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
.lede--quote {
  font-style: italic;
  color: var(--red);
}

/* Índice */
.indice {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: #dddddd;
  border: 1px solid #dddddd;
}
.indice__item {
  background: var(--cream);
  padding: 24px 22px;
  display: flex;
  align-items: baseline;
  gap: 14px;
  text-decoration: none;
  transition: background 0.15s ease;
}
.indice__item:hover {
  background: #fff;
}
.indice__num {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 26px;
  color: var(--accent);
  line-height: 1;
}
.indice__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  line-height: 1.15;
  color: var(--navy-text);
}

/* Eje */
.eje__head {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 34px;
}
.eje__num {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(38px, 5vw, 56px);
  color: var(--accent);
  line-height: 0.9;
}
.eje__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.5rem, 2.8vw, 2.1rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
  color: var(--navy-text);
  margin-bottom: 12px;
}
.eje__bajada {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.05rem, 1.6vw, 1.2rem);
  line-height: 1.45;
  color: #40477a;
  max-width: 720px;
}
.eje__body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}
.eje__label {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 11.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.eje__text {
  font-size: 14.5px;
  line-height: 1.65;
  color: #54597d;
  margin-bottom: 14px;
}
.eje__text:last-child {
  margin-bottom: 0;
}
.eje__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.eje__item {
  font-size: 14.5px;
  line-height: 1.6;
  color: #54597d;
  padding-left: 18px;
  border-left: 2px solid var(--accent);
}
.eje__item strong {
  font-family: var(--font-display);
  font-weight: 800;
  color: var(--navy-text);
}
.eje__frase {
  background: var(--navy-text);
  color: #fff;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1rem, 1.7vw, 1.2rem);
  line-height: 1.45;
  padding: 22px 26px;
  border-left: 3px solid var(--red);
}

/* Nota de rigor */
.rigor {
  font-size: clamp(1.1rem, 1.8vw, 1.35rem);
  line-height: 1.55;
  color: #cdd3ec;
}
.rigor strong {
  color: var(--accent);
  font-weight: 600;
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

@media (max-width: 980px) {
  .indice {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 780px) {
  .eje__body {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
@media (max-width: 620px) {
  .block {
    padding: 56px 24px;
  }
  .block--eje {
    padding: 48px 24px;
  }
  .indice {
    grid-template-columns: 1fr;
  }
}
</style>
