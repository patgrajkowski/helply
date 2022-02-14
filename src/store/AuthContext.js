import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  accessToken: '',
  setAccessToken: (token) => {},
  isAuth: '',
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState('');
  useEffect(() => {
    const refreshToken = async (url) => {
      fetch(`http://localhost:3002/api/auth/refresh_token`, {
        method: 'POST',
        credentials: 'include',
      }).then(async (x) => {
        const data = await x.json();
        setToken(data.accessToken);
      });
    };
    refreshToken();
  }, []);
  const setAccessTokenHandler = (token) => {
    setToken(token);
  };
  const contextValue = {
    accessToken: token,
    setAccessToken: setAccessTokenHandler,
    isAuth: token === '' ? false : true,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
