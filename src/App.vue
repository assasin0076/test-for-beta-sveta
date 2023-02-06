<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<template>
  <div class="page-wrapper">
    <div class="page-container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
.page-wrapper {
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;

  .page-container {
    width: 1440px;
  }
}
</style>
