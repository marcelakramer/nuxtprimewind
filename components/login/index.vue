<template>
  <div class="bg-surface-900 h-screen w-screen flex flex-col justify-center items-center">
    <Card class="w-96 shadow-custom p-5 bg-surface-800">
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
          <small>
            <NuxtLink to="/register">
              <p class="text-primary-500">Doesn't have an account? Register!</p>
            </NuxtLink>
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

const formData = ref({
  id: '',
  username: '',
  password: ''
});
const userStore = useUserStore();
const toast = useToast();

const show = (severity: "secondary" | "success" | "info" | "contrast" | "warn" | "error" | undefined, summary: string, detail: string) => {
    toast.add({ severity: severity, summary: summary, detail: detail, life: 3000 });
};

const login = () => {
  if (userStore.login(formData.value)) {
    navigateTo("/profile");
    show("success", "Login Success", "The user was logged sucsessully.")
  } else {
    show("error", "Login Fail", "The credentials are invalid.")
  }
  formData.value = {
      id: '',
      username: '',
      password: ''
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