import React, { useContext } from 'react';
import styles from './DesktopNavBar.module.css';
import logo from '../../images/logo.svg';
import { NavLink } from 'react-router-dom';

import DarkModeToggler from '../DarkModeToggler/DarkModeToggler';
import Button from '../Button/Button';

const DesktopNavBar = ({ theme }) => {
  const navLinkClasses =
    theme === 'light'
      ? styles.nav__link
      : styles.nav__link + ` ${styles['nav__link-dark']}`;
  return (
    <header
      className={
        theme === 'light'
          ? styles.header
          : `${styles.header} ${styles['header-dark']}`
      }
    >
      <nav className={styles.header__nav}>
        <div className={styles.logo__wrapper}>
          <NavLink to='/'>
            <img src={logo} alt='logo'></img>
          </NavLink>
          <DarkModeToggler />
        </div>
        <ul>
          <li>
            <NavLink
              to='/categories'
              className={({ isActive }) =>
                isActive
                  ? styles.nav__link + ` ${styles['nav__link-active']}`
                  : styles.nav__link
              }
            >
              Kategorie
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-post'
              className={({ isActive }) =>
                isActive
                  ? styles.nav__link + ` ${styles['nav__link-active']}`
                  : styles.nav__link
              }
            >
              Dodaj ogłoszenie
            </NavLink>
          </li>
          <span className={styles.nav__login}>
            <li>
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
            </li>
            <li>
              <NavLink to='/register' className={styles.login__button}>
                <Button primary='true'>Zarejestruj się</Button>
              </NavLink>
            </li>
          </span>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavBar;
