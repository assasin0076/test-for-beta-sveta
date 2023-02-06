<template>
  <div class="home-page">
    <search-input />
    <transition-group tag="ul" class="home-content-container" name="list">
      <items-list-item
        v-for="place in placesStore.places"
        :key="place.place_id"
        :place="place"
      />
    </transition-group>
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

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(-20rem);
  }

  .list-leave-active {
    position: absolute;
  }

  .home-content-container {
    width: 100%;
  }
}
</style>
