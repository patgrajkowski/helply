import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import TutorCard from '../TutorCard/TutorCard';
import styles from './LatestSection.module.css';

const LatestSection = ({ theme }) => {
  const [latestPosts, setLatestPosts] = useState(['post', 'post']);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const onClickHandler = (id) => {
    navigate(`/posts/${id}`);
  };
  const getLatestPosts = async () => {
    const response = await axios.get('http://localhost:3002/api/posts?limit=5');
    const { data } = response;
    setLatestPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getLatestPosts();
  }, []);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        latestPosts.map(({ title, level, userId, _id }) => (
          <TutorCard
            theme={theme}
            title={title}
            level={level}
            userId={userId}
            key={_id}
            postId={_id}
          />
        ))
      )}
    </div>
  );
};

export default LatestSection;
