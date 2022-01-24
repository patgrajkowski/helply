import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 680px)` });
  return (
    <React.Fragment>
      {isMobile ? <MobileNavBar /> : <DesktopNavBar />}
    </React.Fragment>
  );
};

export default NavBar;
