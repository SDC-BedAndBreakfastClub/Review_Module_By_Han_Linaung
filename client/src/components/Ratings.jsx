import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);

function formatName(string) {
  const s = string.replace("_", "-");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getRows(ratings) {
  var newarray = Object.entries(ratings);
  newarray = newarray
    .filter(e => e[0] != "aggregateRating")
    .filter(e => e[0] != "reviews")
    .filter(e => e[0] != "id")
    .filter(e => e[0] != "name");
  return newarray;
}

function insertStars(n) {
  const result = [];
  let count = 0;
  while (count < n) {
    result.push(<FontAwesomeIcon icon="star" />);
    count++;
  }
  return result;
}

const Ratings = props => {
  return (
    <div className="col">
      {getRows(props.rating).map(row => (
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col">{formatName(row[0])}</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">{insertStars(row[1])}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ratings;

//<div className="col">{insertStars(row[0])}</div>
//<div className="col">{formatName(row[1])}</div>
