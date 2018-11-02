import React from 'react';
import PropTypes from 'prop-types';

const Ratings = ({ rating }) => (
  <div>
    {Object.keys(rating).map(category => (
      <div>
        {category}
        <div>
          {rating[category]}
        </div>
      </div>
    ))}
  </div>
);

Ratings.propTypes = {
  rating: PropTypes.object.isRequired,
};

export default Ratings;
