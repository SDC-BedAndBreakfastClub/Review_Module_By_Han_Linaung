const con = require('../database/index.js');

let fetchAll = function(cb) {
	con.query('SELECT * FROM reviews', (err, res) => {
		if (err) {
			console.log('err!!');
			throw err;
		} else {
			console.log('get has been invoked successfully');
			cb(err, res);
		}
	});
};

module.exports = fetchAll;
