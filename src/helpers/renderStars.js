import { MdStar, MdStarHalf } from 'react-icons/md';
export const renderStars = (rating, styles) => {
  const numberOfStars = Number.isInteger(rating) ? rating : Math.floor(rating);
  const halfStar = rating - Math.floor(rating) >= 0.75 ? true : false;
  const stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<MdStar />);
  }
  if (halfStar) stars.push(<MdStarHalf />);
  return <span className={styles.rate__stars}>{stars}</span>;
};
