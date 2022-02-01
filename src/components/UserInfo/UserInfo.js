import React from 'react';
import styles from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <div className={styles.user__info}>
      <img
        src='https://www.pphfoundation.ca/wp-content/uploads/2018/05/default-avatar-600x600.png'
        alt='userAvatar'
      ></img>
    </div>
  );
};

export default UserInfo;
