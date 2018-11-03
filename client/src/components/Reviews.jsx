import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.css';

const Reviews = ({ reviewsData }) => (
  <div className={styles.review}>
    {reviewsData.map(review => (
      <div key={review.id} className={styles.review}>
        <div className="row">
        <div className="col-xs-2">
          <img alt="user profile pic" src={review.avatar_url} className={styles.avatar} />
        </div>
        <div className="col-xs-10">
          {review.author}
          {review.date}
        </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {review.body}
          </div>
        </div>
      </div>
    ))}
  </div>
);

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Reviews;
