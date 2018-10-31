import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.css';

const Reviews = ({ reviewsData }) => (
  <div className={styles.review}>
    {reviewsData.map(review => (
      <div className={styles.review} key={review.id}>{review.body}</div>
    ))}
  </div>
);

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Reviews;
