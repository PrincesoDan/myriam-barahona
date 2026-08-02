<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__top">
        <div class="footer__brand">
          <img
            src="/logo-myriam-transparent.png"
            alt="Myriam Barahona · Vamos juntos al Senado"
            class="footer__logo"
          />
          <p class="footer__sub">
            Myriam Barahona, candidata al Senado Universitario de la Universidad
            de Chile.
          </p>
        </div>
        <div class="footer__cols">
          <div class="footer__col">
            <span class="footer__head">Conoce</span>
            <RouterLink to="/senado">¿Qué es el Senado?</RouterLink>
            <RouterLink to="/propuestas">Propuestas</RouterLink>
            <RouterLink to="/universidad-que-viene">La U que viene</RouterLink>
            <a :href="FORMULARIO_APOYO_URL" target="_blank" rel="noopener">
              Sumar apoyo
            </a>
          </div>
          <div class="footer__col">
            <span class="footer__head">Con el respaldo de</span>
            <div class="fena">
              <!-- TODO: reemplazar por el logo real de FENAFUCH cuando esté disponible -->
              <div class="fena__mark">F</div>
              <div class="fena__text">
                Federación Nacional de<br />Funcionarios U. de Chile<br />
                <span>FENAFUCH · 1997</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--navy-deep);
  color: #fff;
  padding: 64px 28px 36px;
}
.footer__inner {
  max-width: 1150px;
  margin: 0 auto;
}
.footer__top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 36px;
}
.footer__brand {
  max-width: 440px;
}
.footer__logo {
  width: 100%;
  max-width: 320px;
  height: auto;
  display: block;
  margin-bottom: 18px;
}
.footer__sub {
  font-size: 13.5px;
  color: #9aa1c6;
  line-height: 1.5;
}
.footer__cols {
  display: flex;
  gap: 54px;
  flex-wrap: wrap;
}
.footer__col {
  display: flex;
  flex-direction: column;
  gap: 11px;
}
.footer__head {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6b73a0;
  margin-bottom: 3px;
}
.footer__col a {
  font-size: 14px;
  color: #cdd2ea;
  text-decoration: none;
}
.footer__col a:hover {
  color: #fff;
}
.fena {
  display: flex;
  align-items: center;
  gap: 12px;
}
.fena__mark {
  width: 52px;
  height: 52px;
  border-radius: 3px;
  border: 2px solid var(--accent);
  color: var(--accent);
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fena__text {
  font-size: 13px;
  color: #9aa1c6;
  line-height: 1.4;
}
.fena__text span {
  color: #6b73a0;
}
</style>
