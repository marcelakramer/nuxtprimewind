<template>
  <div>
    <SpotifyAuth />
  </div>
</template>

<script setup="ts">

definePageMeta({
    middleware: 'spotify-api-auth'
})

</script>