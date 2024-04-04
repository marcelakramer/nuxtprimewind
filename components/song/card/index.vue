<template>
  <div>
    <Card class="shadow-custom bg-surface-900 w-96 h-56 hover:bg-surface-700">
      <template #header>
        <div class="flex justify-end">
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
      </template>
    </Card>
  </div>
</template>
  
<script setup lang="ts">

// eslint-disable-next-line vue/require-prop-types
defineProps(["song"]);

const favoriteStore = useFavoriteStore();
const songStore = useSongStore();
  
const favorite = (song: Song) => {
  if (isFavorite(song)) {
    favoriteStore.removeFavorite(song);
  } else {
    favoriteStore.addFavorite(song);
  }
  
};

const isFavorite = (song: Song) => {
  return favoriteStore.isFavorite(song);
}

const deleteSong = (song: Song) => {
    songStore.deleteSong(song);
}

</script>
  