<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/senado', label: '¿Qué es el Senado?' },
  { to: '/propuestas', label: 'Propuestas' },
  { to: '/universidad-que-viene', label: 'La U que viene' },
]

const menuOpen = ref(false)

function closeMenu(): void {
  menuOpen.value = false
}
</script>

<template>
  <header class="nav">
    <div class="nav__inner">
      <RouterLink to="/" class="brand" @click="closeMenu" aria-label="Myriam Barahona · Inicio">
        <img
          src="/logo-myriam-transparent.png"
          alt="Myriam Barahona · Vamos juntos al Senado"
          class="brand__logo"
        />
      </RouterLink>

      <nav class="nav__links">
        <RouterLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav__link"
        >
          {{ link.label }}
        </RouterLink>
        <a
          :href="FORMULARIO_APOYO_URL"
          target="_blank"
          rel="noopener"
          class="nav__cta"
        >
          SUMAR MI APOYO
        </a>
      </nav>

      <button
        type="button"
        class="nav__toggle"
        :aria-expanded="menuOpen"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <span :class="['nav__burger', { 'nav__burger--open': menuOpen }]"></span>
      </button>
    </div>

    <nav v-if="menuOpen" class="nav__mobile">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav__mobile-link"
        @click="closeMenu"
      >
        {{ link.label }}
      </RouterLink>
      <a
        :href="FORMULARIO_APOYO_URL"
        target="_blank"
        rel="noopener"
        class="nav__mobile-cta"
        @click="closeMenu"
      >
        SUMAR MI APOYO
      </a>
    </nav>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(15, 24, 69, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(239, 181, 43, 0.25);
}
.nav__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}
.brand__logo {
  height: 74px;
  width: auto;
  display: block;
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 28px;
}
.nav__link {
  font-size: 14px;
  color: #dfe3f2;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 0;
  border-bottom: 2px solid transparent;
}
.nav__link:hover {
  color: #fff;
}
/* Pestaña activa: subrayado dorado. exact-active evita marcar "Inicio" en subrutas. */
.nav__link.router-link-exact-active {
  color: #fff;
  border-bottom-color: var(--accent);
}
.nav__cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: var(--navy);
  text-decoration: none;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13.5px;
  letter-spacing: 0.02em;
  padding: 11px 20px;
  border-radius: 2px;
}
.nav__toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  position: relative;
}
.nav__burger,
.nav__burger::before,
.nav__burger::after {
  content: '';
  position: absolute;
  left: 8px;
  width: 24px;
  height: 2px;
  background: #fff;
  transition: transform 0.2s ease, opacity 0.2s ease;
}
.nav__burger {
  top: 19px;
}
.nav__burger::before {
  top: -7px;
}
.nav__burger::after {
  top: 7px;
}
.nav__burger--open {
  background: transparent;
}
.nav__burger--open::before {
  transform: translateY(7px) rotate(45deg);
}
.nav__burger--open::after {
  transform: translateY(-7px) rotate(-45deg);
}
.nav__mobile {
  display: none;
}

@media (max-width: 860px) {
  .nav__links {
    display: none;
  }
  .nav__toggle {
    display: block;
  }
  .nav__mobile {
    display: flex;
    flex-direction: column;
    padding: 8px 28px 20px;
    border-top: 1px solid rgba(239, 181, 43, 0.18);
  }
  .nav__mobile-link {
    font-size: 15px;
    color: #dfe3f2;
    text-decoration: none;
    font-weight: 500;
    padding: 13px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
  .nav__mobile-link.router-link-exact-active {
    color: var(--accent);
    font-weight: 700;
  }
  .nav__mobile-cta {
    margin-top: 16px;
    text-align: center;
    background: var(--accent);
    color: var(--navy);
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 800;
    font-size: 14px;
    letter-spacing: 0.02em;
    padding: 13px 20px;
    border-radius: 2px;
  }
}
</style>
