<template>
  <div class="h-screen">
    <h1 class="pt-56 text-center text-4xl font-bold text-primary-50">
      This is the favorites page.
    </h1>
  </div>
</template>

<script setup>

definePageMeta({
    middleware: "favorites"
})

</script>