import React, { useContext, useState } from 'react';
import { CgMenu, CgClose } from 'react-icons/cg';
import styles from './MobileNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';
import { IoMdMoon } from 'react-icons/io';
import { BsSunFill } from 'react-icons/bs';
import ThemeContext from '../../store/ThemeContext';
const MobileNavBar = ({ theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
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
            <li className={styles.toggle__wrapper}>
              <input
                type='checkbox'
                id='switch'
                className={styles.toggle}
                onChange={themeContext.changeTheme}
                checked={theme !== 'light'}
              />
              <label htmlFor='switch' className={styles.toggle__label}></label>
              {theme === 'light' ? (
                <BsSunFill
                  className={`${styles['toggle__icon-light']}`}
                  onClick={() => {
                    document.getElementById('switch').checked = true;
                    themeContext.changeTheme();
                  }}
                />
              ) : (
                <IoMdMoon
                  className={`${styles['toggle__icon-dark']}`}
                  onClick={() => {
                    document.getElementById('switch').checked = false;
                    themeContext.changeTheme();
                  }}
                />
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileNavBar;
