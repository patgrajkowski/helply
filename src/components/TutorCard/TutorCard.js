import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './TutorCard.module.css';
import { getNickname } from '../../helpers/getNickname';
import { translateCategory } from '../../helpers/translateCategory';
import { useNavigate } from 'react-router';
const TutorCard = ({ theme, title, level, userId, postId, alternative }) => {
  const [user, setUser] = useState({
    nickname: '',
    email: '',
    score: 0,
    numberOfRatings: 0,
  });
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/post/${postId}`);
  };
  const getUser = async () => {
    const response = await axios.get(
      `https://helply-backend.herokuapp.com/api/users/${userId}/short`
    );
    const { data } = response;
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    // DEFAULT VERSION
    <div
      className={
        theme === 'light' ? `${styles.ad}` : `${styles.ad} ${styles['ad-dark']}`
      }
      onClick={onClickHandler}
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
