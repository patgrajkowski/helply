import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import PostInfo from '../../components/PostInfo/PostInfo';
import UserInfo from '../../components/UserInfo/UserInfo';
import styles from './Post.module.css';

const Post = ({ theme }) => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({
    title: '',
    price: 0,
    time: 0,
    categories: [],
    level: [],
    description: '',
    nickname: '',
    avatar: '',
    email: '',
    score: 0,
    numberOfratings: 0,
  });
  const { id } = useParams();
  const fetchPost = async () => {
    const response = await axios.get(
      `https://helply-backend.herokuapp.com/api/posts/postid/${id}`
    );
    const { data } = response;
    setLoading(false);
    setPost(data);
  };
  useEffect(() => {
    setLoading(true);
    fetchPost();
  }, []);
  return (
    <div
      className={
        theme === 'light'
          ? styles.wrapper
          : styles.wrapper + ` ${styles['wrapper-dark']}`
      }
    >
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className={styles.post__wrapper}>
          <h1>{post.title}</h1>
          <div className={styles.post__details}>
            <PostInfo theme={theme} post={post} />
            <UserInfo
              theme={theme}
              className={styles.post__user}
              user={{
                nickname: post.nickname,
                avatar: post.avatar,
                email: post.email,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
