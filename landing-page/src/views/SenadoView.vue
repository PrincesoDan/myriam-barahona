<script setup lang="ts">
import PageHero from '../components/PageHero.vue'
import {
  composicion,
  funcionamiento,
  siPuede,
  noPuede,
  herramientas,
  historia,
} from '../data/senado'
import { documentos, documentoHref } from '../data/documentos'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'
</script>

<template>
  <PageHero
    eyebrow="Primera parte · El Senado Universitario"
    title="Qué es, cómo funciona, qué puede hacer y qué no."
    lead="El Senado Universitario es el órgano colegiado encargado de ejercer la función normativa de la Universidad (Estatuto, Art. 24). Su tarea fundamental es establecer las políticas y estrategias de desarrollo institucional, junto con los objetivos y metas que conduzcan a cumplirlas."
  />

  <!-- Un órgano normativo y triestamental -->
  <section class="block block--cream">
    <div class="wrap wrap--narrow">
      <div class="eyebrow eyebrow--red">Un órgano normativo y triestamental</div>
      <p class="lede">
        Es el <strong>único órgano de gobierno triestamental</strong> de la
        Universidad de Chile: académicos, estudiantes y funcionarios participan
        del gobierno de la institución. Lo preside el Rector o Rectora y lo
        integran treinta y seis miembros.
      </p>
      <p class="lede">
        Junto al Rector y al Consejo Universitario, es uno de los tres
        organismos superiores de la Universidad.
      </p>
    </div>
  </section>

  <!-- Composición -->
  <section class="block block--cream2">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">Composición · 36 miembros</div>
      <h2 class="h2">Quiénes lo integran</h2>
      <div class="table">
        <div class="table__row table__row--head">
          <span>Estamento</span>
          <span>Escaños</span>
          <span>Duración del mandato</span>
        </div>
        <div
          v-for="c in composicion"
          :key="c.estamento"
          class="table__row"
          :class="{ 'table__row--hl': c.destacado }"
        >
          <span class="table__estamento">{{ c.estamento }}</span>
          <span class="table__escanos">{{ c.escanos }}</span>
          <span class="table__mandato">{{ c.mandato }}</span>
        </div>
      </div>
      <p class="note">
        La cifra habla por sí sola: el estamento que sostiene la operación
        cotidiana de la Universidad concentra el
        <strong>5,5 % de la representación</strong> en su órgano normativo. Por
        eso cada propuesta de este programa considera esa condición minoritaria
        y la necesidad permanente de dialogar, construir acuerdos y formar
        mayorías con los demás estamentos.
      </p>
    </div>
  </section>

  <!-- Cómo funciona en la práctica -->
  <section class="block block--cream">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">Cómo funciona en la práctica</div>
      <h2 class="h2">La mecánica del órgano</h2>
      <div class="func">
        <article v-for="b in funcionamiento" :key="b.titulo" class="func__item">
          <h3 class="func__title">{{ b.titulo }}</h3>
          <p v-for="(p, i) in b.parrafos" :key="i" class="func__text">
            {{ p }}
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- Qué puede y qué no -->
  <section class="block block--cream2">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">Alcances y límites</div>
      <h2 class="h2">Qué puede hacer el Senado y qué no</h2>
      <p class="sub">
        Distinguir estas atribuciones con precisión permite presentar un
        programa responsable, claro y comprometido con resultados posibles.
      </p>
      <div class="limites">
        <div class="limites__col limites__col--si">
          <h3 class="limites__head">Sí puede</h3>
          <ul class="limites__list">
            <li v-for="item in siPuede" :key="item">{{ item }}</li>
          </ul>
        </div>
        <div class="limites__col limites__col--no">
          <h3 class="limites__head">No puede</h3>
          <ul class="limites__list">
            <li v-for="item in noPuede" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Herramientas del cargo -->
  <section class="block block--cream">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">Las herramientas concretas de una senadora</div>
      <h2 class="h2">Las palancas que se pueden accionar</h2>
      <div class="tools">
        <div class="tools__row tools__row--head">
          <span>Palanca</span>
          <span>Base normativa</span>
          <span>Uso</span>
        </div>
        <div v-for="h in herramientas" :key="h.palanca" class="tools__row">
          <span class="tools__palanca">{{ h.palanca }}</span>
          <span class="tools__base">{{ h.base }}</span>
          <span class="tools__uso">{{ h.uso }}</span>
        </div>
      </div>
      <p class="note">
        A esto se suman derechos del cargo que este programa se compromete a
        usar plenamente: dedicación mínima garantizada de doce horas semanales
        (Art. 11 h), acceso a toda la información oficial de la Universidad
        (Art. 11 e), derecho a proponer temas para la tabla (Art. 11 g) y
        derecho a dejar constancia en acta del voto disidente y sus fundamentos
        (Art. 37).
      </p>
    </div>
  </section>

  <!-- Historia -->
  <section class="block block--navy">
    <div class="wrap wrap--narrow">
      <div class="eyebrow eyebrow--gold">De dónde viene</div>
      <h2 class="h2 h2--light">Nacido de la democratización universitaria</h2>
      <ol class="timeline">
        <li v-for="h in historia" :key="h.anio" class="timeline__item">
          <span class="timeline__year">{{ h.anio }}</span>
          <span class="timeline__text">{{ h.hecho }}</span>
        </li>
      </ol>
    </div>
  </section>

  <!-- Descargas -->
  <section id="descargas" class="block block--cream2">
    <div class="wrap">
      <div class="eyebrow eyebrow--red">Documentos</div>
      <h2 class="h2">Descarga los documentos oficiales</h2>
      <p class="sub">
        La normativa que rige al Senado y a la Universidad, en un solo lugar.
        Léela, compártela, exige que se cumpla.
      </p>
      <div class="docs">
        <a
          v-for="doc in documentos"
          :key="doc.archivo"
          :href="documentoHref(doc)"
          download
          class="doc"
        >
          <div class="doc__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </div>
          <div class="doc__body">
            <h3 class="doc__title">{{ doc.titulo }}</h3>
            <p class="doc__desc">{{ doc.descripcion }}</p>
            <span class="doc__action">Descargar PDF →</span>
          </div>
        </a>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="block block--cta">
    <div class="wrap wrap--narrow cta">
      <h2 class="cta__title">
        Ahora que sabes qué decide el Senado, decidamos quién se sienta ahí.
      </h2>
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
  margin-bottom: 36px;
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
.sub {
  font-size: 16px;
  line-height: 1.6;
  color: #54597d;
  max-width: 620px;
  margin: -18px 0 34px;
}
/* Tabla de composición */
.table {
  border: 1px solid #dcd3bf;
  background: #dcd3bf;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.table__row {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr 1.6fr;
  gap: 16px;
  align-items: center;
  background: var(--cream);
  padding: 16px 22px;
}
.table__row--head {
  background: var(--navy-text);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.table__row--hl {
  background: linear-gradient(90deg, rgba(239, 181, 43, 0.18), rgba(250, 247, 240, 0)),
    var(--cream);
  border-left: 3px solid var(--accent);
}
.table__estamento {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--navy-text);
}
.table__escanos {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 22px;
  color: var(--accent2);
}
.table__mandato {
  font-size: 13.5px;
  color: #6b7099;
}
.note {
  margin-top: 26px;
  font-size: 15.5px;
  line-height: 1.6;
  color: #454a72;
  max-width: 640px;
}
.note strong {
  color: var(--red);
  font-weight: 700;
}
/* Cómo funciona */
.func {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #dcd3bf;
  border: 1px solid #dcd3bf;
}
.func__item {
  background: var(--cream);
  padding: 30px 28px;
}
.func__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 18px;
  color: var(--navy-text);
  line-height: 1.15;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--accent);
}
.func__text {
  font-size: 14.5px;
  line-height: 1.65;
  color: #54597d;
  margin-bottom: 12px;
}
.func__text:last-child {
  margin-bottom: 0;
}
/* Sí puede / No puede */
.limites {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: #dcd3bf;
  border: 1px solid #dcd3bf;
}
.limites__col {
  background: var(--cream);
  padding: 0 0 28px;
}
.limites__head {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #fff;
  padding: 15px 26px;
  margin-bottom: 22px;
}
.limites__col--si .limites__head {
  background: var(--navy-text);
}
.limites__col--no .limites__head {
  background: #6b7099;
}
.limites__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 0 26px;
}
.limites__list li {
  font-size: 14.5px;
  line-height: 1.5;
  color: #54597d;
  padding-left: 16px;
  border-left: 2px solid var(--accent);
}
.limites__col--no .limites__list li {
  border-left-color: #d8cdb2;
}
/* Herramientas */
.tools {
  border: 1px solid #dcd3bf;
  background: #dcd3bf;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.tools__row {
  display: grid;
  grid-template-columns: 1fr 1fr 1.4fr;
  gap: 16px;
  align-items: baseline;
  background: var(--cream);
  padding: 16px 22px;
}
.tools__row--head {
  background: var(--navy-text);
  color: #fff;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.tools__palanca {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 15px;
  color: var(--navy-text);
}
.tools__base {
  font-size: 13.5px;
  color: var(--accent2);
  font-weight: 600;
}
.tools__uso {
  font-size: 14px;
  line-height: 1.5;
  color: #54597d;
}
/* Timeline */
.timeline {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
.timeline__item {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 20px;
  align-items: baseline;
  background: var(--navy);
  padding: 20px 24px;
}
.timeline__year {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 22px;
  color: var(--accent);
}
.timeline__text {
  font-size: 15px;
  line-height: 1.6;
  color: #cdd3ec;
}
/* Descargas */
.docs {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}
.doc {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #e3dbc8;
  padding: 24px 26px;
  text-decoration: none;
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.doc:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}
.doc__icon {
  flex-shrink: 0;
  width: 46px;
  height: 46px;
  border-radius: 3px;
  background: var(--navy-text);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
}
.doc__title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 17px;
  color: var(--navy-text);
  margin-bottom: 6px;
}
.doc__desc {
  font-size: 14px;
  line-height: 1.55;
  color: #6b7099;
  margin-bottom: 12px;
}
.doc__action {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13.5px;
  color: var(--red);
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
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--navy);
  margin-bottom: 28px;
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
  .func {
    grid-template-columns: 1fr;
  }
  .tools__row {
    grid-template-columns: 1fr 1fr;
  }
  .tools__uso {
    grid-column: 1 / -1;
  }
  .tools__row--head span:last-child {
    display: none;
  }
}
@media (max-width: 620px) {
  .block {
    padding: 56px 24px;
  }
  .limites {
    grid-template-columns: 1fr;
  }
  .table__row {
    grid-template-columns: 1fr 0.5fr;
  }
  .table__mandato {
    display: none;
  }
  .timeline__item {
    grid-template-columns: 70px 1fr;
    gap: 14px;
  }
  .doc {
    flex-direction: column;
    gap: 14px;
  }
}
</style>
