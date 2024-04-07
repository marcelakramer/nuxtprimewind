export default defineNuxtRouteMiddleware((to) => {
    const spotifyAPIstore = useSpotifyAPIStore();
    if (to.path === '/spotify/auth')
        if (spotifyAPIstore.auth) {
            return navigateTo('spotify/search');
        }
    
    if (to.path === '/spotify/search') {
        if (!spotifyAPIstore.auth) {
            return navigateTo('/spotify/auth')
        }
    }
})