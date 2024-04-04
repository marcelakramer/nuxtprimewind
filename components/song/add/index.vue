<template>
  <div class="flex justify-center pt-16">
    <Button
      label="Add song"
      icon="pi pi-plus"
      @click="visible = true"
    />
    <Dialog
      v-model:visible="visible"
      class="text-primary-50"
      modal
      header="Add Song"
      :style="{width: '25rem'}"
    >
      <span class="text-primary-200 block mb-5">Add a new song to the list.</span>
      <div class="flex flex-col justify-center items-center text-primary-50">
        <div class="flex w-72 justify-between items-center mb-5">
          <label
            for="title"
            class="font-semibold w-6rem"
          >Title</label>
          <InputText
            id="title"
            v-model="title"
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
            v-model="artist"
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
            v-model="album"
            autocomplete="off"
          />
        </div>
        <div class="flex w-72 justify-between items-center mb-5">
          <label
            for="duration"
            class="font-semibold w-6rem"
          >Duration</label>
          <InputText
            id="duration"
            v-model="duration"
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
          label="Save"
          @click="addSong()"
        />
      </div>
    </Dialog>
  </div>
</template>

<script setup lang="ts">

const visible = ref(false);
const title = ref('');
const artist = ref('');
const album = ref('');
const duration = ref('');
const year = ref('');
const songStore = useSongStore()




const addSong = () => {
    songStore.addSong({
        title: title.value,
        artist: artist.value,
        album: album.value,
        duration: duration.value,
        year: year.value
    });
    visible.value = false;
    title.value = '';
    artist.value = '';
    album.value = '';
    duration.value = '';
    year.value = '';
}

</script>