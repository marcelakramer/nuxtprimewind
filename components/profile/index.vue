<template>
  <div class="h-screen flex justify-center items-center">
    <Card class="w-96 shadow-custom p-5 bg-surface-800">
      <template #title>
        <div class="flex justify-center items-center flex-col">
          <img
            class="w-64 rounded-full"
            src="../../assets/images/user.svg"
          >
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
      <template #footer>
        <div class="flex justify-around">
          <Button
            class="w-20"
            label="Save"
            :disabled="!hasInfoChanged"
            @click="save"
          />
          <Button
            class="w-20"
            label="Logout"
            outlined
            @click="logout"
          />
          <Button
            class="w-20"
            label="Delete"
            severity="danger"
            @click="deleteUser"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { User } from '~/interfaces/user';

const userStore = useUserStore();
const user = ref(userStore.users.find((u) => u.username === userStore.logged.username));
const formData = ref<User>({...userStore.logged});
  const toast = useToast();


const hasInfoChanged = computed(() => {
  return formData.value.username !== userStore.logged.username || formData.value.password !== userStore.logged.password
})

const save = () => {
  if (user.value !== undefined) {
    user.value.username = formData.value.username;
    user.value.password = formData.value.password;
    userStore.logged = user.value;
    toast.add({severity: "success", summary: "Info Update", detail: "The user information was updated.", life: 3000})
  }
}

const logout = () => {
  userStore.logout();
  navigateTo('/login');
  toast.add({severity: "error", summary: "Logout", detail: "The user was logged out.", life: 3000})
}

const deleteUser = () => {
  if (user.value !== undefined) {
    userStore.deleteUser(user.value);
    logout();
    toast.add({severity: "error", summary: "Delete Account", detail: "The account was deleted successfully.", life: 3000})
  }
}

</script>