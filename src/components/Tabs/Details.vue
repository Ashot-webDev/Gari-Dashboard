<script setup>
import { ref, watch } from "vue";
import RadioButton from "../UI/RadioButton.vue";
import { useToast } from "primevue/usetoast";

const emit = defineEmits(["saveBoat"]);

const props = defineProps({
  boat: {
    type: Object,
    default: () => ({}),
  },
});

const data = ref({
  pickUp: props.boat.pickUp || false,
  map: props.boat.map || false,
  parking: props.boat.parking || false,
  jackets: props.boat.jackets || false,
  fuel: props.boat.fuel || false,
  food: props.boat.food || false,
  skipper: props.boat.skipper || false,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      pickUp: newValue.pickUp || false,
      map: newValue.map || false,
      parking: newValue.parking || false,
      jackets: newValue.jackets || false,
      fuel: newValue.fuel || false,
      food: newValue.food || false,
      skipper: newValue.skipper || false,
    };
  },
  { deep: true }
);
const toast = useToast();

const SaveBoatOptions = () => {
  emit("saveBoat", data.value);
  toast.add({
    severity: "success",
    summary: "Success",
    detail: "This tab successfully filled",
    life: 3000,
  });
  console.log(data.value);
};
</script>

<template>
  <div class="detailsBox">
    <div class="panel_header">
      <span>Details</span>
      <button class="addBtn">+ Add New Details Entries</button>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/1.svg" alt="" />
            Pick up and drop off
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.pickUp" name="pickUp" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/2.svg" alt="" />
            Map
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.map" name="map" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/3.svg" alt="" />
            Free Parking
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.parking" name="parking" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/4.svg" alt="" />
            Life Jackets
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.jackets" name="jackets" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/5.svg" alt="" />
            Fuel (it is charged extra on base price)
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.fuel" name="fuel" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/6.svg" alt="" />
            Drinks,food (Will be extra for desired)
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.food" name="food" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/7.svg" alt="" />
            Skipper
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.skipper" name="skipper" />
          </label>
        </span>
      </form>
    </div>
    <div class="panel_footer">
      <button class="discardBtn">Discard</button>
      <button class="saveBtn" @click="SaveBoatOptions">Save Changes</button>
    </div>
  </div>
</template>

<style scoped>
.form_itemBox {
  width: 100%;
  justify-content: space-between;
}
.item_title {
  display: flex;
  align-items: center;
  gap: 10px;
}
.item_title {
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 700;
}

:deep(.p-radiobutton .p-radiobutton-box) {
  border-radius: 2px !important;
  background-color: #f3f6f9 !important;
}

:deep(.p-radiobutton .p-radiobutton-box .p-radiobutton-icon) {
  width: 100%;
  height: 100%;
  background-color: #3699ff !important;
  border-radius: 0 !important;
}

@media only screen and (max-width: 950px) {
  .radioBtnBox {
    width: auto;
    gap: 20px;
  }
}

@media only screen and (max-width: 890px) {
  .form_itemBox {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
}

@media only screen and (max-width: 420px) {
  .p-tabpanels .panels {
    padding: 10px !important;
  }
}
</style>
