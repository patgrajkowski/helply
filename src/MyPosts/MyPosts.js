import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./MyPosts.module.css";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import TutorCard from "../components/TutorCard/TutorCard";
import Button from "../components/Button/Button";

const MyPosts = ({ token, theme }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getPosts = async (accessToken) => {
    try {
      const response = await axios.post(
        `https://helply-backend.herokuapp.com/api/posts/user/me`,
        { accessToken }
      );
      const { data } = response;
      setPosts(data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getPosts(token);
  }, [token]);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        posts.map(({ title, level, userId, _id }) => (
          <div className={styles.post} key={_id}>
            <TutorCard
              alternative
              theme={theme}
              title={title}
              level={level}
              userId={userId}
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
