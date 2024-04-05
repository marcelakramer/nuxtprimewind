<template>
  <div class="h-screen">
    <h1 class="pt-56 text-center text-4xl font-bold text-primary-50">
      Wait while we redirect you to the Spotify search...
    </h1>
  </div>
</template>

<script setup lang="ts">

import { getAccessToken } from '../../composables/getAccessToken';
import { getAccessTokenByRefreshToken } from '../../composables/getAccessTokenByRefreshToken';

const code = ref('')
const route = useRoute();
const spotifyAPIInfoStore = useSpotifyAPIInfoStore();
const accessTokenResponse = ref({});
const refreshTokenResponse = ref({});

// utils
const getExpiresAt = (time: number) => {
    const now = new Date();
    const currentHour = now.getHours();
    const expiresAt = new Date(now);
    expiresAt.setHours(currentHour + (time / 3600));

    return expiresAt
}

code.value = route.query.code;

if (code.value !== undefined) {
  spotifyAPIInfoStore.changeAuth(true);

  if (spotifyAPIInfoStore.refreshToken === '' || spotifyAPIInfoStore.refreshToken === null) {
    accessTokenResponse.value = await getAccessToken(code.value);
    if (accessTokenResponse.value !== undefined) {
      spotifyAPIInfoStore.setAccessToken(accessTokenResponse.value.access_token);
      spotifyAPIInfoStore.setRefreshToken(accessTokenResponse.value.refresh_token);
      spotifyAPIInfoStore.setExpiresAt(getExpiresAt(accessTokenResponse.value.expires_in));

    }
  } else if (spotifyAPIInfoStore.expiresAt < new Date()) {
    refreshTokenResponse.value  = await getAccessTokenByRefreshToken(spotifyAPIInfoStore.refreshToken)
    if (refreshTokenResponse.value !== undefined) {
      spotifyAPIInfoStore.setAccessToken(refreshTokenResponse.value.access_token);
      spotifyAPIInfoStore.setExpiresAt(getExpiresAt(refreshTokenResponse.value.expires_in));
    }
  }
  navigateTo('/spotify-search')
}

</script>