const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const con = require('./database');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());


app.get('/', (req, res) => {
	console.log('req body is:', req.body);
	res.send(get());
});

var get = function(cb) {
	con.query('SELECT * FROM reviews', (err, res) => {
		if (err) {
			throw err;
		} else {
			console.log('get has been invoked successfully')
			return res;
		}
	});
}


app.listen(3001);