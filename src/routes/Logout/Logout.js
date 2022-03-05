import axios from 'axios';
import React, { useEffect } from 'react';

const Logout = ({ theme, auth }) => {
  useEffect(() => {
    const logout = async () => {
      const response = await axios.post(
        `https://helply-backend.herokuapp.com/api/auth/logout`,
        {},
        {
          headers: {
            'content-type': 'application/json',
          },
          withCredentials: true,
        }
      );
      auth.setAccessToken('');
    };
    logout();
  }, []);
  return <div>Pomyślnie wylogowano</div>;
};

export default Logout;
