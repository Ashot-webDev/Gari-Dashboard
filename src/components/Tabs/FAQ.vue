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
  query1: props.boat.query1 || false,
  query2: props.boat.query2 || false,
  query3: props.boat.query3 || false,
  query4: props.boat.query4 || false,
  query5: props.boat.query5 || false,
  query6: props.boat.query6 || false,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      query1: newValue.query1 || false,
      query2: newValue.query2 || false,
      query3: newValue.query3 || false,
      query4: newValue.query4 || false,
      query5: newValue.query5 || false,
      query6: newValue.query6 || false,
    };
  },
  { deep: true }
);

const SaveBoatOption = () => {
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
  <div class="detailsBox">
    <div class="panel_header">
      <span>F.A.Q.</span>
      <button class="addBtn">+ Add New F.A.Q.</button>
    </div>
    <div class="panel_content">
      <form action="" class="formBox">
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/23.svg" alt="" />
            What can you see and do on a boat in Dubrovnik?
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.query1" name="query1" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/23.svg" alt="" />
            What is the best time to rent a boat Dubrovnik?
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.query2" name="query2" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/23.svg" alt="" />
            Yacht charter in Dubrovnik with a skipper?
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.query3" name="query3" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/23.svg" alt="" />
            What can you see and do on a boat in Dubrovnik?
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.query4" name="query4" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/23.svg" alt="" />
            What can you see and do on a boat in Dubrovnik?
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.query5" name="query5" />
          </label>
        </span>
        <span class="form_itemBox">
          <label class="item_title" for="">
            <img src="../../assets/tabs/23.svg" alt="" />
            What can you see and do on a boat in Dubrovnik?
          </label>
          <label for="" class="radioBtnBox">
            <RadioButton v-model="data.query6" name="query6" />
          </label>
        </span>
      </form>
    </div>
    <div class="panel_footer">
      <button class="discardBtn">Discard</button>
      <button class="saveBtn" @click="SaveBoatOption">Save Changes</button>
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
