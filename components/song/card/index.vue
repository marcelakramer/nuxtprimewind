<template>
  <div>
    <Card class="shadow-custom bg-surface-800 w-96 h-64 hover:bg-surface-600">
      <template #header>
        <div class="flex justify-end">
          <Button
            v-if="isNew"
            class="no-border"
            icon="pi pi-plus"
            text
            rounded
            aria-label="Add Song"
            @click="addSong(song)"
          />
          <div v-if="!isNew">
            <Button
              v-if="isFavorite(song)"
              class="no-border"
              icon="pi pi-heart-fill"
              severity="help"
              text
              rounded
              aria-label="Favorite"
              @click="favorite(song)"
            />
            <Button
              v-else
              class="no-border animate-pulse"
              icon="pi pi-heart"
              severity="help"
              text
              rounded
              aria-label="Not Favorite"
              @click="favorite(song)"
            />
            <Button
              class="no-border"
              icon="pi pi-trash"
              severity="danger"
              text
              rounded
              aria-label="Delete"
              @click="deleteSong(song)"
            />
          </div>
        </div>
      </template>
      <template #title>
        <div class="flex gap-5 items-center">
          <img
            v-if="!song.image"
            class="w-16"
            src="../../../assets/images/song.svg"
            alt="song-image"
          >
          <img
            v-else
            class="w-16"
            :src="song.image"
            alt="song-image"
          >
          <div class="text-primary-50">
            {{ song.title.slice(0, 52) }}
          </div>
        </div>
      </template>
      <template #content>
        <p class="text-primary-100">
          {{ song.artist }}
        </p>
        <p class="text-primary-300 text-xs">
          {{ song.album }} ({{ song.year }})
        </p>
        <div class="flex justify-end">
          <p
            v-duration-formatted
            class="text-primary-200 text-xs"
          >
            {{ song.duration }}
          </p>
        </div>
      </template>
    </Card>
  </div>
</template>
  
<script setup lang="ts">

import type { Song } from '~/interfaces/song';

// eslint-disable-next-line vue/require-prop-types
defineProps(["song", "isNew"]);

const favoriteStore = useFavoriteStore();
const songStore = useSongStore();
const toast = useToast();


const favorite = (song: Song) => {
  if (isFavorite(song)) {
    favoriteStore.removeFavorite(song);
    toast.add({severity: undefined, summary: "Deslike Song", detail: "Song removed from favorites.", life: 3000});
  } else {
    favoriteStore.addFavorite(song);
    toast.add({severity: undefined, summary: "Like Song", detail: "Song added to favorites.", life: 3000});
  }
  
};

const isFavorite = (song: Song) => {
  return favoriteStore.isFavorite(song);
}

const deleteSong = (song: Song) => {
    favoriteStore.removeFavorite(song);
    songStore.deleteSong(song);
    toast.add({severity: "error", summary: "Delete song", detail: "Song was deleted from the list.", life: 3000})
}

const addSong = (song: Song) => {
  if (songStore.addSong(song)) {
    toast.add({severity: "success", summary: "Add song", detail: "Song was added to the list.", life: 3000})  
  } else {
    toast.add({severity: "error", summary: "Existing song", detail: "Song is already on the list.", life: 3000})
  }
}

</script>
  