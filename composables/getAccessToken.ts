// interface
interface AccessTokenResponse {
    access_token: string;
    refresh_token: string;
    expires_in: number;
}

export const getAccessToken = async (code: string) => {
    const config = useRuntimeConfig();
    const response: AccessTokenResponse = await $fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + btoa(`${config.public.CLIENT_ID}:${config.public.CLIENT_SECRET}`)
      },
      body: new URLSearchParams({
          code: code,
          redirect_uri: config.public.REDIRECT_URI,
          grant_type: 'authorization_code'
        }).toString()
    })
    return response
}