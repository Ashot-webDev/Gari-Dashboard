<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
  },
  name: String,
});

const emit = defineEmits(["update:modelValue"]);

const radioButtons = [
  { label: "Yes", value: true, id: props.name },
  { label: "No", value: false, id: props.name },
];

const selected = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    selected.value = newValue;
  }
);

const emitChange = () => {
  emit("update:modelValue", selected.value);
};
</script>

<template>
  <span class="radioBtnBox">
    <span
      class="radioBtns"
      v-for="(option, index) in radioButtons"
      :key="index"
    >
      <input
        type="radio"
        :name="option.id"
        class="radioInput"
        v-model="selected"
        :value="option.value"
        @change="emitChange"
        :id="option.id"
      />
      <span>{{ option.label }}</span>
    </span>
  </span>
</template>

<style scoped>
.radioBtnBox {
  width: 200px;
  display: flex;
  gap: 60px;
  align-items: center;
}
.radioBtns {
  display: flex;
  align-items: center;
}
input[type="radio"] {
  appearance: none;
  width: 24px;
  height: 24px;
  border: none;
  border-radius: 6px; /* Square shape */
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #f3f6f9;
}
input[type="radio"]:active {
  transform: scale(0.9);
}
input[type="radio"]:checked {
  background-color: #3699ff;
}
input[type="radio"]:checked::before {
  position: absolute;
  top: 0;
  left: 0;
  color: white !important;
  content: "\00A0\2713\00A0" !important;
  padding: 2px;
}
@media only screen and (max-width: 890px) {
  .radioBtnBox {
    width: auto;
    margin: 15px 0 0 0;
  }
}
</style>
