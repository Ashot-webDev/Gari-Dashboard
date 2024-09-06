<script setup>
import { ref, onMounted } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const props = defineProps({
  data: Array,
});

const emit = defineEmits(["onAction"]);

const image = ref("src/assets/boats/logo.svg");

const onDelete = (slotProps) => {
  emit("onAction", "delete", slotProps);
};

const onEdit = (slotProps) => {
  emit("onAction", "edit", slotProps);
};
</script>

<template>
  <DataTable
    v-if="props.data"
    :value="props.data"
    paginator
    :rows="5"
    tableStyle="min-width: 50rem"
    class="listBox"
  >
    <Column header="" style="width: 10%">
      <template #body="">
        <div class="imageBox">
          <img
            :src="image"
            alt="Boat Image"
            style="width: 40px; height: 40px"
          />
        </div>
      </template>
    </Column>
    <Column
      field="name"
      header="Boat"
      style="width: 25%; text-align: left; margin: 20px"
      headerClass="header-style"
    ></Column>
    <Column
      field="status"
      header="Status"
      style="width: 25%; text-align: left; margin: 20px"
      headerClass="header-style"
    >
      <template #body="slotProps">
        <span
          :class="{
            activated: slotProps.data.checkInfo2 === 'Activated',
            deactivated:
              slotProps.data.checkInfo2 === 'Deactivated' ||
              slotProps.data.checkInfo2 === 'Rejected',
          }"
        >
          {{ slotProps.data.checkInfo2 }}
        </span>
      </template>
    </Column>
    <Column
      header="Price"
      style="width: 25%; text-align: left; margin: 20px"
      headerClass="header-style"
    >
      <template #body="slotProps">
        € {{ slotProps.data.price.toString() }}
      </template>
    </Column>
    <Column
      field="capacity"
      header="Capacity"
      style="width: 25%; text-align: left; margin: 20px"
      headerClass="header-style"
    >
      <template #body="slotProps">
        {{ slotProps.data.capacity }} people
      </template>
    </Column>
    <Column header="Action" style="width: 25%" headerClass="header-style">
      <template #body="slotProps">
        <div class="action-buttons">
          <img
            src="../../assets/boats/settings.svg"
            alt="Settings"
            class="action-icon settings-icon"
          />
          <img
            src="../../assets/boats/edit.svg"
            alt="Edit"
            class="action-icon edit-icon"
            @click="onEdit(slotProps.data)"
          />
          <img
            src="../../assets/boats/delete.svg"
            alt="Delete"
            class="action-icon delete-icon"
            @click="onDelete(slotProps.data)"
          />
        </div>
      </template>
    </Column>
  </DataTable>
</template>

<style scoped>
.listBox {
  width: 100%;
  padding: 10px;
  background: #ffffff;
  border-radius: 12px;
  margin: 20px 0 0 0;
}

::v-deep .header-style {
  color: #b5b5c3 !important;
  font-weight: 500;
  font-family: "Poppins";
  font-size: 12px;
  padding: 10px;
}

.action-buttons {
  width: 120px;
  display: flex;
}

.action-icon {
  transition: all 0.2s ease;
  background: #f2f5f8;
  cursor: pointer;
  margin: 2px;
  border-radius: 6px;
}

.action-icon:active {
  transform: Scale(0.9);
}

.activated {
  font-size: 11px;
  font-family: "Poppins";
  font-weight: bold;
  background: #d7f9ef;
  color: #0bb783;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100px;
  text-align: center;
  border-radius: 6px;
}

.deactivated {
  font-size: 11px;
  font-family: "Poppins";
  font-weight: bold;
  background: #ffe2e5;
  color: #f64e60;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100px;
  text-align: center;
  border-radius: 6px;
}

::v-deep .p-paginator {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 6px;
  padding: 5px;
}

::v-deep .p-paginator-first {
  display: none !important;
}

::v-deep .p-paginator-last {
  display: none !important;
}

.imageBox {
  width: 40px;
  height: 40px;
}

.imageBox img {
  width: 100%;
  height: auto;
}
</style>
