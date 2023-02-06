<template>
  <div class="home-page">
    <search-input />
    <div class="home-content-container">
      <ItemsListItem
        v-for="place in placesStore.places"
        :key="place.place_id"
        :place="place"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from "@/components/SearchInput.vue";
import { usePlacesStore } from "@/stores/placesStore";
import ItemsListItem from "@/components/ItemsListItem.vue";
const placesStore = usePlacesStore();
</script>

<style lang="scss">
.home-page {
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-content-container {
    width: 100%;
  }
}
</style>
