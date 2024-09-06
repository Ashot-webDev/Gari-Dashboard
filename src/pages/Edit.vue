<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useBoatStore } from "../store/BoatArr";
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

const route = useRoute();
const router = useRouter();

const boatStore = useBoatStore();
const boatId = ref(route.params.id);
const activeTab = ref("0");

const selectedBoat = ref({
  id: "",
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

onMounted(async () => {
  await boatStore.loadBoats();
  selectedBoat.value = boatStore.boatList.find(
    (item) => item.id == boatId.value
  );
  console.log(selectedBoat.value);
});

const handleEdit = (data) => {
  selectedBoat.value = {
    ...selectedBoat.value,
    ...data,
  };
  console.log(selectedBoat.value);
};

const editing = async () => {
  console.log(selectedBoat.value);
  try {
    const editedBoat = selectedBoat.value;
    await boatStore.editBoat(boatId.value, editedBoat);
    router.push({ name: "boats" });
  } catch {
    console.log("Error");
  }
};
</script>

<template>
  <div class="edit_block">
    <div class="block_header">
      <span class="block_title"></span>
      <span class="block_path"> Product Management / Boat / / Edit </span>
    </div>
    <div class="block_content">
      <div class="addBox">
        <div class="card">
          <Tabs v-model:value="activeTab">
            <TabList class="Tab_header">
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '0' }"
                value="0"
                >About the Boat</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '1' }"
                value="1"
                >Product</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '2' }"
                value="2"
                >SEO</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '3' }"
                value="3"
                >Image</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '4' }"
                value="4"
                >Time and Price</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '5' }"
                value="5"
                >Details</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '6' }"
                value="6"
                >Equipment</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '7' }"
                value="7"
                >Add-Ons</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '8' }"
                value="8"
                >Itinerary</Tab
              >
              <Tab
                :class="{ tabs: true, active_tab: activeTab === '9' }"
                value="9"
                >F.A.Q</Tab
              >
            </TabList>
            <TabPanels class="panels">
              <TabPanel value="0">
                <About :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="1">
                <Product :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="2">
                <Seo :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="3">
                <Image :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="4">
                <TimePrice :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="5">
                <Details :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="6">
                <Equipment :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="7">
                <AddOns :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="8">
                <Itinerary :boat="selectedBoat" @saveBoat="handleEdit" />
              </TabPanel>
              <TabPanel value="9"
                ><FAQ :boat="selectedBoat" @saveBoat="handleEdit"
              /></TabPanel>
            </TabPanels>
          </Tabs>
          <div class="addBtnBox">
            <button
              type="submit"
              label="Create Boat"
              class="createBtn"
              @click="editing"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.edit_block {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
}
.block_header {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.block_title {
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 600;
}
.block_path {
  font-size: 13px;
  font-family: "Poppins";
  font-weight: 500;
  color: #b5b5c3;
  margin: 15px 0 0 0;
}

.block_content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 30px 0;
}

.block_tabBox {
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
}

.tabBox_header {
  width: 100%;
  color: #a1a5b7;
  font-size: 16px;
}
</style>
