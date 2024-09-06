<script setup>
import { ref, watch } from "vue";
import SplitButton from "primevue/splitbutton";
import { useToast } from "primevue/usetoast";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

const emit = defineEmits(["saveBoat"]);
const FILE_SIZE = 5 * 1024;
const selectedImage = ref("");

const props = defineProps({
  boat: {
    type: Object,
    default: () => ({}),
  },
});

const data = ref({
  file: props.boat.file || null,
  fileDataUrl: props.boat.fileDataUrl || null,
  size: props.boat.size || null,
});

watch(
  () => props.boat,
  (newValue) => {
    data.value = {
      file: newValue.file || null,
      fileDataUrl: newValue.fileDataUrl || null,
      size: newValue.size || null,
    };
  },

  { deep: true }
);

const rules = {
  fileDataUrl: { required },
};

const v$ = useVuelidate(rules, data);

const handleFileUpload = (event) => {
  const selectedFile = event.target.files[0];
  if (selectedFile) {
    if (selectedFile.size > FILE_SIZE) {
      toast.add({
        severity: "warn",
        summary: "Warning",
        detail: "File size exceeds 5MB limit.",
        life: 3000,
      });
      data.value = {
        file: null,
        fileDataUrl: null,
        size: null,
      };
      v$.value.$reset();
    } else {
      data.value.file = selectedFile;
      data.value.size = selectedFile.size;

      const reader = new FileReader();
      reader.onload = () => {
        data.value.fileDataUrl = reader.result;
        v$.value.$touch();
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  selectedImage.value = data.value.fileDataUrl;
};
const toast = useToast();

const saveFile = () => {
  v$.value.$touch();
  if (!v$.value.$pending && !v$.value.$invalid) {
    if (data.value.size > FILE_SIZE && data.value.fileDataUrl) {
      toast.add({
        severity: "warn",
        summary: "Warning",
        detail: "File size exceeds 5MB limit.",
        life: 3000,
      });
    } else {
      const jsonData = {
        fileName: data.value.file.name,
        fileType: data.value.file.type,
        fileDataUrl: data.value.fileDataUrl,
        fileSize: data.value.size,
      };

      toast.add({
        severity: "success",
        summary: "Success",
        detail: "File successfully selected and saved.",
        life: 3000,
      });
      console.log(jsonData);
      emit("saveBoat", jsonData);
    }
  } else {
    toast.add({
      severity: "warn",
      summary: "Warning",
      detail: "No file selected or file data is invalid.",
      life: 3000,
    });
  }
};

watch(
  () => data.value.fileDataUrl,
  () => {
    v$.value.$touch();
  }
);
</script>

<template>
  <div class="imageBox">
    <div class="panel_content">
      <div class="uploadBox">
        <span class="upload_title">Media</span>
        <div class="imageOption">
          <img :src="data.fileDataUrl" class="image" alt="" />
          <input type="file" @change="handleFileUpload" />
        </div>
        <SplitButton label="Save Changes" @click="saveFile" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.uploadBox {
  width: 100%;
  display: flex;
  justify-content: center;
}
.p-splitbutton {
  padding: 10px !important;
  font-size: 14px !important;
  height: 0;
  margin: 10px 0 0 0 !important;
}

.upload_title {
  font-family: "Roboto";
  font-size: 20px;
  font-weight: 500;
}

.uploadBox input {
  margin: 10px 0 0 0;
}

.imageOption {
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
}

.image {
  width: 80px;
  height: 80px;
}
</style>
