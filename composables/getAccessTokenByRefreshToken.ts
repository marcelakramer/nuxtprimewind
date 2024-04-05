// interface
interface RefreshTokenResponse {
    access_token: string;
    expires_in: number;
}

export const getAccessTokenByRefreshToken = async (refreshToken: string) => {
    const config = useRuntimeConfig();
    const response: RefreshTokenResponse = await $fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${config.public.CLIENT_ID}:${config.public.CLIENT_SECRET}`)
      },
      body: new URLSearchParams({
          refresh_token: refreshToken, 
          grant_type: 'refresh_token'
        }).toString()
    })
    return response
}