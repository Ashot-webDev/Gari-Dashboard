<script setup>
import { ref, watch } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";

import { defineProps, defineEmits } from "vue";

const props = defineProps({
  visible: Boolean,
  title: String,
  content: String,
});

const emit = defineEmits(["update:visible", "confirm"]);

// Local state for dialog visibility
const dialogVisible = ref(props.visible);

// Watch for changes in the prop and update local state accordingly
watch(
  () => props.visible,
  (newVal) => {
    dialogVisible.value = newVal;
  }
);

const closeDialog = () => {
  dialogVisible.value = false;
  emit("update:visible", false);
};

const confirmAction = () => {
  emit("confirm");
  closeDialog();
};
</script>

<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    :header="props.title"
    :style="{ width: '25rem' }"
    :closable="false"
  >
    <span class="text-surface-500 dark:text-surface-400 block mb-8">
      {{ props.content }}
    </span>
    <div
      style="display: flex; justify-content: flex-end; gap: 20px; border: none"
    >
      <Button
        type="button"
        label="Cancel"
        severity="secondary"
        @click="closeDialog"
      ></Button>
      <Button
        type="button"
        label="Delete"
        style="background: red; border: none"
        @click="confirmAction"
      ></Button>
    </div>
  </Dialog>
</template>

<style scoped>
.p-dialog-header-actions {
  display: none !important;
  opacity: 0 !important;
}
</style>
