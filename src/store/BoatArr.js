import { defineStore } from "pinia";
import { ref } from "vue";
import {
  fetchBoats,
  deleteBoat,
  createBoat as createBoatApi,
  updateBoat,
} from "./apiService";

export const useBoatStore = defineStore("boat", () => {
  const boatList = ref([]);

  const loadBoats = async () => {
    try {
      boatList.value = await fetchBoats();
    } catch (error) {
      console.error("Error loading boats:", error);
    }
  };

  const removeBoat = async (boatId) => {
    try {
      await deleteBoat(boatId);
      boatList.value = boatList.value.filter((boat) => boat.id !== boatId);
    } catch (error) {
      console.error("Error removing boat:", error);
    }
  };

  const createBoat = async (boat) => {
    try {
      const newBoat = await createBoatApi(boat);
      boatList.value.push(newBoat);
    } catch (error) {
      console.error("Error creating boat:", error);
    }
  };

  const editBoat = async (boatId, updatedData) => {
    try {
      const updatedBoat = await updateBoat(boatId, updatedData);
      const index = boatList.value.findIndex((boat) => boat.id == boatId);

      if (index !== -1) {
        boatList.value[index] = updatedBoat;
      } else {
        console.log(`Error`);
      }
    } catch (error) {
      console.error("Error editing boat:", error);
    }
  };

  return {
    boatList,
    loadBoats,
    removeBoat,
    createBoat,
    editBoat,
  };
});
