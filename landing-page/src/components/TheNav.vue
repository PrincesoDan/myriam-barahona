<script setup lang="ts"></script>

<template>
  <header class="nav">
    <div class="nav__inner">
      <a href="#top" class="brand">
        <span class="brand__mark">M</span>
        <span class="brand__text">
          <strong>MYRIAM BARAHONA</strong>
          <span class="brand__sub">Senado Universitario</span>
        </span>
      </a>
      <nav class="nav__links">
        <a href="#manifiesto" class="nav__link">Manifiesto</a>
        <a href="#ejes" class="nav__link">Compromisos</a>
        <a href="#quien" class="nav__link">Quién es Myriam</a>
        <a href="#sumarse" class="nav__cta">SUMAR MI APOYO</a>
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
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: #fff;
}
.brand__mark {
  display: inline-flex;
  width: 38px;
  height: 38px;
  border: 2px solid var(--accent);
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-weight: 900;
  color: var(--accent);
  font-size: 20px;
  line-height: 1;
}
.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}
.brand__text strong {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.02em;
}
.brand__sub {
  font-size: 10.5px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #aeb5d6;
}
.nav__links {
  display: flex;
  align-items: center;
  gap: 30px;
}
.nav__link {
  font-size: 14px;
  color: #dfe3f2;
  text-decoration: none;
  font-weight: 500;
}
.nav__link:hover {
  color: #fff;
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
/* Links de texto ocultos en el original hasta tener ancho; los mostramos en desktop */
@media (max-width: 860px) {
  .nav__link {
    display: none;
  }
}
</style>
