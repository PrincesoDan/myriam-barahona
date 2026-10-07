<script setup lang="ts">
// Encabezado navy reutilizable para las páginas internas del sitio.
defineProps<{
  eyebrow: string
  title: string
  lead: string
  // Línea opcional bajo la bajada (por ejemplo, fecha de última actualización).
  note?: string
}>()
</script>

<template>
  <header class="page-hero">
    <div class="page-hero__glow"></div>
    <div class="page-hero__inner">
      <div class="eyebrow">{{ eyebrow }}</div>
      <h1 class="page-hero__title">{{ title }}</h1>
      <p class="page-hero__lead">{{ lead }}</p>
      <p v-if="note" class="page-hero__note">{{ note }}</p>
    </div>
  </header>
</template>

<style scoped>
.page-hero {
  background: var(--navy);
  color: #fff;
  position: relative;
  overflow: hidden;
}
.page-hero__glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    110% 80% at 85% 0%,
    rgba(30, 45, 117, 0.9),
    transparent 60%
  );
  pointer-events: none;
}
.page-hero__inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 84px 28px 72px;
  position: relative;
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
.page-hero__title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2.3rem, 4.6vw, 3.7rem);
  line-height: 1.0;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}
.page-hero__lead {
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  line-height: 1.6;
  color: #cdd3ec;
  max-width: 640px;
}
.page-hero__note {
  margin-top: 20px;
  padding-left: 12px;
  border-left: 3px solid var(--accent);
  font-size: 14px;
  line-height: 1.5;
  color: #b9c0e0;
  max-width: 640px;
}
@media (max-width: 720px) {
  .page-hero__inner {
    padding: 56px 24px 48px;
  }
}
</style>
