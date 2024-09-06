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
  shower: props.boat.shower || false,
  fridge: props.boat.fridge || false,
  toilet: props.boat.toilet || false,
  winch: props.boat.winch || false,
  bimini: props.boat.bimini || false,
  sundeck: props.boat.sundeck || false,
  music: props.boat.music || false,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      shower: newValue.shower || false,
      fridge: newValue.fridge || false,
      toilet: newValue.toilet || false,
      winch: newValue.winch || false,
      bimini: newValue.bimini || false,
      sundeck: newValue.sundeck || false,
      music: newValue.music || false,
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
      <span>Equipment</span>
      <button class="addBtn">+ Add New Equipment</button>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/8.svg" alt="" />
            Shower
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.shower" name="shower" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/9.svg" alt="" />
            Fridge
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.fridge" name="fridge" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/10.svg" alt="" />
            Toilet
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.toilet" name="toilet" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/11.svg" alt="" />
            Winch
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.winch" name="winch" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/12.svg" alt="" />
            Bimini
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.bimini" name="bimini" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/13.svg" alt="" />
            Sundeck
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.sundeck" name="sundeck" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/14.svg" alt="" />
            Music
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.music" name="music" />
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
