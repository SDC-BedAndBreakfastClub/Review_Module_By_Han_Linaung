import React from "react";
import moment from "moment";

const review = ({ sendReview }) => {
  let thiscontainer = {
    display: "flex"
  };
  let thislabels = {
    display: "flex",
    alignSelf: "center",
    paddingLeft: "20px"
  };
  let thisbutton = {
    display: "flex",
    alignSelf: "center",
    marginLeft: "20px"
  };
  let textareastyle = {
    resize: "none",
    display: "flex",
    verticalAlight: "middle"
  };
  return (
    <div style={thiscontainer}>
      <label style={thislabels}>Author:</label>
      <input type="text" style={thislabels} id="authorname" />
      <label style={thislabels}>Review:</label>
      <textarea
        rows="3"
        cols="50"
        maxLength="200"
        style={textareastyle}
        id="reviewbody"
      />
      <button
        onClick={() =>
          sendReview({
            author: document.getElementById("authorname").value,
            body: document.getElementById("reviewbody").value,
            image:
              "https://cdn0.iconfinder.com/data/icons/picons-social/57/68-airbnb-2-128.png",
            date: moment(new Date()).format("MMMM YYYY")
          })
        }
        style={thisbutton}
      >
        Submit
      </button>
    </div>
  );
};

export default review;
