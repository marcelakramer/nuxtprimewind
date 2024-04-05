// utils
const generateRandomString = (length: number) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}

export const authorize = async () => {
  const config = useRuntimeConfig();
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email';

  const queryParams = new URLSearchParams({
    response_type: 'code',
    client_id: config.public.CLIENT_ID,
    scope: scope,
    redirect_uri: config.public.REDIRECT_URI,
    state: state
  });

  await navigateTo(`https://accounts.spotify.com/authorize?${queryParams.toString()}`, {
  external: true
  })
}