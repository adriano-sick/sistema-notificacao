<template>
  <v-container class="bg-deep-orange sheet">
    <app-bar></app-bar>
  </v-container>
</template>

<script setup lang="ts">
import AppBar from '@/components/layout/AppBar.vue';
</script>

<style scoped>
@media (min-width: 1024px) {
  .sheet {
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
  }
}
</style>
