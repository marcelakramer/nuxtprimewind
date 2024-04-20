export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore();
    if ((to.path === "/login" || to.path === "/register") && userStore.isLogged()) {
        return navigateTo("/profile");
    }
    console.log(userStore.isLogged())
    if ((to.path === "/profile" || to.path === "/favorites") && !userStore.isLogged()) {
        return navigateTo("/login")
    }
})

