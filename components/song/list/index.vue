<template>
  <div class="pt-16 h-screen">
    <h1 class="text-primary-50 font-bold text-center text-5xl pt-10">
      Song List
    </h1>
    <SongAdd />
    <div class="bg-surface-900 flex flex-wrap gap-4 mx-auto justify-center px-36 py-20">
      <div
        v-for="song in songStore.songs"
        :key="song.id"
        class="col-span-1"
      >
        <SongCard
          :song="song"
          :is-new="false"
        />
      </div>
    </div>
  </div>
</template>
  
  <script setup>

const songStore = useSongStore();

</script>

<style>
.shadow-custom {
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
              0 0 0 1px hsla(0, 0%, 0%, 0.2),
              0 0.5px 1px hsla(0, 0%, 0%, 0.05),
              0 1px 2px hsla(0, 0%, 0%, 0.1),
              0 5px 10px hsla(0, 0%, 0%, 0.25);
}

.no-border:focus {
  box-shadow: none;
}

</style>