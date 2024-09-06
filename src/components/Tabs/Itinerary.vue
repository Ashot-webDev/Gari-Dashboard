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
  cave: props.boat.cave || false,
  elaphiti: props.boat.elaphiti || false,
  korcula: props.boat.korcula || false,
  hvar: props.boat.hvar || false,
  mijet: props.boat.mijet || false,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      cave: newValue.cave || false,
      elaphiti: newValue.elaphiti || false,
      korcula: newValue.korcula || false,
      hvar: newValue.hvar || false,
      mijet: newValue.mijet || false,
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
      <span>Itinerary</span>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/22.svg" alt="" />
            Blue Cave and snorkeling
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.cave" name="cave" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/22.svg" alt="" />
            Elaphiti islands Dubrovnik
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.elaphiti" name="elaphiti" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/22.svg" alt="" />
            Korcula island
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.korcula" name="korcula" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/22.svg" alt="" />
            Hvar island
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.hvar" name="hvar" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/22.svg" alt="" />
            Mijet island
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.mijet" name="mijet" />
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
