import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function formatName(string) {
  const s = string.replace("_", "-");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function insertStars(n) {
  const result = [];
  let count = 0;
  while (count < n) {
    result.push(<FontAwesomeIcon icon="star" key={count} />);
    count++;
  }
  return result;
}
const GetRowStars = props => {
  return (
    <div className="column">
      <div>{formatName(props.value[0])}</div>
      <div>{insertStars(props.value[1])}</div>
    </div>
  );
};

export default GetRowStars;
