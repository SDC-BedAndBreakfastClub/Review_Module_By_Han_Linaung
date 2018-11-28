const Ratings = require("../database/inex2.js");

function fetchAll2(id, cb) {
  Ratings.findOne({ id: id }, (err, res) => {
    if (err) {
      throw err;
    } else {
      cb(err, res.ratings);
    }
  });
}

function postReview2(id, data, cb) {
  Ratings.findOne({ id: id }, (err, res) => {
    if (err) {
      throw err;
    } else {
      let obj = res.ratings;
      obj.reviews.push(data);
      let output = new Ratings({ id: Number(id), ratings: obj });
      output.save((err, result) => {
        if (err) throw err;
        cb({ id: Number(id), ratings: obj });
      });
    }
  });
}

function deleteReview2(id, data, cb) {
  Ratings.findOne({ id: id }, (err, res) => {
    if (err) {
      throw err;
    } else {
      let obj = res.ratings;
      obj.reviews = obj.reviews.filter(
        e => e.author !== data.author && e.body !== data.body
      );
      let output = new Ratings({ id: Number(id), ratings: obj });
      output.save((err, result) => {
        if (err) throw err;
        cb({ id: Number(id), ratings: obj });
      });
    }
  });
}
function patchReview2(id, data, cb) {
  Ratings.findOne({ id: id }, (err, res) => {
    if (err) {
      throw err;
    } else {
      let obj = res.ratings;
      obj.reviews = obj.reviews.map(e => {
        if (e.author.toLowerCase() === data.author.toLowerCase()) {
          return data;
        } else {
          return e;
        }
      });
      let output = new Ratings({ id: Number(id), ratings: obj });
      output.save((err, result) => {
        if (err) throw err;
        cb({ id: Number(id), ratings: obj });
      });
    }
  });
}

module.exports = { fetchAll2, postReview2, deleteReview2, patchReview2 };
