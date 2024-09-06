<script setup></script>

<template>
  <div class="header">
    <div class="header__block1 header__block">
      <div class="block1__tabs">
        <span class="default_tabs">Pages</span>
        <span class="default_tabs">Features</span>
        <span class="default_tabs">Apps</span>
      </div>
      <div class="block1__items">
        <span><img src="../../assets/header/search.svg" alt="" /></span>
        <span><img src="../../assets/header/compile.svg" alt="" /></span>
        <span><img src="../../assets/header/equalizer.svg" alt="" /></span>
        <span><img src="../../assets/header/cart.svg" alt="" /></span>
        <span><img src="../../assets/header/menu.svg" alt="" /></span>
        <span><img src="../../assets/header/language.svg" alt="" /></span>
        <span>Hi,<span class="name">Sean</span></span>
        <span><img src="../../assets/header/user.svg" alt="" /></span>
      </div>
    </div>
    <div class="header__block2 header__block">
      <div class="block2__items">
        <span class="type">Dashboard</span>
        <span class="code">#XRS-45670</span>
        <span class="btn">Add New</span>
      </div>
      <div class="block2__tabs">
        <span class="default_tabs">Today</span>
        <span class="default_tabs">Month</span>
        <span class="default_tabs">Year</span>
        <span class="default_tabs">Actions</span>
        <span><img src="../../assets/header/add.svg" alt="" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px 30px;
  min-height: 120px;
  background: #ffffff;
}

/* ---------------------------------Default Styles--------------------------------------- */
.header__block {
  padding: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 3px solid #eeeff3;
}
.default_tabs {
  font-family: "Poppins";
  font-size: 13px;
  font-weight: 400;
  color: #6c7293;
  transition: all 0.3s ease;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
}
.default_tabs:hover {
  background: #f3f6f9;
  color: #6993ff;
}
.default_tabs:active {
  transform: scale(0.9);
}
@media only screen and (max-width: 1024px) {
  .header__block {
    flex-direction: column;
    padding: 0;
  }
  .header {
    padding: 15px 0;
  }
  .header__block2 {
    margin: 20px 0 0 0;
  }
  .block2__tabs {
    margin: 10px 0 0 0;
  }
}
@media only screen and (max-width: 425px) {
  .block1__items {
    gap: 5px;
  }
}
/* ---------------------------------Header Block1 -------------------------------------- */

.block1__tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.block1__items {
  display: flex;
  align-items: center;
  gap: 20px;
}

.block1__items {
  font-size: 11px;
  font-family: "Poppins";
  font-weight: 400;
  color: #959cb6;
}
.name {
  font-size: 13px;
  color: #6c7293;
}

/* ----------------------------------Header Block 2--------------------------------------------- */

.header__block2 {
  border-bottom: none;
}
.block2__items {
  font-size: 13px;
  font-family: "Poppins";
  font-weight: 400;
}
.type {
  color: #434349;
  padding: 0 20px 0 0;
  border-right: 2px solid #ebedf2;
}
.code {
  color: #959cb6;
  padding: 0 10px 0 15px;
}
.btn {
  padding: 6px 12px;
  background: #fff4de;
  color: #ffa800;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s ease;
}
.block2__tabs {
  display: flex;
  align-items: center;
}
</style>
