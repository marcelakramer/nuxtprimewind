<template>
  <div>
    <Toast /> 
    <Card class="shadow-custom bg-surface-800 w-96 h-56 hover:bg-surface-600">
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
        <div class="text-primary-50">
          {{ song.title }}
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

const show = (severity: "secondary" | "success" | "info" | "contrast" | "warn" | "error" | undefined, summary: string, detail: string) => {
    toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
};

const favorite = (song: Song) => {
  if (isFavorite(song)) {
    favoriteStore.removeFavorite(song);
    show(undefined, "Deslike Song", "Song removed from favorites.");
  } else {
    favoriteStore.addFavorite(song);
    show(undefined, "Like Song", "Song added to favorites.");
  }
  
};

const isFavorite = (song: Song) => {
  return favoriteStore.isFavorite(song);
}

const deleteSong = (song: Song) => {
    favoriteStore.removeFavorite(song);
    songStore.deleteSong(song);
    show("error", "Delete song", "Song was deleted from the list.")
}

const addSong = (song: Song) => {
  if (songStore.addSong(song)) {
    show("success", "Add song", "Song was added to the list.")  
  } else {
    show("error", "Existing song", "Song is already on the list.")
  }
}

</script>
  