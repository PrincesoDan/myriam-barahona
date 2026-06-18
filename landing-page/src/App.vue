<script setup lang="ts">
import TheNav from './components/TheNav.vue'
import HeroSection from './components/HeroSection.vue'
import ManifiestoSection from './components/ManifiestoSection.vue'
import ConceptoSection from './components/ConceptoSection.vue'
import EjesSection from './components/EjesSection.vue'
import QuienSection from './components/QuienSection.vue'
import ComunidadSection from './components/ComunidadSection.vue'
import SumarseSection from './components/SumarseSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNav />
  <main>
    <HeroSection />
    <ManifiestoSection />
    <ConceptoSection />
    <EjesSection />
    <QuienSection />
    <ComunidadSection />
    <SumarseSection />
  </main>
  <TheFooter />
</template>
