const URL = 'https://api.spotify.com/v1/tracks/'

export const getSong = async (accessToken: string, songId: string) => {
    console.log(URL + songId)
    console.log(accessToken)
    console.log(songId)
    const response = await $fetch(URL + songId, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    return response
}