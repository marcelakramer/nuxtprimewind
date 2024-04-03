export default defineNuxtRouteMiddleware(() => {
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

    if (!isLoggedIn()) {
        return navigateTo("/login");
    }
})

