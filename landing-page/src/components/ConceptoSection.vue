<script setup lang="ts"></script>

<template>
  <section class="concepto">
    <div class="concepto__inner">
      <div class="concepto__head">
        <div class="eyebrow">El cambio que proponemos</div>
        <h2 class="concepto__title">
          No somos solo personal.<br />
          Somos <span>trabajadoras y trabajadores universitarios</span>.
        </h2>
      </div>
      <div class="concepto__body">
        <p class="concepto__lead">
          El trabajo universitario no acompaña a la Universidad: la constituye.
          Hablar de trabajadoras y trabajadores —y no solo de «funcionarios» o
          «personal de colaboración»— es afirmar dignidad, saber práctico y
          pertenencia a una comunidad pública.
        </p>
        <div class="terms">
          <div class="term">
            <span class="term__old">«Funcionario»</span>
            <span class="term__note">suena a contrato y burocracia</span>
          </div>
          <div class="term">
            <span class="term__old">«Personal de colaboración»</span>
            <span class="term__note">suena a apoyo secundario</span>
          </div>
          <div class="term term--hl">
            <span class="term__new">Trabajadora y trabajador universitario</span>
            <span class="term__note term__note--hl">
              identidad, orgullo, centralidad
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.concepto {
  background: var(--navy);
  color: #fff;
  padding: 90px 28px;
}
.concepto__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 56px;
  align-items: start;
}
.eyebrow {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 12.5px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 22px;
}
.concepto__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.9rem, 3.4vw, 2.9rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
}
.concepto__title span {
  color: var(--accent);
}
.concepto__body {
  padding-top: 6px;
}
.concepto__lead {
  font-size: 17px;
  line-height: 1.6;
  color: #cdd3ec;
  margin-bottom: 34px;
}
.terms {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.term {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 18px;
  align-items: center;
  background: var(--navy);
  padding: 18px 22px;
}
.term__old {
  color: #8b92ba;
  text-decoration: line-through;
  font-size: 16px;
}
.term__note {
  font-size: 12px;
  color: #8b92ba;
  text-align: right;
}
.term--hl {
  background: linear-gradient(
      90deg,
      rgba(239, 181, 43, 0.16),
      rgba(15, 24, 69, 0)
    ),
    var(--navy);
  border-left: 3px solid var(--accent);
}
.term__new {
  color: #fff;
  font-weight: 700;
  font-size: 16.5px;
  font-family: var(--font-display);
}
.term__note--hl {
  color: var(--accent);
  font-weight: 600;
}
@media (max-width: 880px) {
  .concepto {
    padding: 64px 24px;
  }
  .concepto__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
</style>
