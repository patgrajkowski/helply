const uri = 'http://localhost:3002';
export const refreshToken = async (url) => {
  fetch(`${uri}/api/auth/refresh_token`, {
    method: 'POST',
    credentials: 'include',
  }).then(async (x) => {
    const data = await x.json();
    return data.accessToken;
  });
};
