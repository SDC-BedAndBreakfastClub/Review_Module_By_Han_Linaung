const {
  fetchAll,
  postReview,
  deleteReview,
  patchReview
} = require("../model/index.js");
const {
  fetchAll1,
  postReview1,
  deleteReview1,
  patchReview1
} = require("../model/index1.js");
const {
  fetchAll2,
  postReview2,
  deleteReview2,
  patchReview2
} = require("../model/index2.js");
const {
  fetchAll3,
  postReview3,
  deleteReview3,
  patchReview3
} = require("../model/index3.js");

const superfetch = (id, res) => {
  if (id >= 9000000) {
    fetchAll3(id, (error, data) => {
      if (error) {
        throw error;
      } else {
        res.json(data);
      }
    });
  } else if (id >= 6000000) {
    fetchAll2(id, (error, data) => {
      if (error) {
        throw error;
      } else {
        res.json(data);
      }
    });
  } else if (id >= 3000000) {
    fetchAll1(id, (error, data) => {
      if (error) {
        throw error;
      } else {
        res.json(data);
      }
    });
  } else {
    fetchAll(id, (error, data) => {
      if (error) {
        throw error;
      } else {
        res.json(data);
      }
    });
  }
};

const superdelete = (id, res, review) => {
  if (id >= 9000000) {
    deleteReview3(id, review, data => {
      res.json(data);
    });
  } else if (id >= 6000000) {
    deleteReview2(id, review, data => {
      res.json(data);
    });
  } else if (id >= 3000000) {
    deleteReview1(id, review, data => {
      res.json(data);
    });
  } else {
    deleteReview(id, review, data => {
      res.json(data);
    });
  }
};

module.exports = { superfetch, superdelete };
