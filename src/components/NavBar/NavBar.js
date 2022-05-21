import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';

const NavBar = ({ theme, auth }) => {
    const isMobile = useMediaQuery({ query: `(max-width: 741px)` });
    return (
        <React.Fragment>
            {isMobile ? (
                <MobileNavBar theme={theme} auth={auth} />
            ) : (
                <DesktopNavBar theme={theme} auth={auth} className="mb-20" />
            )}
        </React.Fragment>
    );
};

export default NavBar;
