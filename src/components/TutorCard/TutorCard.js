import React from 'react';
import { MdStar, MdStarHalf } from 'react-icons/md';
import styles from './TutorCard.module.css';
const TutorCard = ({ theme }) => {
  return (
    <div
      className={
        theme === 'light' ? `${styles.ad}` : `${styles.ad} ${styles['ad-dark']}`
      }
    >
      <span className={styles.ad__details}>
        <h3 className={styles.details__subject}>Język angielski</h3>
        <h3 className={styles.details__level}>Technikum</h3>
      </span>
      <div className={styles.ad__user}>
        <img
          src='https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png'
          alt='avatar'
          className={styles.user__img}
        />
        <h3 className={styles.user__name}>Andrzej</h3>
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
    </div>
  );
};

export default TutorCard;
