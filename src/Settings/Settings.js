import React from 'react';
import ChangeAvatarForm from './ChangeAvatarForm';
import ChangeNameForm from './ChangeNameForm';
import ChangePasswordForm from './ChangePasswordForm';
import styles from './Settings.module.css';

const Settings = ({ theme }) => {
  return (
    <div class={styles.settings}>
      <ChangeNameForm theme={theme} />
      <ChangePasswordForm theme={theme} />
      <ChangeAvatarForm theme={theme} />
    </div>
  );
};

export default Settings;
