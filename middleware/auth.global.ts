export default defineNuxtRouteMiddleware((to) => {
    const router = useRouter();
    if (to.path === "/login" && isLoggedIn()) {
        // return navigateTo("/profile");
        router.push('/profile')
    } else if ((to.path === "/profile" || to.path === "/favorites") && !isLoggedIn()) {
        // return navigateTo("/login")
        router.push('/login')
    }
})

const { getLocalStorageItem: getItem } = getLocalStorageItem();

const isLoggedIn = () => {
    return getItem("session");
}

