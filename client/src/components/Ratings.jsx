import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);

function formatName(string) {
  const s = string.split('_').join('-');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getRows(ratings) {
  const rows = [];
  if (ratings) {
    const tuples = Object.keys(ratings).map(key => (
      { [key]: ratings[key] }
    ));
    for (let i = 0; i < tuples.length; i += 2) {
      const row = [];
      rows.push(row.concat(tuples[i], tuples[i + 1]));
    }
  }
  return rows;
}

function insertStars(n) {
  const result = [];
  let count = 0;
  while (count < 5) {
    result.push(<FontAwesomeIcon icon="star" />);
    count += 1;
  }
  return result;
}

const Ratings = ({ rating }) => (
  <div className="col">
    {getRows(rating).map(row => (
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              {formatName(Object.keys(row[0])[0])}
            </div>
            <div className="col">
              {insertStars(Object.values(row[0])[0])}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col">
              {formatName(Object.keys(row[1])[0])}
            </div>
            <div className="col">
              {insertStars(Object.values(row[1])[0])}
            </div>
          </div>
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
