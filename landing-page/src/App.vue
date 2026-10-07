<script setup lang="ts">
import TheNav from './components/TheNav.vue'
import TheFooter from './components/TheFooter.vue'
import MobileTabBar from './components/MobileTabBar.vue'
</script>

<template>
  <TheNav />
  <main>
    <RouterView />
  </main>
  <TheFooter />
  <MobileTabBar />
</template>
