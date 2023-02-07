<template>
  <li class="home-content-item">{{ place.display_name }}</li>
</template>

<script setup lang="ts">
import type { TPlace } from "@/types/TPlace";
import type { PropType } from "vue";

defineProps({ place: { type: Object as PropType<TPlace>, required: true } });
</script>

<style lang="scss">
.home-content-item {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
