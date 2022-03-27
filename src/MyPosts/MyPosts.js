import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './MyPosts.module.css';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import TutorCard from '../components/TutorCard/TutorCard';
import Button from '../components/Button/Button';

const MyPosts = ({ token: accessToken, theme }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPosts = async (token) => {
    console.log(`TOKEN ${token}`);
    const response = await axios.post(
      `https://helply-backend.herokuapp.com/api/posts/user/me`,
      { accessToken }
    );
    const { data } = response;
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    getPosts(accessToken);
  }, []);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        posts.map(({ title, level, userId, _id }) => (
          <div class={styles.post}>
            <TutorCard
              alternative
              theme={theme}
              title={title}
              level={level}
              userId={userId}
              key={_id}
              postId={_id}
            />
            <Button primary>Usuń ogłoszenie</Button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyPosts;
