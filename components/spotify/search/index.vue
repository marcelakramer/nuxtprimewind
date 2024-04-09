<template>
  <div class="h-screen">
    <div class="pt-16 flex flex-col justify-center items-center gap-4">
      <h1 class="text-primary-50 font-bold text-center text-5xl pt-10">
        Search a song in Spotify
      </h1>
      <div class="pt-16">
        <InputText
          id="trackName"
          v-model="trackName"
          placeholder="Type a song name..."
          autocomplete="off"
          class="mx-5"
        />
        <Button 
          label="Search"
          @click="getUserSong()"
        />
      </div>
      <div
        v-if="tracks.length !== 0"
        class="bg-surface-900 flex flex-wrap gap-4 mx-auto justify-center px-36 py-20"
      >
        <div
          v-for="track in tracks"
          :key="track.name"
        >
          <SongCard
            :song="{
              title: track.name,
              artist: track.artists[0].name,
              album: track.album.name,
              duration: formatSecondsToTime(track.duration_ms),
              year: track.album.release_date.slice(0, 4),
              image: track.album.images[0].url
            }"
            :is-new="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import type { SpotifyAPITrack } from '~/interfaces/spotifyAPITrack';
  
  const spotifyAPIStore = useSpotifyAPIStore();
  const refreshTokenResponse = ref();
  const tracks = ref<SpotifyAPITrack[]>([]);
  const trackName = ref('');
  const searchResponse = ref();
  
  onMounted(async () => {
    if (new Date(spotifyAPIStore.expiresAt) < new Date()){
        refreshTokenResponse.value  = await getAccessTokenByRefreshToken(spotifyAPIStore.refreshToken)
        if (refreshTokenResponse.value !== undefined) {
          spotifyAPIStore.setAccessToken(refreshTokenResponse.value.access_token);
          spotifyAPIStore.setExpiresAt(getExpiresAt(refreshTokenResponse.value.expires_in));
        }
      }
  })
  
  const getUserSong = async () => {
    searchResponse.value = await getSong(spotifyAPIStore.accessToken, trackName.value);
    tracks.value = searchResponse.value.tracks.items
  }
  
  </script>