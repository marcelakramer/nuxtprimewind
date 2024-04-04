<template>
  <div class="pt-20 h-screen">
    <h1 class="text-primary-50 font-bold text-center text-5xl pt-10">
      Favorite Songs
    </h1>
    <DataTable
      :value="favoriteStore.favorites"
      class="mx-80 my-20"
    >
      <Column
        field="title"
        header="Title"
      />
      <Column
        field="artist"
        header="Artist"
      />
      <Column
        field="album"
        header="Album"
      />
      <Column
        field="duration"
        header="Duration"
      />
      <Column
        field="year"
        header="Year"
      />
      <Column header="">
        <template #body="slotProps">
          <Button
            icon="pi pi-times"
            severity="danger"
            text
            @click="favoriteStore.removeFavorite(slotProps.data)"
          />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">

const favoriteStore = useFavoriteStore();

</script>