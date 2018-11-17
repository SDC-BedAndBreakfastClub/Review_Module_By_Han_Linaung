import React from "react";
import GetRowStars from "./Ratings2.jsx";

function getRows(ratings) {
  var newarray = Object.entries(ratings);
  newarray = newarray
    .filter(e => e[0] != "aggregateRating")
    .filter(e => e[0] != "reviews")
    .filter(e => e[0] != "id")
    .filter(e => e[0] != "name");
  return newarray;
}

const Ratings = props => {
  let count = 0;
  let getrowfunc = getRows(props.rating);
  return getrowfunc.map((e, i) => {
    return (
      <div className="row">
        <GetRowStars key={i} value={e} />
      </div>
    );
  });
};

export default Ratings;

//<div className="col">{insertStars(row[0])}</div>
//<div className="col">{formatName(row[1])}</div>
