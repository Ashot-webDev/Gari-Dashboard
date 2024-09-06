<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";
import SplitButton from "primevue/splitbutton";
import { useToast } from "primevue/usetoast";
import Toast from "primevue/toast";

const emit = defineEmits(["saveBoat"]);

const props = defineProps({
  boat: {
    type: Object,
    default: () => ({}),
  },
});

const rules = {
  title: { required },
  description: { required },
  keywords: { required },
};

const data = ref({
  title: props.boat.title || "",
  description: props.boat.description || "",
  keywords: props.boat.keywords || "",
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      title: newValue.title || "",
      description: newValue.description || "",
      keywords: newValue.keywords || "",
    };
  },
  { deep: true }
);

const v$ = useVuelidate(rules, data);

const toast = useToast();

const saveBoatOptions = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    emit("saveBoat", data.value);
    toast.add({
      severity: "success",
      summary: "Success",
      detail: "This tab successfully filled",
      life: 3000,
    });
    console.log(data.value);
  } else {
    console.log("Validation failed");
    toast.add({
      severity: "warn",
      summary: "Warning",
      detail: "Please check all fields",
      life: 3000,
    });
  }
};
</script>

<template>
  <div class="metaBox">
    <div class="panel_header">
      <span>Meta Options</span>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label for="">Meta Tag Title</label>
          <div class="input_Valid">
            <input type="text" v-model="data.title" />
            <span class="validText" v-if="v$.title.$error"
              >The title is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Meta Tag Description</label>
          <div class="input_Valid">
            <input type="text" v-model="data.description" />
            <span class="validText" v-if="v$.description.$error"
              >The description is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Meta Tag Keywords</label>
          <div class="input_Valid">
            <input type="text" v-model="data.keywords" />
            <span class="validText" v-if="v$.keywords.$error"
              >The keywords is required</span
            >
          </div>
        </span>
      </form>
    </div>
    <div class="panel_footer">
      <button class="discardBtn">Discard</button>
      <Toast />
      <SplitButton label="Save Changes" @click="saveBoatOptions" />
    </div>
  </div>
</template>

<style scoped></style>
