<template>
  <div class="h-screen">
    <h1 class="pt-56 text-center text-4xl font-bold text-primary-50">
      Wait while we redirect you to the Spotify search...
    </h1>
  </div>
</template>
  
  <script setup lang="ts">
  
  const code = ref();
  const route = useRoute();
  const spotifyAPIStore = useSpotifyAPIStore();
  const accessTokenResponse = ref();
  
  onMounted(async () => {
    code.value = code.value = route.query.code;
    if (code.value !== undefined) {
      spotifyAPIStore.changeAuth(true);
      accessTokenResponse.value = await getAccessToken(code.value);
      if (accessTokenResponse.value !== undefined) {
        spotifyAPIStore.setAccessToken(accessTokenResponse.value.access_token);
        spotifyAPIStore.setRefreshToken(accessTokenResponse.value.refresh_token);
        spotifyAPIStore.setExpiresAt(getExpiresAt(accessTokenResponse.value.expires_in));
      }
    }
    navigateTo('/spotify/search');
  });
  
  </script>