import React from 'react';
import PostInfo from '../../components/PostInfo/PostInfo';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from './Post.module.css';

const Post = ({ theme }) => {
  return (
    <div
      className={
        theme === 'light'
          ? styles.wrapper
          : styles.wrapper + ` ${styles['wrapper-dark']}`
      }
    >
      <div className={styles.post__wrapper}>
        <h1>Tytuł ogłoszenia</h1>
        <PostInfo theme={theme} />
        <UserInfo theme={theme} />
      </div>
    </div>
  );
};

export default Post;