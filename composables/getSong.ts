const URL = 'https://api.spotify.com/v1/tracks/'

export const getSong = async (accessToken: string, songId: string) => {
    const response = await $fetch(URL + songId, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    return response
}