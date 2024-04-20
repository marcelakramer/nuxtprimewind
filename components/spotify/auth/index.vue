<template>
  <div class="h-screen">
    <div class="flex flex-col gap-5 items-center justify-center p-36">
      <div class="flex items-center">
        <h1 class="text-primary-50 font-bold text-2xl">
          Authenticate with 
        </h1>
        <img
          class="w-32 ml-2"
          src="../../../assets/images/spotify/Spotify_Logo_RGB_White.png"
          alt="Spotify Logo"
        >
      </div>
      <Button
        label="Log in"
        @click="authorizeUser()"
      />
    </div>
  </div>
</template>
  
<script setup lang="ts">
  
  const authorizeUser = async () => {
    await authorize();
  }
  
</script>