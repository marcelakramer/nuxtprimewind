<template>
  <div class="pt-20 h-screen">
    <h1 class="text-primary-50 font-bold text-center text-5xl pt-10">
      Song List
    </h1>
    <SongAdd
      :songs="songs"
      @song-added="addSongToList"
    />
    <div class="bg-surface-900 flex flex-wrap gap-4 mx-auto justify-center px-36 py-20">
      <div
        v-for="(song, index) in songs"
        :key="index"
        class="col-span-1"
      >
        <SongCard
          :song="song"
          @favorite="favorite"
          @delete-song="deleteSong"
        />
      </div>
    </div>
  </div>
</template>
  
  <script setup>

import { ref } from "vue";

const songs = ref([]);
const songToFavorite = ref({});

const addSongToList = (newSong) => {
    songs.value.unshift({
        id: songs.value.length + 1,
        name: newSong.name,
        artist: newSong.artist,
        album: newSong.album,
        year: newSong.year,
        favorite: false
    });
}

const favorite = (songId) => {
  songToFavorite.value = songs.value.find((s) => s.id === songId);
  songToFavorite.value.favorite = !songToFavorite.value.favorite;

}

const deleteSong = (songId) => {
  songs.value = songs.value.filter(s => s.id !== songId);
}

songs.value = [
  {
      "id": 1,
      "name": "Shake It Off",
      "duration": "3:39",
      "artist": "Taylor Swift",
      "album": "1989",
      "year": 2014,
      "favorite": false
  },
  {
      "id": 2,
      "name": "Thank U, Next",
      "duration": "3:27",
      "artist": "Ariana Grande",
      "album": "Thank U, Next",
      "year": 2019,
      "favorite": false
  },
  {
      "id": 3,
      "name": "drivers license",
      "duration": "4:02",
      "artist": "Olivia Rodrigo",
      "album": "SOUR",
      "year": 2021,
      "favorite": false
  },
  {
      "id": 4,
      "name": "Skin",
      "duration": "3:15",
      "artist": "Sabrina Carpenter",
      "album": "Skin - Single",
      "year": 2021,
      "favorite": false
  },
  {
      "id": 5,
      "name": "Love Story",
      "duration": "3:55",
      "artist": "Taylor Swift",
      "album": "Fearless",
      "year": 2008,
      "favorite": false
  },
  {
      "id": 6,
      "name": "7 Rings",
      "duration": "2:58",
      "artist": "Ariana Grande",
      "album": "Thank U, Next",
      "year": 2019,
      "favorite": false
  },
  {
      "id": 7,
      "name": "good 4 u",
      "duration": "2:58",
      "artist": "Olivia Rodrigo",
      "album": "SOUR",
      "year": 2021,
      "favorite": false
  },
  {
      "id": 8,
      "name": "Skinny Dipping",
      "duration": "3:08",
      "artist": "Sabrina Carpenter",
      "album": "Singular: Act II",
      "year": 2019,
      "favorite": false
  }
]

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