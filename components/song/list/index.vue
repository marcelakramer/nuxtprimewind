<template>
  <div class="bg-surface-900 grid grid-cols-4 gap-4 p-36">
    <div
      v-for="(song, index) in songs"
      :key="index"
      class="col-span-1"
    >
      <Card class="shadow-custom">
        <template #header>
          <div class="flex justify-end">
            <Button
              icon="pi pi-heart"
              severity="help"
              text
              aria-label="Favorite"
            />
          </div>
        </template>
        <template #title>
          {{ song.name }}
        </template>
        <template #content>
          <p>{{ song.artist }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>
  
  <script setup>
  
      const songs = [
      {
          "id": 1,
          "name": "Shake It Off",
          "duration": "3:39",
          "artist": "Taylor Swift",
          "album": "1989",
          "year": 2014
      },
      {
          "id": 2,
          "name": "Thank U, Next",
          "duration": "3:27",
          "artist": "Ariana Grande",
          "album": "Thank U, Next",
          "year": 2019
      },
      {
          "id": 3,
          "name": "drivers license",
          "duration": "4:02",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021
      },
      {
          "id": 4,
          "name": "Skin",
          "duration": "3:15",
          "artist": "Sabrina Carpenter",
          "album": "Skin - Single",
          "year": 2021
      },
      {
          "id": 5,
          "name": "Love Story",
          "duration": "3:55",
          "artist": "Taylor Swift",
          "album": "Fearless",
          "year": 2008
      },
      {
          "id": 6,
          "name": "7 Rings",
          "duration": "2:58",
          "artist": "Ariana Grande",
          "album": "Thank U, Next",
          "year": 2019
      },
      {
          "id": 7,
          "name": "good 4 u",
          "duration": "2:58",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021
      },
      {
          "id": 8,
          "name": "Skinny Dipping",
          "duration": "3:08",
          "artist": "Sabrina Carpenter",
          "album": "Singular: Act II",
          "year": 2019
      },
      {
          "id": 9,
          "name": "We Are Never Ever Getting Back Together",
          "duration": "3:13",
          "artist": "Taylor Swift",
          "album": "Red",
          "year": 2012
      },
      {
          "id": 10,
          "name": "No Tears Left to Cry",
          "duration": "3:25",
          "artist": "Ariana Grande",
          "album": "Sweetener",
          "year": 2018
      },
      {
          "id": 11,
          "name": "deja vu",
          "duration": "3:34",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021
      },
      {
          "id": 12,
          "name": "The Middle of Starting Over",
          "duration": "3:32",
          "artist": "Sabrina Carpenter",
          "album": "Eyes Wide Open",
          "year": 2014
      },
      {
          "id": 13,
          "name": "ME!",
          "duration": "3:13",
          "artist": "Taylor Swift",
          "album": "Lover",
          "year": 2019
      },
      {
          "id": 14,
          "name": "Breathin",
          "duration": "3:18",
          "artist": "Ariana Grande",
          "album": "Sweetener",
          "year": 2018
      },
      {
          "id": 15,
          "name": "Brutal",
          "duration": "2:23",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021
      },
      {
          "id": 16,
          "name": "Almost Love",
          "duration": "3:23",
          "artist": "Sabrina Carpenter",
          "album": "Singular: Act I",
          "year": 2018
      },
      {
          "id": 17,
          "name": "Wildest Dreams",
          "duration": "3:40",
          "artist": "Taylor Swift",
          "album": "1989",
          "year": 2014
      },
      {
          "id": 18,
          "name": "Into You",
          "duration": "4:04",
          "artist": "Ariana Grande",
          "album": "Dangerous Woman",
          "year": 2016
      },
      {
          "id": 19,
          "name": "hope ur ok",
          "duration": "4:04",
          "artist": "Olivia Rodrigo",
          "album": "SOUR",
          "year": 2021
      },
      {
          "id": 20,
          "name": "Why",
          "duration": "2:51",
          "artist": "Sabrina Carpenter",
          "album": "Evolution",
          "year": 2016
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
</style>