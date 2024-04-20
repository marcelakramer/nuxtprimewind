<template>
  <div class="h-screen">
    <div class="pt-32 flex flex-col justify-center items-center gap-4">
      <div class="flex items-center justify-center">
        <h1 class="text-primary-50 font-bold text-center text-5xl">
          Search in
        </h1>
        <img
          class="w-64 ml-4"
          src="../../../assets/images/spotify/Spotify_Logo_RGB_White.png"
          alt="Spotify Logo"
        >
      </div>
      <div class="pt-8">
        <InputText
          id="trackName"
          v-model="trackName"
          placeholder="Type a song name..."
          autocomplete="off"
          class="mx-5"
          @keyup.enter="getUserSong()"
        />
        <Button 
          label="Search"
          @click="getUserSong()"
        />
      </div>
      <ProgressSpinner
        v-if="isLoading"
        stroke-width="6" 
        class="mt-40 w-24 text-primary-400"
      />
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
              image: track.album.images[0].url,
              fromSpotify: true,
              songSpotifyUrl: track.external_urls.spotify,
              artistSpotifyUrl: track.artists[0].external_urls.spotify,
              albumSpotifyUrl: track.album.external_urls.spotify,
            }"
            :is-new="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
  import type { Track } from '~/interfaces/spotifyAPI/track';
  
  const spotifyAPIStore = useSpotifyAPIStore();
  const refreshTokenResponse = ref();
  const tracks = ref<Track[]>([]);
  const trackName = ref('');
  const searchResponse = ref();
  const isLoading = ref(false);
  
  onMounted(async () => {
    if (new Date(spotifyAPIStore.expiresAt) < new Date()){
        refreshTokenResponse.value  = await getAccessTokenByRefreshToken(spotifyAPIStore.refreshToken)
        if (refreshTokenResponse.value !== undefined) {
          spotifyAPIStore.setAccessToken(refreshTokenResponse.value.access_token);
          spotifyAPIStore.setExpiresAt(getExpiresAt(refreshTokenResponse.value.expires_in));
        } else {
          spotifyAPIStore.auth = false;
        }
      }
  })
  
  const getUserSong = async () => {
    tracks.value = [];
    isLoading.value = true;
    searchResponse.value = await getSong(spotifyAPIStore.accessToken, trackName.value);
    isLoading.value = false;
    tracks.value = searchResponse.value.tracks.items;
  }
  
  </script>