export default defineNuxtRouteMiddleware((to) => {
    if (to.path === "/login" && isLoggedIn()) {
        return navigateTo("/profile");
    } else if ((to.path === "/profile" || to.path === "/favorites") && !isLoggedIn()) {
        return navigateTo("/login")
    }
})

const getItem = (item: string) => {
    if (process.client) {
        return localStorage.getItem(item)
      } else {
        return undefined
      }
}

const isLoggedIn = () => {
    return getItem("session");
}

