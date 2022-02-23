import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './TutorCard.module.css';
import { getNickname } from '../../helpers/getNickname';
import { translateCategory } from '../../helpers/translateCategory';
const TutorCard = ({ theme, title, level, userId }) => {
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    score: 0,
    numberOfRatings: 0,
  });
  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:3002/api/users/${userId}/short`
    );
    const { data } = response;
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <div
      className={
        theme === 'light' ? `${styles.ad}` : `${styles.ad} ${styles['ad-dark']}`
      }
    >
      <span className={styles.ad__details}>
        <h3 className={styles.details__subject}>{title}</h3>
        <h3 className={styles.details__level}>
          {level.map((l) => `${translateCategory(l)} `)}
        </h3>
      </span>
      <div className={styles.ad__user}>
        <img
          src='https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png'
          alt='avatar'
          className={styles.user__img}
        />
        <h3 className={styles.user__name}>
          {getNickname(user.nickname, user.email)}
        </h3>
        <span className={styles.user__rate}>
          {user.numberOfRatings ? (
            <React.Fragment>
              renderStars(user.score/user.numberOfRatings, styles)
              <p>{user.numberOfRatings}</p>
            </React.Fragment>
          ) : (
            <p>Brak ocen</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default TutorCard;
