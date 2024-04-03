<template>
  <div class="flex justify-center pt-16">
    <Button
      icon="pi pi-plus"
      @click="visible = true"
    />
    <Dialog
      v-model:visible="visible"
      modal
      header="Add Song"
      :style="{width: '25rem'}"
    >
      <span class="p-text-secondary block mb-5">Add a new song to the list.</span>
      <div class="flex flex-col justify-center items-center">
        <div class="flex w-72 justify-between items-center mb-5">
          <label
            for="name"
            class="font-semibold w-6rem"
          >Name</label>
          <InputText
            id="name"
            v-model="songName"
            autocomplete="off"
          />
        </div>
        <div class="flex w-72 justify-between items-center mb-5">
          <label
            for="artist"
            class="font-semibold w-6rem"
          >Artist</label>
          <InputText
            id="artist"
            v-model="artistName"
            autocomplete="off"
          />
        </div>
        <div class="flex w-72 justify-between items-center mb-5">
          <label
            for="album"
            class="font-semibold w-6rem"
          >Album</label>
          <InputText
            id="album"
            v-model="albumName"
            autocomplete="off"
          />
        </div>
        <div class="flex w-72 justify-between items-center mb-5">
          <label
            for="year"
            class="font-semibold w-6rem"
          >Year</label>
          <InputText
            id="year"
            v-model="year"
            autocomplete="off"
          />
        </div>
      </div>
      <div class="flex justify-center gap-2">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="visible = false"
        />
        <Button
          type="button"
          label="Save"
          @click="addSong()"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from "vue";

const visible = ref(false);
const songName = ref('');
const artistName = ref('');
const albumName = ref('');
const year = ref('');
const emit = defineEmits(["songAdded"]);


// eslint-disable-next-line vue/require-prop-types
defineProps(["songs"]);

const addSong = () => {
    emit("songAdded", {
        name: songName.value,
        artist: artistName.value,
        album: albumName.value,
        year: year.value
    });
    visible.value = false;
    songName.value = '';
    artistName.value = '';
}

</script>