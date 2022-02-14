import axios from 'axios';
const uri = 'http://localhost:3002';
export const fetchAccessToken = async (url) => {
  const response = await axios.post(`${uri}/api/auth/refresh_token`);
  const { accessToken } = response.data;
  console.log(accessToken);
  return accessToken;
};
// export const fetchMovie = async (url) => {
//   try {
//     const response = await axios.get(
//       `https://filmlybackend.herokuapp.com${url}`
//     );
//     const { data } = response;
//     return data;
//   } catch (error) {
//     console.error(error.response.data);
//     console.error(error.response.status);
//     console.error(error.response.headers);
//     return error.response.status;
//   }
// };
// export const fetchComments = async (url) => {
//   const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
//   const { data } = response;
//   const comments = [];
//   for (const key in data) {
//     comments.push(data[key]);
//   }
//   return comments;
// };
// export const fetchUsers = async (url) => {
//   const response = await axios.get(`https://filmlybackend.herokuapp.com${url}`);
//   const { data } = response;
//   const users = [];
//   for (const key in data) {
//     users.push(data[key]);
//   }
//   return users;
// };
