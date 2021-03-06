import React from 'react';
import NewPostForm from '../../Forms/NewPostForm/NewPostForm';
import styles from './NewPost.module.css';

const NewPost = ({ theme, auth }) => {
    return (
        <div className={theme === 'light' ? styles.wrapper : styles.wrapper + ` ${styles['wrapper-dark']}`}>
            <div className={styles.form__wrapper}>
                <h1 className="text-2xl font-bold">Dodaj ogłoszenie</h1>
                <NewPostForm theme={theme} auth={auth} />
            </div>
        </div>
    );
};

export default NewPost;
