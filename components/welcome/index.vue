<template>
  <div class="bg-surface-900 h-screen w-screen flex flex-col justify-center items-center">
    <h1 class="text-primary-50 font-bold text-6xl">
      Welcome to the SongHub!
    </h1>
    <p class="text-primary-300 text-center m-10 text-2xl max-w-xl">
      Explore a world of music and manage your favorite tunes effortlessly.
    </p>
    <div class="flex justify-center items-center gap-3">
      <NuxtLink to="/songs">
        <Button
          class="w-36"
          label="Browse Songs"
          raised
        />
      </NuxtLink>
      <NuxtLink to="/login">
        <Button
          class="w-36"
          label="Sign in"
          outlined
          raised
        />
      </NuxtLink>
    </div>
  </div>
</template>
