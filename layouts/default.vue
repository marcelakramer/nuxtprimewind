<template>
  <div class="bg-surface-900">
    <Toast /> 
    <Toolbar class="bg-surface-900 border-0 m-0 fixed w-screen z-10">
      <template #start>
        <div>
          <img
            class="w-8 ml-4"
            src="../assets/images/song.svg"
            alt="song-image"
          >
        </div>
      </template>
      <template #center>
        <div class="flex items-center gap-32">
          <NuxtLink to="/">
            <Button
              label="Home"
              text
            />
          </NuxtLink>
          <NuxtLink to="/songs">
            <Button
              label="Songs"
              text
            />
          </NuxtLink>
          <NuxtLink to="/favorites">
            <Button
              label="Favorites"
              text
            />
          </NuxtLink>
          <NuxtLink to="/spotify/search">
            <img
              class="w-20"
              src="../assets/images/spotify/Spotify_Logo_RGB_White.png"
            >
          </NuxtLink>
        </div>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <NuxtLink to="/login">
            <Button
              icon="pi pi-user"
              text
              rounded
            />
          </NuxtLink>
        </div>
      </template>
    </Toolbar>
    <slot />
  </div>
</template>

<style scoped>

a:hover {
  text-shadow: 1px 1px 8px rgba(35, 225, 162, 0.75);
}

</style>