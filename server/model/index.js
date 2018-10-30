const con = require('../database/index.js');

function fetchAll(id, cb) {
  con.query('SELECT ? FROM reviews', [id], (err, res) => {
    if (err) {
      throw err;
    } else {
      cb(err, res);
    }
  });
}

module.exports = fetchAll;
