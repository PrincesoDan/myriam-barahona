<script setup lang="ts">
import heroImg from '../assets/image/Myriam-Barahona.jpg'
</script>

<template>
  <section id="top" class="hero">
    <div class="hero__glow"></div>
    <div class="hero__inner">
      <div class="hero__copy">
        <div class="badge">
          <span class="badge__dot"></span>
          <span>Candidatura · Senado Universitario · U. de Chile</span>
        </div>
        <h1 class="hero__title">
          La Universidad la <span>hacemos</span>.<br />
          La Universidad la <span>decidimos</span>.
        </h1>
        <p class="hero__lead">
          El trabajo que sostiene cada día a la Universidad de Chile debe estar
          en el centro de las decisiones que definen su futuro. Llevemos la voz
          de las <strong>trabajadoras y trabajadores universitarios</strong> al
          Senado.
        </p>
        <div class="hero__actions">
          <a href="#sumarse" class="btn btn--gold">Sumar mi apoyo →</a>
          <a href="#manifiesto" class="btn btn--ghost">Leer el manifiesto</a>
        </div>
      </div>
      <div class="hero__media">
        <span class="corner corner--tl"></span>
        <span class="corner corner--br"></span>
        <img :src="heroImg" alt="Myriam Barahona" class="hero__img" />
        <div class="hero__caption">
          <div class="hero__name">Myriam Barahona</div>
          <div class="hero__role">
            Trabajadora universitaria · dirigenta con trayectoria
          </div>
        </div>
      </div>
    </div>

    <div class="strip">
      <div class="strip__inner">
        <div class="strip__item">
          <div class="strip__label">EXPERIENCIA</div>
          <div class="strip__text">
            Conoce las realidades laborales y la institucionalidad
            universitaria.
          </div>
        </div>
        <div class="strip__item">
          <div class="strip__label">FIRMEZA</div>
          <div class="strip__text">
            Ha defendido posiciones difíciles y sostenido acuerdos.
          </div>
        </div>
        <div class="strip__item">
          <div class="strip__label">INCIDENCIA</div>
          <div class="strip__text">
            Convierte diagnósticos y conflictos en propuestas y normas.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: var(--navy);
  color: #fff;
  position: relative;
}
.hero__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    110% 80% at 85% 0%,
    rgba(30, 45, 117, 0.9),
    transparent 60%
  );
  pointer-events: none;
}
.hero__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 64px 28px 76px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 56px;
  align-items: center;
  position: relative;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(239, 181, 43, 0.45);
  border-radius: 2px;
  padding: 7px 14px;
  margin-bottom: 30px;
  font-size: 11.5px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #e7d9a8;
  font-weight: 600;
}
.badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
}
.hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.6rem, 5.4vw, 4.7rem);
  line-height: 0.98;
  letter-spacing: -0.02em;
  margin-bottom: 26px;
}
.hero__title span {
  color: var(--accent);
}
.hero__lead {
  font-size: clamp(1.05rem, 1.5vw, 1.3rem);
  line-height: 1.55;
  color: #cdd3ec;
  max-width: 520px;
  margin-bottom: 34px;
}
.hero__lead strong {
  color: #fff;
  font-weight: 600;
}
.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: var(--font-display);
  border-radius: 2px;
  font-size: 15px;
}
.btn--gold {
  background: var(--accent);
  color: var(--navy);
  font-weight: 800;
  padding: 15px 28px;
}
.btn--ghost {
  background: transparent;
  color: #fff;
  font-weight: 700;
  padding: 15px 26px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.hero__media {
  position: relative;
}
.corner {
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 1;
}
.corner--tl {
  top: -14px;
  left: -14px;
  border-top: 3px solid var(--accent);
  border-left: 3px solid var(--accent);
}
.corner--br {
  bottom: -14px;
  right: -14px;
  border-bottom: 3px solid var(--red);
  border-right: 3px solid var(--red);
}
.hero__img {
  width: 100%;
  height: 520px;
  object-fit: cover;
  object-position: center 22%;
  filter: saturate(1.02);
}
.hero__caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(transparent, rgba(15, 24, 69, 0.92));
  padding: 54px 24px 20px;
}
.hero__name {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 20px;
  color: #fff;
}
.hero__role {
  font-size: 13px;
  color: #e7d9a8;
  letter-spacing: 0.04em;
}
.strip {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.02);
  position: relative;
}
.strip__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.strip__item {
  padding: 22px 24px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
}
.strip__item:first-child {
  padding-left: 0;
}
.strip__item:last-child {
  border-right: none;
  padding-right: 0;
}
.strip__label {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--accent);
  margin-bottom: 4px;
}
.strip__text {
  font-size: 13.5px;
  color: #b6bcdb;
  line-height: 1.4;
}

@media (max-width: 880px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 44px 24px 56px;
  }
  .strip__inner {
    grid-template-columns: 1fr;
  }
  .strip__item,
  .strip__item:first-child,
  .strip__item:last-child {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 18px 0;
  }
  .strip__item:last-child {
    border-bottom: none;
  }
}
</style>
