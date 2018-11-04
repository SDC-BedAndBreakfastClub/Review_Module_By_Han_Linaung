import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const Header = ({ numReviews, overallRating }) => (
  <div>
    <h2>{numReviews} Reviews</h2>
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    {overallRating}
    <input type="text" placeholder="Search reviews" name="search" />
  </div>
);

Header.propTypes = {
  numReviews: PropTypes.number.isRequired,
};

export default Header;
