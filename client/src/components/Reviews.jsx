import React from 'react';
import PropTypes from 'prop-types';
import './Reviews.css';

const Reviews = ({ reviewsData }) => (
  <div>
    {reviewsData.map(review => (
      <div className="review" key={review.id}>{review.body}</div>
    ))}
  </div>
);

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default Reviews;
