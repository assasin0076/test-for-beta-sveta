<template>
  <teleport to="body">
    <div @click.self="close" class="item-modal-wrapper">
      <div class="item-modal-container"></div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import type { TPlace } from "@/types/TPlace";
type TProps = {
  place: TPlace | null;
  modelValue: boolean;
};
defineProps<TProps>();
const emit = defineEmits(["update:modelValue"]);

const close = () => {
  emit("update:modelValue", false);
};
</script>

<style lang="scss">
.item-modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(128, 128, 128, 0.42);
  display: flex;
  align-items: center;
  justify-content: center;
  .item-modal-container {
    max-width: 800px;
    width: 100%;
    min-height: 400px;
    background-color: white;
    border-radius: 8px;
  }
}
</style>
