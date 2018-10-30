const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const fetchAll = require('./model/index.js');

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.json());

app.get('/reviews', function(req, res) {
	fetchAll((error, data) => {
		if (error) {
			console.log(error, 'error fetching from db');
		};

		res.send(data);
})});

app.listen(3001);