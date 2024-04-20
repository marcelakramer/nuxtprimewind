<template>
  <div class="h-screen pt-32">
    <h1 class="text-primary-50 font-bold text-center text-5xl">
      Favorite Songs
    </h1>
    <div
      v-if="favoriteStore.favorites.length > 0"
      class="bg-surface-900 flex flex-wrap gap-4 mx-auto justify-center px-36 py-20"
    >
      <div
        v-for="favorite in favoriteStore.favorites"
        :key="favorite.id"
        class="col-span-1"
      >
        <SongCard
          :song="favorite"
          :is-new="false"
          :is-from-favorites="true"
        />
      </div>
    </div>
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

const favoriteStore = useFavoriteStore();

</script>