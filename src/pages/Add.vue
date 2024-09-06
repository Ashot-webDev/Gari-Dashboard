<script setup>
import { ref } from "vue";
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";
import TabPanels from "primevue/tabpanels";
import TabPanel from "primevue/tabpanel";
import About from "../components/Tabs/About.vue";
import Product from "../components/Tabs/Product.vue";
import Seo from "../components/Tabs/Seo.vue";
import Image from "../components/Tabs/Image.vue";
import TimePrice from "../components/Tabs/TimePrice.vue";
import Details from "../components/Tabs/Details.vue";
import Equipment from "../components/Tabs/Equipment.vue";
import AddOns from "../components/Tabs/AddOns.vue";
import Itinerary from "../components/Tabs/Itinerary.vue";
import FAQ from "../components/Tabs/FAQ.vue";
import { useToast } from "primevue/usetoast";
import { useBoatStore } from "../store/BoatArr";
import { useRouter } from "vue-router";

const boatStore = useBoatStore();
const router = useRouter();
const toast = useToast();

const activeBoat = ref({
  id: Math.random().toString(36) + Date.now(),
  name: "",
  about: "",
  type: "",
  startPrice: null,
  discountPrice: null,
  checked: false,
  checkInfo: "Passive",
  length: null,
  capacity: null,
  speed: null,
  enginePower: null,
  enoughFuel: null,
  fuelTank: null,
  rating: null,
  peopleNum: null,
  berthsNum: null,
  manufactureYear: null,
  top: "",
  title: "",
  description: "",
  keywords: "",
  price: null,
  reservation: "",
  skipper: false,
  skipperPrice: null,
  timeSlot: {},
  pickUp: false,
  map: false,
  parking: false,
  jackets: false,
  fuel: false,
  rentals: false,
  ski: false,
  age: false,
  suggested: false,
  safety: false,
  distance: false,
  ability: false,
  shower: false,
  fridge: false,
  toilet: false,
  winch: false,
  bimini: false,
  sundeck: false,
  music: false,
  cave: false,
  elaphiti: false,
  korcula: false,
  hvar: false,
  mijet: false,
  query1: false,
  query2: false,
  query3: false,
  query4: false,
  query5: false,
  query6: false,
});

const activeTab = ref("0");

const handleSave = (data) => {
  activeBoat.value = {
    ...activeBoat.value,
    ...data,
  };
};

const checking = async () => {
  const boat = activeBoat.value;
  let allFieldsValid = true;

  Object.keys(boat).forEach((key) => {
    const value = boat[key];
    if (value === null || value === "" || value === undefined) {
      allFieldsValid = false;
    }
  });

  if (allFieldsValid && activeBoat.value.fileDataUrl) {
    try {
      await boatStore.createBoat(boat);
      router.push({ name: "boats" });
    } catch (error) {
      console.log("Error");
    }
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
  <div class="addBox">
    <div class="card">
      <Tabs v-model:value="activeTab">
        <TabList class="Tab_header">
          <Tab :class="{ tabs: true, active_tab: activeTab === '0' }" value="0"
            >About the Boat</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '1' }" value="1"
            >Product</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '2' }" value="2"
            >SEO</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '3' }" value="3"
            >Image</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '4' }" value="4"
            >Time and Price</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '5' }" value="5"
            >Details</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '6' }" value="6"
            >Equipment</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '7' }" value="7"
            >Add-Ons</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '8' }" value="8"
            >Itinerary</Tab
          >
          <Tab :class="{ tabs: true, active_tab: activeTab === '9' }" value="9"
            >F.A.Q</Tab
          >
        </TabList>
        <TabPanels class="panels">
          <TabPanel value="0">
            <About @saveBoat="handleSave" :boat="activeBoat" />
          </TabPanel>
          <TabPanel value="1">
            <Product @saveBoat="handleSave" :boat="activeBoat" />
          </TabPanel>
          <TabPanel value="2">
            <Seo @saveBoat="handleSave" :boat="activeBoat" />
          </TabPanel>
          <TabPanel value="3">
            <Image v-bind="activeBoat" @saveBoat="handleSave" />
          </TabPanel>
          <TabPanel value="4">
            <TimePrice @saveBoat="handleSave" :boat="activeBoat" />
          </TabPanel>
          <TabPanel value="5">
            <Details v-bind="activeBoat" @saveBoat="handleSave" />
          </TabPanel>
          <TabPanel value="6">
            <Equipment v-bind="activeBoat" @saveBoat="handleSave" />
          </TabPanel>
          <TabPanel value="7">
            <AddOns v-bind="activeBoat" @saveBoat="handleSave" />
          </TabPanel>
          <TabPanel value="8">
            <Itinerary v-bind="activeBoat" @saveBoat="handleSave" />
          </TabPanel>
          <TabPanel value="9"
            ><FAQ v-bind="activeBoat" @saveBoat="handleSave"
          /></TabPanel>
        </TabPanels>
      </Tabs>
      <div class="addBtnBox">
        <button
          type="submit"
          label="Create Boat"
          class="createBtn"
          @click="checking"
        >
          Create Boat
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.Tab_header {
  width: 100%;
  display: flex;
  background: none !important;
}
:root {
  --p-tabs-tablist-background: none !important;
}
.tabs {
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 500;
  color: #a1a5b7;
  background: none;
  border-radius: 0;
  transition: all 0.3s ease;
  margin: 0 0 0 5px;
}
.active_tab {
  color: #00a3ff !important;
  font-weight: 700;
  border-bottom: 2px solid #00a2ff !important;
  transition: all 0.3s ease !important;
  border-radius: 0;
}

