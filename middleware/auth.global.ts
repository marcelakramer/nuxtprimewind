export default defineNuxtRouteMiddleware((to) => {
    if (to.path === "/login" && isLoggedIn()) {
        return navigateTo("/profile");
    } else if ((to.path === "/profile" || to.path === "/favorites") && !isLoggedIn()) {
        return navigateTo("/login")
    }
})

const { getLocalStorageItem: getItem } = getLocalStorageItem();

const isLoggedIn = () => {
    return getItem("session");
}

