import React from 'react';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children, theme, auth }) => {
  return (
    <React.Fragment>
      <NavBar theme={theme} auth={auth} />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
