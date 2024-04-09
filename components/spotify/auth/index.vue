<template>
  <div class="h-screen">
    <div class="flex justify-center p-36">
      <Button
        label="Log in with Spotify"
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