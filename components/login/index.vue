<template>
  <div class="bg-surface-900 h-screen w-screen flex flex-col justify-center items-center">
    <Card class="w-96 shadow-custom p-5">
      <template #title>
        <div class="text-center text-3xl">
          Login
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2">
          <label for="username">Username</label>
          <InputText
            id="username"
            aria-describedby="username-help"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password">Password</label>
          <Password
            id="password"
            toggle-mask
            :feedback="false"
          />
          <small>
            <a
              href="#"
              class="text-primary-200 hover:underline"
            >Forgot your password?</a>
          </small>
        </div>
      </template>
      <template #footer>
        <div class="flex justify-center">
          <Button
            class="px-10"
            label="Login"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style>
.shadow-custom {
  box-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
              0 0 0 1px hsla(0, 0%, 0%, 0.2),
              0 0.5px 1px hsla(0, 0%, 0%, 0.05),
              0 1px 2px hsla(0, 0%, 0%, 0.1),
              0 5px 10px hsla(0, 0%, 0%, 0.25);
}
</style>