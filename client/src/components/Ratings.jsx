import React from 'react';
import PropTypes from 'prop-types';

const Ratings = ({ rating }) => (
  <div>
    {Object.keys(rating).map((category, i) => (
      <div key={i}>
        {category}
        <div>
          {rating[category]}
        </div>
      </div>
    ))}
  </div>
);

Ratings.propTypes = {
  rating: PropTypes.shape.isRequired,
};

export default Ratings;
