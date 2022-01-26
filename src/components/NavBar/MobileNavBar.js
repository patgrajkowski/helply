import React, { useContext, useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import styles from './MobileNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';
const MobileNavBar = ({ theme }) => {
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
        <CgClose
          className={
            theme === 'light'
              ? styles.icon
              : styles.icon + ` ${styles['icon-dark']}`
          }
          onClick={closeMenu}
        />
      ) : (
        <CgMenu
          className={
            theme === 'light'
              ? styles.icon
              : styles.icon + ` ${styles['icon-dark']}`
          }
          onClick={openMenu}
        />
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
                to='/'
                className={
                  theme === 'light'
                    ? styles.nav__link
                    : styles.nav__link + ` ${styles['nav__link-dark']}`
                }
              >
                Kategorie
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                to='/'
                className={
                  theme === 'light'
                    ? styles.nav__link
                    : styles.nav__link + ` ${styles['nav__link-dark']}`
                }
              >
                Dodaj ogłoszenie
              </NavLink>
            </li>
            <span
              className={
                theme === 'light'
                  ? styles.nav__login
                  : styles.nav__login + ` ${styles['nav__login-dark']}`
              }
            >
              <li>
                <NavLink
                  onClick={closeMenu}
                  to='/login'
                  className={
                    theme === 'light'
                      ? styles.nav__link
                      : styles.nav__link + ` ${styles['nav__link-dark']}`
                  }
                >
                  Zaloguj się
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={closeMenu}
                  to='/register'
                  className={
                    theme === 'light'
                      ? styles.login__button
                      : styles.login__button +
                        ` ${styles['login__button-dark']}`
                  }
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
