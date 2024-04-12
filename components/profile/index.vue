<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="w-96 shadow-custom p-5 bg-surface-800">
      <template #title>
        <div class="flex justify-center items-center flex-col">
          <img
            class="w-64 rounded-full"
            src="../../assets/images/sabrina.jpg"
          >
          <!-- <p class="text-xs text-primary-500 mt-1">
            Change photo
          </p> -->
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2">
          <label
            for="username"
            class="text-primary-50"
          >Username</label>
          <InputText
            id="username"
            v-model="formData['username']"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label
            for="password"
            class="text-primary-50"
          >Password</label>
          <Password
            id="password"
            v-model="formData['password']"
            toggle-mask
            :feedback="false"
          />
        </div>
      </template>
      <template #footer />
    </Card>
  </div>
</template>

<script setup lang="ts">

const userStore = useUserStore();
const formData = ref(userStore.logged)

</script>