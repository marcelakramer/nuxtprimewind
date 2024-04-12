export default defineNuxtRouteMiddleware((to) => {
    const userStore = useUserStore();
    if ((to.path === "/login" || to.path === "/register") && userStore.logged) {
        return navigateTo("/profile");
    } else if ((to.path === "/profile" || to.path === "/favorites") && !userStore.logged) {
        return navigateTo("/login")
    }
})

