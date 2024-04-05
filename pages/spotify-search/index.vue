<template>
  <div class="h-screen">
    <div class="pt-20 flex flex-col justify-center items-center gap-4">
      <div class="m-4">
        <label
          for="songId"
          class="font-semibold w-6rem text-primary-50"
        >ID</label>
        <InputText
          id="songId"
          v-model="songId"
          autocomplete="off"
          class="mx-5"
        />
        <Button 
          label="musica bb"
          @click="getUserSong()"
        />
      </div>
      <p class="text-primary-50 font-bold text-3xl">
        Name: {{ song.title }}
      </p>
      <p class="text-primary-50 font-bold text-3xl">
        Artist: {{ song.artist }}
      </p>
      <p class="text-primary-50 font-bold text-3xl">
        Album: {{ song.album }}
      </p>
      <p class="text-primary-50 font-bold text-3xl">
        Release Date: {{ song.date }}
      </p>
      <img class="w-32 h-32" :src="song.image">
    </div>
  </div>
</template>

<script setup lang="ts">

import { getSong } from '../../composables/getSong';

const song = ref({});
const songId = ref('');
const songResponse = ref({});
const spotifyAPIInfoStore = useSpotifyAPIInfoStore();

const getUserSong = async () => {
  songResponse.value = await getSong(spotifyAPIInfoStore.accessToken, songId.value);
  song.value = {
    album: songResponse.value.album.name,
    date: songResponse.value.album.release_date,
    artist: songResponse.value.artists[0].name,
    title: songResponse.value.name,
    image: songResponse.value.album.images[0].url
  }
}

</script>