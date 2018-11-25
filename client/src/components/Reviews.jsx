import React from "react";
import PropTypes from "prop-types";
import styles from "./Reviews.css";

const Reviews = ({ reviewsData, deletefunc }) => (
  <div>
    {reviewsData.map((review, i) => (
      <div key={i}>
        <div className={styles.review}>
          <div className="row">
            <div className="col-xs-2">
              <img
                alt="user profile pic"
                src={review.image}
                className={styles.avatar}
              />
            </div>
            <div className="col-xs-10">
              <strong id={"reviewauthor" + i}>{review.author}</strong>
              <br />
              {review.date}
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12" id={"reviewbody" + i}>
              {review.body}
            </div>
            <button
              onClick={() => {
                let id = review.id;
                let roomid = review.room_id;
                deletefunc(id, roomid);
              }}
            >
              Delete
            </button>
          </div>
        </div>
        <hr />
      </div>
    ))}
  </div>
);

Reviews.propTypes = {
  reviewsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Reviews;
