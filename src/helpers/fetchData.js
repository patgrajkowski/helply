import axios from 'axios';
const uri = 'https://helply-backend.herokuapp.com';
export const fetchAccessToken = async (url) => {
  const response = await axios.post(`${uri}/api/auth/refresh_token`);
  const { accessToken } = response.data;
  console.log(accessToken);
  return accessToken;
};
