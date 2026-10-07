<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { FORMULARIO_APOYO_URL } from '../data/enlaces'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/senado', label: '¿Qué es el Senado?' },
  { to: '/propuestas', label: 'Propuestas' },
  { to: '/recortes-2027', label: 'Recortes 2027' },
]

</script>

<template>
  <header class="nav">
    <div class="nav__inner">
      <RouterLink to="/" class="brand" aria-label="Myriam Barahona · Inicio">
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
          SUSCRÍBETE
        </a>
      </nav>

    </div>

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

/* En teléfonos la navegación vive en la barra inferior (MobileTabBar): arriba queda solo el logo. */
@media (max-width: 860px) {
  .nav__links {
    display: none;
  }
  .nav__inner {
    height: 64px;
    justify-content: center;
  }
  .brand__logo {
    height: 46px;
  }
}
</style>
