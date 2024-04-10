export default defineNuxtRouteMiddleware(async (to) => {
    const spotifyAPIstore = useSpotifyAPIStore();
    const router = useRouter();
    
    if (to.path === '/spotify/search') {
        if (!spotifyAPIstore.auth) {
            // return navigateTo('/spotify/auth', {replace: true})
            router.push('/spotify/auth')
        }
    }

    if (to.path === '/spotify/auth' || to.path === '/spotify/callback') {
        if (spotifyAPIstore.auth) {
            // return navigateTo('/spotify/search', {replace: true})
            router.push('/spotify/search')
        }
    }
})