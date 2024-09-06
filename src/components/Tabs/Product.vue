<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";
import RadioButton from "../UI/RadioButton.vue";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import SplitButton from "primevue/splitbutton";
import { useToast } from "primevue/usetoast";

const emit = defineEmits(["saveBoat"]);

const props = defineProps({
  boat: {
    type: Object,
    default: () => ({}),
  },
});

const data = ref({
  length: props.boat.length || null,
  capacity: props.boat.capacity || null,
  speed: props.boat.speed || null,
  enginePower: props.boat.enginePower || null,
  enoughFuel: props.boat.enoughFuel || null,
  fuelTank: props.boat.fuelTank || null,
  rating: props.boat.rating || null,
  peopleNum: props.boat.peopleNum || null,
  berthsNum: props.boat.berthsNum || null,
  manufactureYear: props.boat.manufactureYear || null,
  top: props.boat.top || false,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      length: newValue.length || null,
      capacity: newValue.capacity || null,
      speed: newValue.speed || null,
      enginePower: newValue.enginePower || null,
      enoughFuel: newValue.enoughFuel || null,
      fuelTank: newValue.fuelTank || null,
      rating: newValue.rating || null,
      peopleNum: newValue.peopleNum || null,
      berthsNum: newValue.berthsNum || null,
      manufactureYear: newValue.manufactureYear || null,
      top: newValue.top || false,
    };
  },
  { deep: true }
);

const rules = {
  length: { required },
  capacity: { required },
  speed: { required },
  enginePower: { required },
  enoughFuel: { required },
  fuelTank: { required },
  rating: { required },
  peopleNum: { required },
  berthsNum: { required },
  manufactureYear: { required },
  top: { required },
};

const v$ = useVuelidate(rules, data);

const toast = useToast();

const SaveBoatOptions = () => {
  v$.value.$touch();
  if (!v$.value.$invalid) {
    emit("saveBoat", data.value);
    toast.add({
      severity: "success",
      summary: "Success",
      detail: "This tab successfully filled",
      life: 3000,
    });
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
  <div class="productBox">
    <div class="panel_header">
      <span>Product Specifications</span>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label for="">Length</label>
          <div class="input_Valid">
            <input type="number" v-model="data.length" />
            <span v-if="v$.length.$error" class="validText"
              >The length is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Capacity</label>
          <div class="input_Valid">
            <input type="number" v-model="data.capacity" />
            <span v-if="v$.capacity.$error" class="validText"
              >The capacity is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Speed</label>
          <div class="input_Valid">
            <input type="number" v-model="data.speed" />
            <span v-if="v$.speed.$error" class="validText"
              >The speed is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Engine Power</label>
          <div class="input_Valid">
            <input type="number" v-model="data.enginePower" />
            <span v-if="v$.enginePower.$error" class="validText"
              >The enginePower is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Enough Fuel</label>
          <div class="input_Valid">
            <input type="number" v-model="data.enoughFuel" />
            <span v-if="v$.enoughFuel.$error" class="validText"
              >The enoughFuel is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Fuel Tank</label>
          <div class="input_Valid">
            <input type="number" v-model="data.fuelTank" />
            <span v-if="v$.fuelTank.$error" class="validText"
              >The fuelTank is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Rating</label>
          <div class="input_Valid">
            <input type="number" v-model="data.rating" />
            <span v-if="v$.rating.$error" class="validText"
              >The rating is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Number of people</label>
          <div class="input_Valid">
            <input type="number" v-model="data.peopleNum" />
            <span v-if="v$.peopleNum.$error" class="validText"
              >The people Number is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Number of berths</label>
          <div class="input_Valid">
            <input type="number" v-model="data.berthsNum" />
            <span v-if="v$.berthsNum.$error" class="validText"
              >The berths Number is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Year of Manufacture</label>
          <div class="input_Valid">
            <input type="number" v-model="data.manufactureYear" />
            <span v-if="v$.manufactureYear.$error" class="validText"
              >Year of Manufacture is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Top Recommendation</label>
          <RadioButton v-model="data.top" name="top" />
        </span>
      </form>
    </div>
    <div class="panel_footer">
      <button class="discardBtn">Discard</button>
      <SplitButton
        label="Save Changes"
        type="submit"
        @click="SaveBoatOptions"
      />
    </div>
  </div>
</template>

<style scoped></style>
