<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FORMULARIO_APOYO_URL, REDES } from '../data/enlaces'

// Paths de marca (viewBox 0 0 24 24), inline para no depender de un sprite
// externo ni de una librería de íconos.
const ICONOS: Record<string, string> = {
  facebook:
    'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.696 4.533-4.696 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z',
  instagram:
    'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  whatsapp:
    'M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-.607z',
}
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
            <RouterLink to="/recortes-2027">Recortes 2027</RouterLink>
            <a :href="FORMULARIO_APOYO_URL" target="_blank" rel="noopener">
              Suscríbete
            </a>
          </div>
          <div class="footer__col">
            <span class="footer__head">Síguenos</span>
            <a
              v-for="red in REDES"
              :key="red.id"
              :href="red.url"
              target="_blank"
              rel="noopener"
              class="red"
            >
              <svg
                class="red__icon"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path :d="ICONOS[red.id]" />
              </svg>
              <span class="red__handle">{{ red.handle }}</span>
              <span class="sr-only">en {{ red.nombre }}</span>
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
.red {
  display: flex;
  align-items: center;
  gap: 10px;
}
.red__icon {
  color: var(--accent);
  flex: none;
}
.red__handle {
  font-size: 14px;
}
/* Nombre de la red para lectores de pantalla: el handle solo no dice dónde. */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
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
