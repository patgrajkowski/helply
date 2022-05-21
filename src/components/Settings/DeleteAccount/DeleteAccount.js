import React from 'react';
import Button from '../../Button/Button';
import styles from './DeleteAccount.module.css';
const DeleteAccount = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Jesteś pewny, że chcesz usunąć konto? Usuniętego konta nie da się odzyskać.</h2>
            <Button>Tak jestem pewny, nieodwracalnie usuń moje konto</Button>
        </div>
    );
};

export default DeleteAccount;
