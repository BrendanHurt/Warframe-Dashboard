<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
import { RouterLink } from 'vue-router'

<template>
  <header>
    <nav>
      <RouterLink to="/">Foundry</RouterLink>
      <RouterLink to="/Collection">Collection</RouterLink>
      <RouterLink to="/Events">Events</RouterLink>
      <RouterLink to="/Resources">Resources</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
