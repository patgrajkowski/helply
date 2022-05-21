import React, { useState } from 'react';
import DeleteAccount from '../../components/Settings/DeleteAccount/DeleteAccount';
import MyComments from '../../components/Settings/MyComments/MyComments';
import MyPosts from '../../MyPosts/MyPosts';
import Settings from '../../components/Settings/Settings';
import styles from './Me.module.css';
const Me = ({ theme, auth }) => {
    const [activeSetting, setActiveSetting] = useState('Moje ogłoszenia');
    const onClickHandler = (event) => {
        setActiveSetting(event.target.id);
    };
    return (
        <div className={theme === 'light' ? styles.wrapper : styles.wrapper + ` ${styles['wrapper-dark']}`}>
            <div className={styles.settings}>
                <div className={styles.settings__menu}>
                    <h1 className="text-2xl font-bold">Moje konto</h1>
                    <ul>
                        <li
                            onClick={onClickHandler}
                            id="Moje ogłoszenia"
                            className={activeSetting === 'Moje ogłoszenia' ? styles.menu__active : ''}
                        >
                            Moje ogłoszenia
                        </li>
                        <li
                            onClick={onClickHandler}
                            id="Moje opinie"
                            className={activeSetting === 'Moje opinie' ? styles.menu__active : ''}
                        >
                            Moje opinie
                        </li>
                        <li
                            onClick={onClickHandler}
                            id="Ustawienia"
                            className={activeSetting === 'Ustawienia' ? styles.menu__active : ''}
                        >
                            Ustawienia
                        </li>
                        <li
                            onClick={onClickHandler}
                            id="Usuń konto"
                            className={activeSetting === 'Usuń konto' ? styles.menu__active : ''}
                        >
                            Usuń konto
                        </li>
                    </ul>
                </div>
                <div className={styles.settings__wrapper}>
                    <h1 className="text-2xl font-bold">{activeSetting}</h1>
                    <div className={styles.settings__content}>
                        {activeSetting === 'Moje ogłoszenia' && <MyPosts token={auth.accessToken} theme={theme} />}
                        {activeSetting === 'Moje opinie' && <MyComments />}
                        {activeSetting === 'Ustawienia' && <Settings theme={theme} />}
                        {activeSetting === 'Usuń konto' && <DeleteAccount />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Me;
