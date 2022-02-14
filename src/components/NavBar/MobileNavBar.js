import React, { useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import styles from './MobileNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';
const MobileNavBar = ({ theme, auth }) => {
  const { isAuth } = auth;
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header
      className={
        theme === 'light'
          ? styles.header
          : styles.header + ` ${styles['header-dark']}`
      }
    >
      {menuOpen ? (
        <CgClose className={styles.icon} onClick={closeMenu} />
      ) : (
        <CgMenu className={styles.icon} onClick={openMenu} />
      )}
      <NavLink to='/' className={styles.logo__link}>
        <img src={logo} alt='logo' className={styles.nav__logo} />
      </NavLink>
      <DarkModeToggler className={styles.toggler} />
      {menuOpen && (
        <nav
          className={
            theme === 'light'
              ? styles.nav
              : styles.nav + ` ${styles['nav-dark']}`
          }
        >
          <ul>
            <li>
              <NavLink
                onClick={closeMenu}
                to='/categories'
                className={styles.nav__link}
              >
                Kategorie
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                to='/new-post'
                className={styles.nav__link}
              >
                Dodaj ogłoszenie
              </NavLink>
            </li>
            <span className={styles.nav__login}>
              <li>
                {!isAuth && (
                  <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      isActive
                        ? styles.nav__link + ` ${styles['nav__link-active']}`
                        : styles.nav__link
                    }
                  >
                    Zaloguj się
                  </NavLink>
                )}
                {isAuth && (
                  <NavLink
                    to='/logout'
                    className={({ isActive }) =>
                      isActive
                        ? styles.nav__link + ` ${styles['nav__link-active']}`
                        : styles.nav__link
                    }
                  >
                    Wyloguj się
                  </NavLink>
                )}
              </li>
              <li>
                {!isAuth && (
                  <NavLink
                    onClick={closeMenu}
                    to='/register'
                    className={styles.login__button}
                  >
                    Zarejestruj się
                  </NavLink>
                )}
                {isAuth && (
                  <NavLink
                    onClick={closeMenu}
                    to='/me'
                    className={styles.login__button}
                  >
                    Moje konto
                  </NavLink>
                )}
              </li>
            </span>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileNavBar;
