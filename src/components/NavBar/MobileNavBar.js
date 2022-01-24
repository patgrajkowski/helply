import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import styles from './MobileNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
const MobileNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className={styles.header}>
      {menuOpen ? (
        <CgClose className={styles.icon} onClick={closeMenu} />
      ) : (
        <CgMenu className={styles.icon} onClick={openMenu} />
      )}
      <NavLink to='/' className={styles.logo__link}>
        <img src={logo} alt='logo' className={styles.nav__logo} />
      </NavLink>
      {menuOpen && (
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink
                to='/'
                className={styles.nav__link}
                activeClassName={styles['nav__link--active']}
              >
                Kategorie
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/'
                className={styles.nav__link}
                activeClassName={styles['nav__link--active']}
              >
                Dodaj ogłoszenie
              </NavLink>
            </li>
            <span className={styles.nav__login}>
              <li>
                <NavLink
                  to='/'
                  className={styles.nav__link}
                  activeClassName={styles['nav__link--active']}
                >
                  Zaloguj się
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  className={styles.login__button}
                  activeClassName={styles['nav__link--active']}
                >
                  Zarejestruj się
                </NavLink>
              </li>
            </span>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileNavBar;
