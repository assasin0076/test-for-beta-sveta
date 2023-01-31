<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <div class="page-container">
    <RouterView />
  </div>
</template>

<style lang="scss">
.page-container {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
