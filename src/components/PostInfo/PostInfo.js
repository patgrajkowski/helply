import React from 'react';
import styles from './PostInfo.module.css';

const PostInfo = ({ theme }) => {
  return (
    <div
      className={
        theme === 'light'
          ? styles.post
          : styles.post + ` ${styles['post-dark']}`
      }
    >
      <div className={styles.post__details}>
        <p className={styles.details__property}>Cena:</p>
        <p>50</p>
        <p className={styles.details__property}>Czas:</p>
        <p>60</p>
        <p className={styles.details__property}>Kategorie:</p>
        <div className={styles.details__categories}>
          <p className={styles.details__category}>Język polski</p>
        </div>
        <p className={styles.details__property}>Poziom nauczania:</p>
        <div>
          <p className={styles.details__level}>Gimnazjum</p>
        </div>
      </div>
      <div className={styles.post__description}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum."
      </div>
    </div>
  );
};

export default PostInfo;
