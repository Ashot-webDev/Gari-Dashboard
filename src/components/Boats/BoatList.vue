<script setup>
import Table from "../UI/Table.vue";
import { useBoatStore } from "../../store/BoatArr";
import { useRouter, onBeforeRouteLeave } from "vue-router";
import { ref, onMounted } from "vue";
import ProgressSpinner from "primevue/progressspinner";
import ModalConfirm from "../UI/ModalConfirm.vue";

const router = useRouter();
const boatStore = useBoatStore();
const loading = ref(true);

const showModal = ref(false);
const modalTitle = ref("");
const modalContent = ref("");
const selectedBoat = ref(null);

const handleDelete = () => {
  if (selectedBoat.value) {
    boatStore.removeBoat(selectedBoat.value.id);
    selectedBoat.value = null;
  }
};

const handleCreate = () => {
  selectedBoat.value = null;
  router.push({ name: "add" });
};

const handleOnAction = (action, boat) => {
  if (action === "edit") {
    router.push({ name: "edit", params: { id: boat.id } });
  } else if (action === "delete") {
    selectedBoat.value = boat;
    modalTitle.value = "Delete Boat";
    modalContent.value = `Are you sure you want to delete the boat? ${boat.name}?`;
    showModal.value = true;
  }
};

onBeforeRouteLeave((to, from, next) => {
  selectedBoat.value = null;
  next();
});

onMounted(async () => {
  try {
    await boatStore.loadBoats();
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <ModalConfirm
    :visible="showModal"
    :title="modalTitle"
    :content="modalContent"
    @update:visible="showModal = $event"
    @confirm="handleDelete"
  />
  <div class="content">
    <div class="boat__updates">
      <span class="filterBox">Filter</span>
      <div class="updateBox">
        <button class="exportBtn">
          <img src="../../assets/boats/export.svg" alt="" /> Export
        </button>
        <button class="addBtn" @click="handleCreate">
          <img src="../../assets/boats/add.svg" alt="" /> Add New Boat
        </button>
      </div>
    </div>
    <ProgressSpinner
      v-if="loading"
      aria-label="Loading"
      style="width: 50px; height: 50px"
    />
    <Table v-else :data="boatStore.boatList" @onAction="handleOnAction" />
  </div>
</template>

<style scoped>
.content {
  padding: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

@media only screen and (max-width: 910px) {
  .content {
    padding: 5px;
  }
  .p-datatable-table-container {
    width: 100% !important;
  }
  .p-datatable-table-head {
    width: 100% !important;
  }
  .p-datatable-table-body {
    width: 100% !important;
  }
}
.boat__updates {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.updateBox {
  display: flex;
  align-items: center;
  gap: 15px;
}
.updateBox button {
  border-radius: 6px;
  font-size: 12px;
  font-family: "Poppins";
  padding: 5px 24px;
  border: 1px solid #3699ff;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
}
.exportBtn {
  background: none;
}
.addBtn {
  background: #3699ff;
  color: white;
}
</style>
