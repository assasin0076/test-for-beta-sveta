<template>
  <div class="home-page">
    <search-input />
    <div class="home-content-container">
      <div v-for="place in placesStore.places" :key="place.place_id" class="home-content-item">{{ place.display_name }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "../components/SearchInput.vue"
import { usePlacesStore } from "@/stores/placesStore"
const placesStore = usePlacesStore()
</script>

<style lang="scss">
.home-page {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-content-container {
    width: 100%;
    .home-content-item {
      width: 100%;
      padding: 12px;
      border: 1px solid black;
      border-radius: 4px;

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
}
</style>
