const con = require("../database/index.js");

function fetchAll(id, cb) {
  con.query(`select * from ratings where ratings.id = $1`, [id], (err, res) => {
    if (err) {
      throw err;
    } else {
      var obj = res.rows[0];
      con.query(
        `select * from reviews where reviews.room_id::integer = $1`,
        [id],
        (err, res2) => {
          if (obj && obj.name) obj.reviews = res2.rows;
          if (err) {
            throw err;
          } else {
            cb(err, obj);
          }
        }
      );
    }
  });
}

module.exports = fetchAll;
