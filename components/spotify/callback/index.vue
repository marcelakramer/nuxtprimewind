<template>
  <div class="h-screen flex flex-col items-center gap-8">
    <h1 class="pt-56 text-center text-4xl font-bold text-primary-50">
      Wait while we redirect you to the search...
    </h1>
    <ProgressSpinner
      stroke-width="6" 
      class="mt-5 w-24 text-primary-400"
    />
  </div>
</template>
  
  <script setup lang="ts">
  
  const code = ref();
  const route = useRoute();
  const spotifyAPIStore = useSpotifyAPIStore();
  const accessTokenResponse = ref();
  
  onMounted(async () => {
    code.value = route.query.code;
    if (code.value !== undefined) {
      spotifyAPIStore.changeAuth(true);
      accessTokenResponse.value = await getAccessToken(code.value);
      if (accessTokenResponse.value !== undefined) {
        spotifyAPIStore.setAccessToken(accessTokenResponse.value.access_token);
        spotifyAPIStore.setRefreshToken(accessTokenResponse.value.refresh_token);
        spotifyAPIStore.setExpiresAt(getExpiresAt(accessTokenResponse.value.expires_in));
        spotifyAPIStore.auth = true;
      }
    }
    navigateTo('/spotify/search');
  });
  
  </script>