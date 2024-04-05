export const useSpotifyAPIInfoStore = defineStore("spotifyAPIInfo", {
    state: () => {
        return {
            auth: false,
            accessToken: '',
            refreshToken: '',
            expiresAt: new Date()
        }
    },
    actions: {
        changeAuth(value: boolean) {
            this.auth = value;
        },
        setAccessToken(newAccessToken: string) {
            this.accessToken = newAccessToken;
        },
        setRefreshToken(newRefreshToken: string) {
            this.refreshToken = newRefreshToken;
        },
        setExpiresAt(newExpiresAt: Date) {
            this.expiresAt = newExpiresAt;
        }
    },
    persist: {
        storage: persistedState.localStorage
    }
})