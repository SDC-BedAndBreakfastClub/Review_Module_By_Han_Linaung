const con = require('../database/index.js');

function fetchAll(id, cb) {
  con.query('select * from reviews, ratings where reviews.listing_id = ? and ratings.id = reviews.rating_id', [id], (err, res) => {
    if (err) {
      throw err;
    } else {
      cb(err, res);
    }
  });
}

module.exports = fetchAll;
