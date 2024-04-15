<template>
  <div>
    <SpotifySearch />
  </div>
</template>

<script setup="ts">

definePageMeta({
    middleware: 'spotify-api-auth'
})

</script>