import axios from "axios";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router";
import SearchBar from "../../components/Fields/SearchBar/SearchBar";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import TutorCard from "../../components/TutorCard/TutorCard";
import styles from "./Category.module.css";

const Category = ({ theme }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const isMobile = useMediaQuery({ query: `(max-width: 675px)` });
  const getPosts = async () => {
    const response = await axios.get(
      `https://helply-backend.herokuapp.com/api/posts/all?limit=5&category=${category}`
    );
    const { data } = response;
    setPosts(data);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    getPosts();
  }, []);
  return (
    <div
      className={
        theme === "light"
          ? `${styles.wrapper}`
          : `${styles.wrapper} ${styles["wrapper-dark"]}`
      }
    >
      <SearchBar
        theme={theme}
        placeholder={
          isMobile
            ? "Potrzebujesz pomocy?"
            : "Z jakiej dziedziny potrzebujesz pomocy?"
        }
      />
      <div className={styles.posts}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          posts.map(({ title, level, userId, _id }) => (
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
    </div>
  );
};

export default Category;
