<template>
  <div class="bg-surface-900">
    <nav class="bg-surface-900 fixed w-screen p-2 flex justify-around items-center text-primary-500 font-bold z-10">
      <NuxtLink to="/">
        <p class="cursor-pointer">
          Home
        </p>
      </NuxtLink>
      <NuxtLink to="/songs">
        <p class="cursor-pointer">
          Songs
        </p>
      </NuxtLink>
      <NuxtLink to="/favorites">
        <p class="cursor-pointer">
          Favorites
        </p>
      </NuxtLink>
      <NuxtLink to="/spotify/search">
        <p class="cursor-pointer">
          Spotify
        </p>
      </NuxtLink>
      <NuxtLink to="/login">
        <Button
          icon="pi pi-user"
          text
          rounded
        />
      </NuxtLink>
    </nav>
    <div> 
      <slot />
    </div>
  </div>
</template>

<style scoped>

a:hover {
  text-shadow: 1px 1px 8px rgba(35, 225, 162, 0.75);
}

</style>
