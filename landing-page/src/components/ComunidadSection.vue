<template>
  <section class="comunidad">
    <div class="comunidad__inner">
      <div class="comunidad__head">
        <h2 class="comunidad__title">
          La Universidad se sostiene con trabajo, y debe decidirse con quienes la
          sostienen
        </h2>
      </div>
      <img
        src="/logo-animado-navy.webp"
        alt="Ilustración: Myriam Barahona caminando junto a trabajadoras y trabajadores de la Universidad de Chile, bajo el lema «Vamos juntos al Senado»"
        width="1400"
        height="930"
        loading="lazy"
        decoding="async"
        class="comunidad__ilustracion"
      />
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
/* El asset viene con el fondo igualado a --navy-text y los bordes difuminados
   a alfa (ver public/logo-animado-navy.webp), así que se funde con la sección
   sin marco. Si cambia el fondo de .comunidad hay que regenerarlo. */
.comunidad__ilustracion {
  display: block;
  width: 100%;
  max-width: 980px;
  height: auto;
  margin: 0 auto;
}
@media (max-width: 720px) {
  .comunidad {
    padding: 60px 24px;
  }
}
</style>
