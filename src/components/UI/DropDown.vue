<script setup>
import { ref } from "vue";

const isActive = ref(false);

const props = defineProps({
  title: String,
  img: String,
  options: Array,
});

const imgSource = ref("/src/assets/sidebar/arrow.png");

const toggleClass = () => {
  isActive.value = !isActive.value;
  imgSource.value = isActive.value
    ? "/src/assets/sidebar/down.png"
    : "/src/assets/sidebar/arrow.png";
};
</script>

<template>
  <div class="block2__products">
    <div class="products__header">
      <span
        :class="[
          'products__titles sidebar__titles',
          { active_class: isActive },
        ]"
        @click="toggleClass"
      >
        <img :src="props.img" alt="" class="title_img" />
        {{ props.title }}
      </span>
      <img :src="imgSource" alt="" class="arrow" />
    </div>

    <span :class="['products__content', { active_class: isActive }]">
      <ul class="global_list">
        <li
          v-for="(option, idx) in props.options"
          class="global_items"
          :key="idx"
          @click="option?.onClick"
        >
          <span>{{ typeof option === "string" ? option : option.title }}</span>
        </li>
      </ul>
    </span>
  </div>
</template>

<style>
.sidebar__titles {
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  color: #b4b6bc;
  margin: 0 0 0 10px;
  cursor: pointer;
}
.sidebar__titles:active {
  transform: scale(0.9);
}
.sidebar__block2 {
  margin: 10px 0 0 0;
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
}
.block2__products {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.products__header {
  padding: 10px;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  background: #1b1b28;
  justify-content: space-between;
}
.products__content {
  display: flex;
  width: 100%;
  align-items: flex-start;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transform: translateX(-100%);
  transition: max-height 0.5s ease, opacity 0.5s ease, transform 0.5s ease;
}
.products__content.active_class {
  max-height: 500px;
  opacity: 1;
  transform: translateX(0);
}

.products__titles {
  display: flex;
  align-items: center;
}
.products__titles.active_class {
  color: white;
}
.title_img {
  margin: 0 20px 0 0;
}

.global_list {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.global_items {
  font-size: 12px;
  font-family: "Poppins";
  font-weight: 400;
  color: #b4b6bc;
  margin: 5px;
  list-style: url(../../assets/sidebar/line.svg);
  cursor: pointer;
  transition: all 0.2s ease;
}
.global_items:active {
  transform: scale(0.9);
}

.global_items span {
  margin: 0 0 0 20px;
}
</style>
