<template>
  <div class="bg-surface-900 h-screen w-screen flex flex-col justify-center items-center">
    <h1 class="text-primary-50 font-bold text-6xl">
      Welcome to Nuxt3 development page!
    </h1>
    <p class="text-primary-200 text-center m-10 text-2xl max-w-xl">
      This is the initial page of a website created to upgrade the Nuxt3 development skills.
    </p>
    <div class="flex justify-center items-center gap-3">
      <Button
        class="w-32"
        label="Get started"
        raised
      />
      <NuxtLink to="/login">
        <Button
          class="w-32"
          label="Sign in"
          outlined
          raised
        />
      </NuxtLink>
    </div>
  </div>
</template>
  