const {
  fetchAll,
  postReview,
  deleteReview,
  patchReview
} = require("../model/index.js");

const superfetch = (id, res) => {
  fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.json(data);
    }
  });
};

const superdelete = (id, res, review) => {
  deleteReview(id, review, data => {
    res.json(data);
  });
};

module.exports = { superfetch, superdelete };
