<template>
  <input
    ref="searchInput"
    class="search-input"
    @input="inputHandle"
    v-model="searchValue"
    placeholder="Input a place"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePlacesStore } from "@/stores/placesStore";
import { useRoute, useRouter } from "vue-router";

const { getPlaces } = usePlacesStore();
const router = useRouter();
const route = useRoute();

const searchInput = ref<HTMLInputElement | null>(null);
const searchValue = ref<string>("");
let timeout: ReturnType<typeof setTimeout>;

onMounted(() => {
  if (searchInput.value) searchInput.value.focus();
  const searchQuery = route.query.search
    ? String(route.query.search)
    : route.query.search;
  if (!searchQuery) return;
  searchValue.value = searchQuery;
  getPlaces(searchValue.value);
});

const inputHandle = () => {
  router.push({ query: { search: searchValue.value } });
  clearTimeout(timeout);
  timeout = setTimeout(() => getPlaces(searchValue.value), 200);
};
</script>

<style lang="scss">
.search-input {
  margin-bottom: 32px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 6px;

  &::placeholder {
    color: gray;
  }
}
</style>
