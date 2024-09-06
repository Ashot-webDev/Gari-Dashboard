<script setup>
import { ref, watch } from "vue";
import RadioButton from "../UI/RadioButton.vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const emit = defineEmits(["saveBoat"]);

const props = defineProps({
  boat: {
    type: Object,
    default: () => ({}),
  },
});

const data = ref({
  rentals: props.boat.rentals || false,
  ski: props.boat.ski || false,
  age: props.boat.age || false,
  suggested: props.boat.suggested || false,
  safety: props.boat.safety || false,
  distance: props.boat.distance || false,
  ability: props.boat.ability || false,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      rentals: newValue.rentals || false,
      ski: newValue.ski || false,
      age: newValue.age || false,
      suggested: newValue.suggested || false,
      safety: newValue.safety || false,
      distance: newValue.distance || false,
      ability: newValue.ability || false,
    };
  },
  { deep: true }
);

const SaveBoatOptions = () => {
  emit("saveBoat", data.value);
  console.log(data.value);

  toast.add({
    severity: "success",
    summary: "Success",
    detail: "This tab successfully filled",
    life: 3000,
  });
};
</script>

<template>
  <div class="equipBox">
    <div class="panel_header">
      <span>Add-Ons</span>
      <button class="addBtn">+ Add New Add-Ons</button>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/15.svg" alt="" />
            Rentals are offered every day
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.rentals" name="rentals" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/16.svg" alt="" />
            Fully equipped jet ski
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.ski" name="ski" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/17.svg" alt="" />
            Age limitation: 18 years and above younger individuals allowed only
            with parents
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.age" name="age" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/18.svg" alt="" />
            Suggested gear: sports clothing is recomended
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.suggested" name="suggested" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/19.svg" alt="" />
            Safety gear: life jackets - supllied at our center
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.safety" name="safety" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/20.svg" alt="" />
            Driving distance: approx 40 miles (50km)
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.distance" name="distance" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/21.svg" alt="" />
            Driving ability: no experience necessary
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.ability" name="ability" />
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
@media only screen and (max-width: 768px) {
  .card {
    width: 100%;
    padding: 0;
  }
  .p-tabpanels .panels {
    padding: 0 !important;
  }
}
@media only screen and (max-width: 420px) {
  .p-tabpanels .panels {
    padding: 10px !important;
  }
}
</style>
