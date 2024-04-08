<template>
  <div class="flex justify-center pt-16">
    <Toast />
    <Button
      label="Add song"
      icon="pi pi-plus"
      @click="showDialog"
    />
    <Dialog
      v-model:visible="dialogVisible"
      class="text-primary-50"
      modal
      header="Add Song"
      :style="{width: '25rem'}"
    >
      <span class="text-primary-200 block mb-5">Add a new song to the list.</span>
      <div class="flex flex-col justify-center items-center text-primary-50">
        <div
          v-for="(field, key) in fields"
          :key="key"
          class="flex w-72 justify-between items-center mb-5"
        >
          <label
            :for="key"
            class="font-semibold w-6rem"
          >{{ field.label }}</label>
          <InputText
            :id="key"
            v-model="formData[key]"
            autocomplete="off"
            :placeholder="field.placeholder"
          />
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <Button
          class="w-20"
          type="button"
          label="Save"
          @click="saveSong"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">

const songStore = useSongStore();
const toast = useToast();
const dialogVisible = ref(false);
const formData = ref({
  id: '',
  title: '',
  artist: '',
  album: '',
  duration: '',
  year: '',
  image: ''
});

const fields = {
  title: { label: 'Title', placeholder: 'Ex: Always' },
  artist: { label: 'Artist', placeholder: 'Ex: Daniel Caesar' },
  album: { label: 'Album', placeholder: 'Ex: NEVER ENOUGH' },
  duration: { label: 'Duration', placeholder: 'Ex: 3:45' },
  year: { label: 'Year', placeholder: 'Ex: 2024' }
};

const showDialog = () => {
  dialogVisible.value = true;
};

const show = (severity: "secondary" | "success" | "info" | "contrast" | "warn" | "error" | undefined, summary: string, detail: string) => {
  toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
};

const saveSong = () => {
  if (!validateForm()) {
    show("error", "Form error", "There is some error in the form fields.")
    return
  }
  if (!songStore.addSong(formData.value)) {
    show("error", "Existing song", "Song is already on the list.")
  } else {
    show("success", "Add song", "Song was added to the list.");
  }
  resetForm();
  dialogVisible.value = false;
};

const validateForm = () => {
  const { title, artist, album, duration, year } = formData.value;
  if (!title || !artist || !album || !duration || !year) {
    return false;
  }
  const durationPattern = /^\d+:\d+$/;
  if (!durationPattern.test(duration)) {
    return false;
  }
  if (isNaN(+year)) {
    return false;
  }
  return true;
};

const resetForm = () => {
  formData.value = {
    id: '',
    title: '',
    artist: '',
    album: '',
    duration: '',
    year: '',
    image: ''
  };
};

</script>
