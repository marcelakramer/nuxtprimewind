export default defineNuxtRouteMiddleware(async (to) => {
    const spotifyAPIstore = useSpotifyAPIStore();
    
    if (to.path === '/spotify/search') {
        if (!spotifyAPIstore.auth) {
            return navigateTo('/spotify/auth', {replace: true})
        }
    }

    if (to.path === '/spotify/auth' || to.path === '/spotify/callback') {
        if (spotifyAPIstore.auth) {
            return navigateTo('/spotify/search', {replace: true})
        }
    }
})