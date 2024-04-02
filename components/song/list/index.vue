<template>
  <div class="bg-surface-900 flex flex-wrap gap-4 mx-auto justify-center p-36">
    <div
      v-for="(song, index) in songs"
      :key="index"
      class="col-span-1"
    >
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
  </div>
</template>
  
  <script setup>

    import { ref } from "vue";

    const song = ref({});

      function favorite(id) {
        song.value = songs.value.find(song => (song.id === id));
        song.value.favorite = !song.value.favorite
        console.log(song.value)
      }

      const songs = ref([
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
      },
      {
          "id": 9,
          "name": "We Are Never Ever Getting Back Together",
          "duration": "3:13",
          "artist": "Taylor Swift",
          "album": "Red",
          "year": 2012,
          "favorite": false
      },
      {
          "id": 10,
          "name": "No Tears Left to Cry",
          "duration": "3:25",
          "artist": "Ariana Grande",
          "album": "Sweetener",
          "year": 2018,
          "favorite": false
      },
      {
          "id": 11,
          "name": "deja vu",
          "duration": "3:34",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021,
          "favorite": false
      },
      {
          "id": 12,
          "name": "The Middle of Starting Over",
          "duration": "3:32",
          "artist": "Sabrina Carpenter",
          "album": "Eyes Wide Open",
          "year": 2014,
          "favorite": false
      },
      {
          "id": 13,
          "name": "ME!",
          "duration": "3:13",
          "artist": "Taylor Swift",
          "album": "Lover",
          "year": 2019,
          "favorite": false
      },
      {
          "id": 14,
          "name": "Breathin",
          "duration": "3:18",
          "artist": "Ariana Grande",
          "album": "Sweetener",
          "year": 2018,
          "favorite": false
      },
      {
          "id": 15,
          "name": "Brutal",
          "duration": "2:23",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021,
          "favorite": false
      },
      {
          "id": 16,
          "name": "Almost Love",
          "duration": "3:23",
          "artist": "Sabrina Carpenter",
          "album": "Singular: Act I",
          "year": 2018,
          "favorite": false
      },
      {
          "id": 17,
          "name": "Wildest Dreams",
          "duration": "3:40",
          "artist": "Taylor Swift",
          "album": "1989",
          "year": 2014,
          "favorite": false
      },
      {
          "id": 18,
          "name": "Into You",
          "duration": "4:04",
          "artist": "Ariana Grande",
          "album": "Dangerous Woman",
          "year": 2016,
          "favorite": false
      },
      {
          "id": 19,
          "name": "hope ur ok",
          "duration": "4:04",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021,
          "favorite": false
      },
      {
          "id": 20,
          "name": "Why",
          "duration": "2:51",
          "artist": "Sabrina Carpenter",
          "album": "Evolution",
          "year": 2016,
          "favorite": false
      }
  ])
  

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