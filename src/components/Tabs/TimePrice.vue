<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import RadioButton from "../UI/RadioButton.vue";
import Select from "primevue/select";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { useToast } from "primevue/usetoast";

const emit = defineEmits(["saveBoat"]);

const props = defineProps({
  boat: {
    type: Object,
    default: () => ({}),
  },
});

const slots = ref([
  { name: "10:00 AM - 02:00 PM (specific)", code: "slot1" },
  { name: "12:00 AM - 03:00 PM (specific)", code: "slot2" },
  { name: "09:00 AM - 05:00 PM (specific)", code: "slot3" },
  { name: "11:00 AM - 03:00 PM (specific)", code: "slot4" },
  { name: "06:00 AM - 05:00 PM (specific)", code: "slot5" },
]);

const rules = {
  price: { required },
  reservation: { required },
  skipper: { required },
  timeSlot: { required },
};

const data = ref({
  price: props.boat.price || null,
  reservation: props.boat.reservation || "",
  skipper: props.boat.skipper || false,
  skipperPrice: props.boat.skipperPrice || 0,
  timeSlot: props.boat.timeSlot || slots.value[0],
});

const toast = useToast();

watch(
  () => props.boat,
  (newValue) => {
    data.value.price = newValue.price || null;
    data.value.reservation = newValue.reservation || "";
    data.value.skipper = newValue.skipper || false;
    data.value.skipperPrice = newValue.skipperPrice || 0;
    data.value.timeSlot = newValue.timeSlot || slots.value[0];
  },
  { deep: true }
);

const v$ = useVuelidate(rules, data);

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
    console.log(data.value.timeSlot);
  } else {
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
  <div class="priceBox">
    <div class="panel_header timePrice">
      <span>Time And Price</span>
      <button class="addBtn">+ Add New Time Price Assign</button>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label for="">Price</label>
          <div class="input_Valid">
            <input type="number" v-model="data.price" />
            <span class="validText" v-if="v$.price.$error"
              >The price is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Reservation</label>
          <div class="input_Valid">
            <input type="text" v-model="data.reservation" />
            <span class="validText" v-if="v$.reservation.$error"
              >The reservation is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Skipper</label>
          <RadioButton v-model="data.skipper" name="skipper" />
        </span>
        <span class="form_itemBox" v-if="data.skipper">
          <label for="">Skipper Price</label>

          <div class="input_Valid">
            <input type="number" v-model="data.skipperPrice" />
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Time Slot</label>
          <Select
            v-model="data.timeSlot"
            :options="slots"
            optionLabel="name"
            placeholder="Select a Slot"
            class="selectInput"
          />
        </span>
      </form>
    </div>
    <div class="panel_footer">
      <button class="discardBtn">Discard</button>
      <button class="saveBtn" @click="saveBoatOptions">Save Changes</button>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (max-width: 570px) {
  .addBtn {
    padding: 3px 5px;
    font-size: 14px;
  }
}
.selectInput {
  width: 500px;
  background: #f5f8fa;
  border-radius: 6px;
  border: none;
}

.radioBtnBox {
  width: 500px;
  display: flex;
  gap: 10px;
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

@media only screen and (max-width: 890px) {
  .radioBtnBox {
    width: auto;
    margin: 15px 0 0 0;
  }
}
</style>
