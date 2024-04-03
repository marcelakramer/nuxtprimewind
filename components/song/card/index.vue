<template>
  <div>
    <Card class="shadow-custom bg-surface-900 w-96 h-56 hover:bg-surface-700">
      <template #header>
        <div class="flex justify-end">
          <Button
            v-if="song.favorite"
            class="no-border"
            icon="pi pi-heart-fill"
            severity="help"
            text
            rounded
            aria-label="Favorite"
            @click="favorite(song.id)"
          />
          <Button
            v-else
            class="no-border animate-pulse"
            icon="pi pi-heart"
            severity="help"
            text
            rounded
            aria-label="Not Favorite"
            @click="favorite(song.id)"
          />
          <Button
            class="no-border"
            icon="pi pi-trash"
            severity="danger"
            text
            rounded
            aria-label="Delete"
            @click="deleteSong(song.id)"
          />
        </div>
      </template>
      <template #title>
        <div class="text-primary-50">
          {{ song.name }}
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
  
<script setup>

const emit = defineEmits(["favorite", "deleteSong"])

// eslint-disable-next-line vue/require-prop-types
defineProps(["song"]);
  
const favorite = (songId) => {
    emit("favorite", songId);
};

const deleteSong = (songId) => {
    emit("deleteSong", songId);
}

</script>
  