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
        <p>Cena:</p>
        <p>50</p>
        <p>Czas:</p>
        <p>60</p>
        <p>Kategorie:</p>
        <div className={styles.post__categories}>
          <p className={styles.post__category}>Język polski</p>
        </div>
        <p>Poziom nauczania:</p>
        <div>
          <p className={styles.post__level}>Gimnazjum</p>
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
