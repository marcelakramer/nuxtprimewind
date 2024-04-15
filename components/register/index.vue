<template>
  <div class="bg-surface-900 h-screen w-screen flex flex-col justify-center items-center">
    <Card class="w-96 shadow-custom p-5 bg-surface-800">
      <template #title>
        <div class="text-center text-3xl text-primary-50">
          Register
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
            <NuxtLink to="/login">
              <p class="text-primary-500">
                Already have an account? Login!
              </p>
            </NuxtLink>
          </small>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-center">
          <Button
            class="px-32"
            label="Register"
            @click="register()"
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
  
  const register = () => {
    if (userStore.register(formData.value)) {
      navigateTo("/login");
      toast.add({severity: "success", summary: "Register Success", detail: "The user was registered sucsessully.", life: 3000})
    } else {
      toast.add({severity: "error", summary: "Register Fail", detail: "This username already exists.", life: 3000})
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