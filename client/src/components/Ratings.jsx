import React from 'react';
import PropTypes from 'prop-types';

const Ratings = ({ rating }) => (
  <div>
    {Object.keys(rating).map(category => (
      <div key={category}>
        {category}
        <div>
          {rating[category]}
        </div>
      </div>
    ))}
  </div>
);

Ratings.propTypes = {
  rating: PropTypes.shape({
    accuracy: PropTypes.number,
    communication: PropTypes.number,
    cleanliness: PropTypes.number,
    location: PropTypes.number,
    check_in: PropTypes.number,
    value: PropTypes.number,
  }).isRequired,
};

export default Ratings;
