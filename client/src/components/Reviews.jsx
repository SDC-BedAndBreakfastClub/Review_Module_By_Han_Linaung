import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.css';

const Reviews = ({ reviewsData }) => (
  <div className="container">
    {reviewsData.map(review => (
      <div className="row" key={review.id}>
        <div className="col-xs-12">
          {review.body}
        </div>
      </div>
    ))}
  </div>
);

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Reviews;
