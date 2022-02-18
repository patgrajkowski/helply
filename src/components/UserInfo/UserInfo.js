import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md';
import Button from '../Button/Button';
import styles from './UserInfo.module.css';

const UserInfo = ({ theme, user }) => {
  const renderStars = (rating) => {
    const numberOfStars = Number.isInteger(rating)
      ? rating
      : Math.floor(rating);
    const halfStar = rating - Math.floor(rating) >= 0.75 ? true : false;
    const stars = [];
    for (let i = 0; i < numberOfStars; i++) {
      stars.push(<MdStar />);
    }
    if (halfStar) stars.push(<MdStarHalf />);
    return <span className={styles.rate__stars}>{stars}</span>;
  };
  let { nickname, avatar, email, score, numberOfRatings, description } = user;
  if (!nickname) nickname = email.split('@')[0];
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
        <p className={styles.user__name}>{nickname}</p>
        <span className={styles.user__rate}>
          {rating === 0 ? 'Brak ocen' : renderStars(rating)}
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
