const BEGIN_URL = 'https://api.spotify.com/v1/search?q='
const END_URL = '&type=track&limit=20'

export const getSong = async (accessToken: string, songName: string) => {
    const response = await $fetch(BEGIN_URL + songName + END_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    return response
}