:root {
  --p-tablist-active-bar-background: none;
  --p-tabs-tab-active-color: none;
}
.p-tablist-active-bar {
  background: none !important;
}
.panels {
  width: 100%;
  border-radius: 12px;
  background: white;
  margin: 50px 0 0 0;
}
.panel_header {
  padding: 30px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #eff2f5;
  justify-content: space-between;
}
.panel_header span {
  font-size: 20px !important;
  font-family: "Roboto" !important;
  font-weight: 500 !important;
}
.panel_content {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.formBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 85px 20px 30px;
  gap: 20px;
}

.form_itemBox {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
}

.form_itemBox label {
  font-size: 15px;
  font-family: "Roboto";
  font-weight: 500;
}
.formBox input {
  width: 500px;
  background: #f5f8fa;
  border-radius: 6px;
  border: none;
  padding: 10px;
}
.radioInput {
  width: auto !important;
}

.panel_footer {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
}

.panel_footer button {
  border: none;
  margin: 5px;
  font-size: 15px;
  font-family: "Roboto";
  font-weight: 400;
}

.saveBtn {
  padding: 10px;
  background: #00a3ff;
  color: white;
}

.discardBtn {
  color: #b5b5c3;
  background: none;
}

.uploadBox {
  width: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.uploadBox span {
  font-weight: 500;
  font-family: "Roboto";
}

.panel_header button {
  border: none;
  color: white;
  background: #3699ff;
  padding: 10px;
  display: flex;
  align-items: center;
}

@media only screen and (max-width: 890px) {
  .card {
    padding: 10px;
  }
  .Tab_header {
    flex-wrap: wrap;
    align-items: center;
  }

  .panel_content {
    padding: 10px;
  }
  .formBox {
    padding: 0;
  }
  .form_itemBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form_itemBox input {
    width: auto;
    margin: 3px;
  }
  .panel_footer {
    display: flex;
    justify-content: center;
  }
}

.addBtnBox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.addBoat {
  width: 50%;
  padding: 10px 15px;
  font-size: 20px;
  font-family: "Roboto";
  font-weight: 400;
  color: white;
  background: #00a85c;
  border: none;
  cursor: pointer;
}

@media only screen and (max-width: 425px) {
  .addBoat {
    padding: 5px;
    font-size: 13px;
  }
}

.p-splitbutton-dropdown {
  display: none !important;
}

.p-splitbutton-button {
  border-radius: 10px !important;
}

.createBtn {
  width: 70%;
  background: #3699ff;
  padding: 8px;
  font-size: 14px;
  font-family: "Poppins";
  font-weight: 400;
  letter-spacing: 1.2px;
  color: white;
  border: none;
}
</style>
