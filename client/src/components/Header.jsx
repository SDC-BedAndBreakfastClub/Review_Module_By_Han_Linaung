import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

const Header = ({ numReviews, numStars }) => (
  <div>
    {numReviews} Reviews
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <FontAwesomeIcon icon="star" />
    <input type="text" placeholder="Search reviews" name="search" />
  </div>
);

Header.propTypes = {
  numReviews: PropTypes.number.isRequired,
};

export default Header;
