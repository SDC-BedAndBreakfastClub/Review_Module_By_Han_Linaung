const Ratings = require("../database/inex.js");

function fetchAll(id, cb) {
  Ratings.findOne({ id: id }, (err, res) => {
    if (err) {
      throw err;
    } else {
      cb(err, res.ratings);
    }
  });
}

module.exports = fetchAll;
