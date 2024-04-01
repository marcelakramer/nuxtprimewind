<template>
  <div class="bg-surface-900">
    <nav class="fixed top-0 left-0 right-0 pt-5 pl-32 flex gap-32 text-primary-500 font-bold">
      <NuxtLink to="/">
        <a class="cursor-pointer">Home</a>
      </NuxtLink>
      <NuxtLink to="/login">
        <a class="cursor-pointer">Login</a>
      </NuxtLink>
    </nav>
    <slot />
  </div>
</template>

<style>

  a:hover {
    text-shadow: 1px 1px 8px rgba(35, 225, 162, 0.75);
  }

</style>