const switcher = require("./switcher.js");

const superfetch = (id, res) => {
  var fetch = switcher(id);
  fetch.fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.json(data);
    }
  });
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
