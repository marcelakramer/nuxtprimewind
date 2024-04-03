<template>
  <div class="bg-surface-900 h-screen w-screen flex flex-col justify-center items-center">
    <Card class="w-96 shadow-custom p-5 bg-surface-900">
      <template #title>
        <div class="text-center text-3xl text-primary-50">
          Login
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
            v-model="username"
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
            v-model="password"
            toggle-mask
            :feedback="false"
          />
          <small>
            <a
              href="#"
              class="text-primary-200"
            >Forgot your password?</a>
          </small>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-center">
          <Button
            class="px-32"
            label="Login"
            @click="login()"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

const username = ref('');
const password = ref('');
const session = ref({});

const login = () => {
  session.value = {
    username: username.value,
    password: password.value
  }
  setItem("session", JSON.stringify(session.value));
  navigateTo("/profile");
}

const setItem = (item: string, value: string) => {
  if (process.client) {
    localStorage.setItem(item, value)
    return true
  } else {
    return false
  }
}

</script>

<style>
.shadow-custom {
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
              0 0 0 1px hsla(0, 0%, 0%, 0.2),
              0 0.5px 1px hsla(0, 0%, 0%, 0.05),
              0 1px 2px hsla(0, 0%, 0%, 0.1),
              0 5px 10px hsla(0, 0%, 0%, 0.25);
}
</style>