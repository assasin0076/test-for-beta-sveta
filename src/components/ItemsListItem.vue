<template>
  <div class="home-content-item">{{ place.display_name }}</div>
</template>

<script setup lang="ts">
import type { TPlace } from "@/types/TPlace"
import type { PropType } from "vue"

defineProps({ place: { type: Object as PropType<TPlace>, required: true } })
</script>

<style lang="scss">
.home-content-item {
  cursor: pointer;
  display: block;
  width: 100%;
  padding: 12px;
  border: 1px solid black;
  border-radius: 4px;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
