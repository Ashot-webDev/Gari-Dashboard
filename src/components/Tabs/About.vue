<script setup>
import ToggleSwitch from "primevue/toggleswitch";
import { ref, watch, defineProps, defineEmits } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, numeric } from "@vuelidate/validators";
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
  name: props.boat.name || "",
  about: props.boat.about || "",
  type: props.boat.type || "",
  startPrice: props.boat.startPrice || 0,
  discountPrice: props.boat.discountPrice || 0,
  checked: props.boat.checked || false,
  checkInfo: props.boat.checked ? "Active" : "Passive",
  checkInfo2: props.boat.checked ? "Activated" : "Deactivated",
});

const rules = {
  name: { required },
  about: { required, minLength: minLength(10) },
  type: { required },
  startPrice: { required, numeric },
  discountPrice: { required, numeric },
  checked: { required },
};
watch(
  () => data.value.checked,
  (newChecked) => {
    data.value.checkInfo = newChecked ? "Active" : "Passive";
    data.value.checkInfo2 = newChecked ? "Activated" : "Deactivated";
  }
);

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      name: newValue.name || "",
      about: newValue.about || "",
      type: newValue.type || "",
      startPrice: newValue.startPrice || 0,
      discountPrice: newValue.discountPrice || 0,
      checked: newValue.checked || false,
      checkInfo: newValue.checked ? "Active" : "Passive",
      checkInfo2: newValue.checked ? "Activated" : "Deactivated",
    };
  },

  { deep: true }
);

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
  <div class="aboutBox">
    <div class="panel_header">
      <span>About The Boat</span>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label for="">Product Name</label>
          <div class="input_Valid">
            <input type="text" v-model="data.name" />
            <span v-if="v$.name.$error" class="validText"
              >Name is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">About the Boat</label>
          <div class="input_Valid">
            <input type="text" v-model="data.about" />
            <span v-if="v$.about.$error" class="validText">
              About the Boat is required and must be at least 10 characters long
            </span>
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Boat Type</label>
          <div class="input_Valid">
            <input type="text" v-model="data.type" />
            <span v-if="v$.type.$error" class="validText"
              >Boat Type is required</span
            >
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Starting Price</label>
          <div class="input_Valid">
            <input type="number" v-model="data.startPrice" />
            <span v-if="v$.startPrice.$error" class="validText">
              Starting Price is required and must be numeric
            </span>
          </div>
        </span>
        <span class="form_itemBox">
          <label for="">Discount Price</label>
          <div class="input_Valid">
            <input type="number" v-model="data.discountPrice" />
            <span v-if="v$.discountPrice.$error" class="validText">
              Discount Price is required and must be numeric
            </span>
          </div>
        </span>
        <span class="form_itemBox form_checkBox">
          <label for="">Status</label>
          <div class="input_Valid">
            <label for="" class="checkBox">
              <ToggleSwitch v-model="data.checked" />
              <span>{{ data.checkInfo }}</span>
            </label>
          </div>
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

<style>
.checkBox {
  display: flex;
  align-items: center;
  gap: 15px;
}

@media only screen and (max-width: 890px) {
  .checkBox {
    margin: 10px 0 0 0;
  }
}
.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
  background-color: #3699ff !important;
}

.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
  background-color: #3699ff !important;
  border-color: #3699ff !important;
}

.checkBox .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
  background-color: #3699ff !important;
}
.checkBox .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider:before {
  background-color: #ffffff !important;
  border-color: #3699ff !important;
}

.p-splitbutton-button {
  padding: 10px !important;
  background: #00a3ff !important;
  color: white !important;
}

.p-splitbutton-button:hover {
  border: none !important;
}

.input_Valid input {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  gap: 10px;
  font-size: 12px;
  font-family: "Poppins";
  color: rgb(57, 57, 57);
  font-weight: 500;
}

.validText {
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 500;
  color: red;
}
</style>
