import React from 'react';
import NewPostForm from '../../components/Forms/NewPostForm/NewPostForm';
import styles from './NewPost.module.css';

const NewPost = ({ theme }) => {
  return (
    <div
      className={
        theme === 'light'
          ? styles.wrapper
          : styles.wrapper + ` ${styles['wrapper-dark']}`
      }
    >
      <div className={styles.form__wrapper}>
        <h1>Dodaj ogłoszenie</h1>
        <NewPostForm theme={theme} />
      </div>
    </div>
  );
};

export default NewPost;
