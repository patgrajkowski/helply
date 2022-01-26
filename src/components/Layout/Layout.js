import React from 'react';
import NavBar from '../NavBar/NavBar';

const Layout = ({ children, theme }) => {
  return (
    <React.Fragment>
      <NavBar theme = {theme} />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
