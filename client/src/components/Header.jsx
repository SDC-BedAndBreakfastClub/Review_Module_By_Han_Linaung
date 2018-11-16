import React from "react";
import PropTypes from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.css";

library.add(faStar);

function addStars(overallRating) {
  const result = [];
  for (let i = 0; i < overallRating; i++) {
    result.push(<FontAwesomeIcon icon="star" />);
  }
  return result;
}

const Header = ({ numReviews, overallRating }) => (
  <div className="row">
    <div className="col-md-6">
      <h2>
        {numReviews} Reviews {addStars(overallRating)}
      </h2>
    </div>
    <div className="col-md-3 offset-md-3">
      <h2>
        <input
          type="text"
          placeholder="Search reviews"
          name="search"
          className={styles.search}
        />
      </h2>
    </div>
  </div>
);

Header.propTypes = {
  numReviews: PropTypes.number.isRequired
};

export default Header;
