<script setup>
import { ref } from "vue";
import SideList from "./SideList.vue";

const emit = defineEmits(["closeDropDown"]);

const activeSide = ref(false);
const sideBtn = ref("/src/assets/sidebar/close.svg");

const closeSidebar = async () => {
  activeSide.value = !activeSide.value;
  sideBtn.value = await (activeSide.value
    ? import("../../assets/sidebar/open.svg")
    : import("../../assets/sidebar/close.svg")
  ).then((module) => module.default);
  emit("closeDropDown");
};
</script>

<template>
  <div :class="['sidebarBox', { active_side: activeSide }]">
    <div class="content">
      <div :class="['sidebar__header', { active_side: activeSide }]">
        <img
          src="../../assets/sidebar/logo.svg"
          :class="['logo', { active_side: activeSide }]"
          alt="Logo"
        />
        <img
          class="closeBtn"
          :src="sideBtn"
          alt="Toggle Sidebar"
          @click="closeSidebar"
        />
      </div>
      <div class="sidebar__block1">
        <div
          :class="['block1__item1 block__items', { active_side: activeSide }]"
        >
          <img
            src="../../assets/sidebar/dashboard_icon.svg"
            alt="sidebar Icon"
          />
          <span class="sidebar__titles">Dashboard</span>
        </div>
        <div
          :class="['block1__item2 block__items', { active_side: activeSide }]"
        >
          <img src="../../assets/sidebar/msg.svg" alt="Messages" />
          <span class="sidebar__titles">Reservation Management</span>
          <img
            src="../../assets/sidebar/arrow.png"
            alt="Arrow"
            class="arrow arrow1"
          />
        </div>
      </div>
      <SideList v-if="!activeSide" />
    </div>
  </div>
</template>

<style scoped>
/* ------------------------Global  styles-------------------------- */

.block__items {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.arrow {
  margin: 0 0 0 40px;
}
/* -------------------------------------------------------------------- */

.sidebarBox {
  position: relative;
  min-height: auto;
  width: 265px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  background: #1e1e2d;
  left: 0;
  transition: 0.1s ease;
  flex-shrink: 0;
  z-index: 1;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.content {
  max-height: 100vh;
  overflow-y: auto;
  position: relative;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: column;
}

.sidebarBox.active_side {
  width: 35px;
}

.sidebar__header {
  padding: 10px 20px;
  width: 100%;
  min-height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1b1b28;
}

.sidebar__header.active_side {
  padding: 5px;
}
.logo.active_side {
  display: none;
}
.closeBtn {
  cursor: pointer;
  transition: all 0.3s left;
}

.closeBtn:active {
  transform: scale(0.9);
}

/* ---------------------------------------sidebar Block 1--------------------------------- */

.sidebar__block1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
}

.block__items.active_side {
  display: none;
}

.block1__item1,
.block1__item2 {
  font-size: 13px;
  font-family: "Poppins";
  font-weight: 500;
  color: white;
}

.block1__item1 span {
  margin: 0 0 0 10px;
}

.arrow1 {
  margin: 0 0 0 15px;
}

@media only screen and (max-width: 1150px) {
  .sidebarBox {
    position: fixed;
    height: 100vh;
  }
}
</style>
