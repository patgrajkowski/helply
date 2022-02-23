import React from 'react';
import { getNickname } from '../../helpers/getNickname';
import { renderStars } from '../../helpers/renderStars';
import Button from '../Button/Button';
import styles from './UserInfo.module.css';

const UserInfo = ({ theme, user }) => {
  let { nickname, avatar, email, score, numberOfRatings, description } = user;
  const rating = !numberOfRatings ? 0 : score / numberOfRatings;
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
        <p className={styles.user__name}>{getNickname(nickname, email)}</p>
        <span className={styles.user__rate}>
          {rating === 0 ? 'Brak ocen' : renderStars(rating, styles)}
        </span>
      </div>
      <p className={styles.user__description}>
        {description ? description : 'Brak opisu'}
      </p>
      <div className={styles.user__button}>
        <Button>Wyślij wiadomość</Button>
      </div>
    </div>
  );
};

export default UserInfo;
