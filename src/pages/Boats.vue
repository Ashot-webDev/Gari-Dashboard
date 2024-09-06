<script setup>
import BoatList from "../components/Boats/BoatList.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="Boats_Block">
    <div class="header">
      <span class="header__title">Boats</span>
      <span class="header__nav">
        Product Management
        <span class="path"> {{ router.currentRoute.value.path }} </span>
      </span>
    </div>
    <BoatList />
  </div>
</template>

<style>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  justify-content: flex-start;
  gap: 10px;
}
.header__title {
  font-size: 20px;
  font-family: "Poppins";
  font-weight: 600;
  color: #181c32;
}
.header__nav {
  color: #b5b5c3;
  font-size: 13px;
  font-family: "Poppins";
  font-weight: 400;
}
.path {
  color: #3f4254;
  margin: 0 0 0 10px;
}
</style>
