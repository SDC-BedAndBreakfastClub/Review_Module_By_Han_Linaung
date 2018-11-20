const con = require("../database/index.js");

function fetchAll(id, cb) {
  con.execute(`select * from airbnb.ratings where id = 1`, (err, res) => {
    if (err) {
      throw err;
    } else {
      var obj = res.rows[0];
      con.execute(
        `select * from airbnb.reviews where id = 1`,
        { prepared: true },
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
