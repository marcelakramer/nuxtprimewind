<template>
  <div class="bg-surface-900">
    <nav class="bg-surface-900 fixed w-screen p-5 flex justify-around text-primary-500 font-bold z-10">
      <NuxtLink to="/">
        <p class="cursor-pointer">
          Home
        </p>
      </NuxtLink>
      <NuxtLink to="/login">
        <p class="cursor-pointer">
          Login
        </p>
      </NuxtLink>
      <NuxtLink to="/songs">
        <p class="cursor-pointer">
          Songs
        </p>
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
