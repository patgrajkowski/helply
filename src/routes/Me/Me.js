import React from 'react';
import styles from './Me.module.css';
const Me = () => {
  return (
    <div>
      <div>
        <h1>Moje Konto</h1>
        <div className={styles.settings}>
          <ul>
            <li>Moje ogłoszenia</li>
            <li>Ustawienia</li>
            <li>Moje opinie</li>
            <li>Usuń konto</li>
          </ul>
        </div>
      </div>
      <div>Conent</div>
    </div>
  );
};

export default Me;
