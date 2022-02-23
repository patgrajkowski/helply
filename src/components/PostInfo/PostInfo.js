import React from 'react';
import { translateCategory } from '../../helpers/translateCategory';
import styles from './PostInfo.module.css';

const PostInfo = ({ theme, post }) => {
  const { price, time, categories, level, description } = post;
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
        <p>{price}</p>
        <p className={styles.details__property}>Czas:</p>
        <p>{time}</p>
        <p className={styles.details__property}>Kategorie:</p>
        <div className={styles.details__categories}>
          <p className={styles.details__category}>
            {categories.map((category) => `${translateCategory(category)} `)}
          </p>
        </div>
        <p className={styles.details__property}>Poziom nauczania:</p>
        <div>
          <p className={styles.details__level}>
            {level.map((l) => `${translateCategory(l)} `)}
          </p>
        </div>
      </div>
      <div className={styles.post__description}>{description}</div>
    </div>
  );
};

export default PostInfo;
