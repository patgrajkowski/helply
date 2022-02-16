import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './UserInfo.module.css';

const UserInfo = ({ theme, user }) => {
  let { nickname, avatar, email } = user;
  if (!nickname) nickname = email.split('@')[0];
  console.log(email);
  if (!avatar)
    avatar =
      'https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png';
  return (
    <div
      className={
        theme === 'light'
          ? styles.user__info
          : styles.user__info + ` ${styles['user__info-dark']}`
      }
    >
      <img src={avatar} alt='userAvatar' className={styles.user__avatar}></img>
      <div className={styles.rate__wrapper}>
        <p className={styles.user__name}>{nickname}</p>
        <span className={styles.user__rate}>
          <span className={styles.rate__stars}>
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStarHalf />
          </span>
          <p>(123 ocen)</p>
        </span>
      </div>
      <p className={styles.user__description}>
        Student 3 roku pedagogiki Student 3 roku pedagogiki Student 3 roku
        pedagogiki Student{' '}
      </p>
      <div className={styles.user__button}>
        <Button>Wyślij wiadomość</Button>
      </div>
    </div>
  );
};

export default UserInfo;
