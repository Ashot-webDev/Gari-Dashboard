<script setup>
import { ref } from "vue";
import DropDown from "../UI/DropDown.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const list = ref([
  {
    id: 1,
    imgSrc: "src/assets/sidebar/products.svg",
    item_title: "Products Management",
    item_options: [
      {
        title: "Boats",
        onClick: () => {
          router.push("/boats");
        },
      },
      "Jet-Ski",
      "Yacht",
      "Water Taxi",
    ],
  },
  {
    id: 2,
    imgSrc: "src/assets/sidebar/tours.png",
    item_title: "Tours Management",
    item_options: ["Shared Tours", "Private Tours", "Itinerary"],
  },
  {
    id: 3,
    imgSrc: "src/assets/sidebar/procent.svg",
    item_title: "Offers Management",
    item_options: ["Discount and Coupon", "Custom Offer", "Promotions"],
  },
  {
    id: 4,
    imgSrc: "src/assets/sidebar/user.svg",

    item_title: "User Management",
    item_options: ["User Accounts"],
  },
  {
    id: 5,
    imgSrc: "src/assets/sidebar/edit.svg",
    item_title: "Manual Reservation",
    item_options: [],
  },
  {
    id: 6,
    imgSrc: "src/assets/sidebar/plane.svg",

    item_title: "Marketing",
    item_options: [],
  },
  {
    id: 7,
    imgSrc: "src/assets/sidebar/state.svg",
    item_title: "Static and analytics",
    item_options: [],
  },
  {
    id: 8,
    imgSrc: "src/assets/sidebar/msg.svg",
    item_title: "Content Management",
    item_options: ["Blog Management", "Reviews Management"],
  },
  {
    id: 9,
    imgSrc: "src/assets/sidebar/settings.svg",
    item_title: "Settings",
    item_options: ["Admin Account", "Security", "System Logs"],
  },
]);
</script>

<template>
  <div class="dropdowns_list">
    <DropDown
      v-for="elem in list"
      :key="elem.id"
      :title="elem.item_title"
      :options="elem.item_options"
      :img="elem.imgSrc"
    />
  </div>
</template>

<style scoped>
.dropdowns_list {
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
}

.sidebar__block2 {
  margin: 10px 0 0 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block2__products {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.products__header {
  padding: 10px 20px;
  display: flex;
  width: 100%;
  align-items: center;
  background: #1b1b28;
}
.products__content {
  display: none;
}

.sidebar__titles {
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  color: #b4b6bc;
  margin: 0 0 0 10px;
  cursor: pointer;
}

.global_list {
  width: 100%;
  align-items: center;
  flex-direction: column;
}
.global_items {
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  color: #b4b6bc;
  margin: 0 0 15px 10px;
  list-style: url(../../assets/sidebar/line.svg);
}

.global_items span {
  margin: 0 0 0 20px;
}
</style>
