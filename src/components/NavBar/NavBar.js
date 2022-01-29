import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = ({ theme }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 741px)` });
  return (
    <React.Fragment>
      {isMobile ? (
        <MobileNavBar theme={theme} />
      ) : (
        <DesktopNavBar theme={theme} />
      )}
    </React.Fragment>
  );
};

export default NavBar;
