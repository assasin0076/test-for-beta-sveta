<template>
  <div class="home-page">
    <item-modal
      v-if="isModalVisible"
      v-model="isModalVisible"
      :place="selectedPlace"
    />
    <search-input />
    <div class="home-content-container">
      <ItemsListItem
        v-for="place in placesStore.places"
        @click="selectPlace(place.place_id)"
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
import ItemModal from "@/components/ItemModal.vue";
import { ref } from "vue";
import type { TPlace } from "@/types/TPlace";

const placesStore = usePlacesStore();
const isModalVisible = ref(false);
const selectedPlace = ref<TPlace | null>(null);
const selectPlace = (place_id: number) => {
  selectedPlace.value = placesStore.places.filter(
    (place) => place.place_id === place_id
  )[0];
  isModalVisible.value = true;
  console.log(selectedPlace.value);
};
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
