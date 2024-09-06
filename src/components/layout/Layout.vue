<script setup>
import Header from "../header/Header.vue";
import Sidebar from "../sidebar/Sidebar.vue";
</script>

<template>
  <div class="wrapper">
    <Sidebar />
    <div class="main">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  flex-wrap: nowrap;
  position: relative;
}
.main {
  display: flex;
  flex-direction: column;
  background: rgba(238, 240, 248, 1);
  flex-grow: 1;
}

@media only screen and (max-width: 1150px) {
  .main {
    padding: 0 0 0 30px;
  }
}
</style>
