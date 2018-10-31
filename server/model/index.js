const con = require('../database/index.js');

function fetchAll(id, cb) {
  con.query('SELECT * FROM reviews WHERE listing_id=?', [id], (err, res) => {
    if (err) {
      throw err;
    } else {
    	console.log('res is: ', res.length);
      cb(err, res);
    }
  });
}

module.exports = fetchAll;
