import React from 'react';
import ChangeAvatarForm from './ChangeAvatarForm';
import ChangeDescriptionForm from './ChangeDescriptionForm';
import ChangeNameForm from './ChangeNameForm';
import ChangePasswordForm from './ChangePasswordForm';
import styles from './Settings.module.css';

const Settings = ({ theme }) => {
    return (
        <div className={styles.settings}>
            <ChangeNameForm theme={theme} />
            <ChangeDescriptionForm theme={theme} />
            <ChangePasswordForm theme={theme} />
            <ChangeAvatarForm theme={theme} />
        </div>
    );
};

export default Settings;
