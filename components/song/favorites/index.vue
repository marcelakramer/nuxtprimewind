<template>
  <div class="h-screen pt-16">
    <h1 class="text-primary-50 font-bold text-center text-5xl pt-10">
      Favorite Songs
    </h1>
    <DataTable
      v-if="favoriteStore.favorites.length > 0"
      :value="favoriteStore.favorites"
      class="mx-80 py-20"
    >
      <Column
        field="title"
        header="Title"
        class="text-primary-50 bg-surface-800 pl-16 border-surface-700"
      />
      <Column
        field="artist"
        header="Artist"
        class="text-primary-50 bg-surface-800 pl-16 border-surface-700"
      />
      <Column
        field="album"
        header="Album"
        class="text-primary-50 bg-surface-800 pl-16 border-surface-700"
      />
      <Column
        field="duration"
        header="Duration"
        class="text-primary-50 bg-surface-800 pl-16 border-surface-700"
      />
      <Column
        field="year"
        header="Year"
        class="text-primary-50 bg-surface-800 pl-16 border-surface-700"
      />
      <Column
        header=""
        class="text-primary-50 bg-surface-800 pl-16 border-surface-700"
      >
        <template #body="slotProps">
          <Button
            icon="pi pi-times"
            severity="danger"
            text
            @click="removeFavorite(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
    <div
      v-else
      class="flex justify-center pt-16"
    >
      <NuxtLink to="/songs">
        <Button 
          label="Browse songs"
          outlined
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Song } from '~/interfaces/song';

const favoriteStore = useFavoriteStore();
const toast = useToast();

const removeFavorite = (song: Song) => {
  favoriteStore.removeFavorite(song);
  toast.add({severity: undefined, summary: "Deslike Song", detail: "Song removed from favorites.", life: 3000});
}

</script>