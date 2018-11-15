const mysql = require("mysql");
// const configVars = require('../../config.js');

const pool = mysql.createConnection({
  user: "hanlinaung",
  database: "airbnb"
});

// function fetchAll(id, cb) {
//   con.query(
//     "select * from reviews, ratings where reviews.listing_id = ? and ratings.id = reviews.rating_id",
//     [id],
//     (err, res) => {
//       if (err) {
//         throw err;
//       } else {
//         cb(err, res);
//       }
//     }
//   );
// }
// FLUSH TABLES;
// ALTER TABLE `reviews` DISABLE KEYS;
// ALTER TABLE `ratings` DISABLE KEYS;
// LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/reviews/reviews.csv'
// IGNORE INTO TABLE reviews
// FIELDS TERMINATED BY ','
// LINES TERMINATED BY '\n';

// LOAD DATA INFILE '/Users/hanlinaung/Documents/work/airbnb-clone-reviews-module/ratings/ratings.csv'
// IGNORE INTO TABLE ratings
// FIELDS TERMINATED BY ','
// LINES TERMINATED BY '\n';
// ALTER TABLE `reviews` ENABLE KEYS;
// ALTER TABLE `ratings` ENABLE KEYS;

module.exports = pool;
