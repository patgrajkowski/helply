import axios from 'axios';
import React, { useEffect } from 'react';
import styles from './Logout.module.css';

const Logout = ({ theme, auth }) => {
    useEffect(() => {
        const logout = async () => {
            const response = await axios.post(
                `https://helply-backend.herokuapp.com/api/auth/logout`,
                {},
                {
                    headers: {
                        'content-type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            auth.setAccessToken('');
        };
        logout();
    }, []);
    return (
        <div className={theme === 'light' ? `${styles.wrapper}` : `${styles.wrapper} ${styles['wrapper-dark']}`}>
            <h2>Pomyślnie wylogowano</h2>
        </div>
    );
};

export default Logout;
