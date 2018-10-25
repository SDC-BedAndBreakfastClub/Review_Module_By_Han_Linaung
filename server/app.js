var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var faker = require('faker');
var mysql = require('mysql');
var con = require('./database');

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.send(seed());
})

var generateReview = function() {
	var review = [];

	const reviewObj = {
		id: faker.random.uuid(),
		listing_id: faker.random.uuid(),
		author: faker.name.findName(),
		user_id: faker.random.uuid(),
		avatar_url: faker.image.avatar(),
		date: faker.date.past(5),
		body: faker.lorem.paragraphs(),
		flagged: faker.random.boolean()
	}

	for (var key in reviewObj) {
		review.push(reviewObj[key]);
	};

	return review;
}


var seed = function() {
	var reviews = [];
	var target = 100;
	while (target > 0) {
		reviews.push(generateReview());
		target--;
	}

	console.log(reviews[0]);
	con.query('INSERT INTO reviews (id, listing_id, author, user_id, avatar_url, date, body, flagged) VALUES ?',
		[reviews], (err, res) => {
			if(err) throw err;

			console.log(res.changedRows);
		});
}


app.listen(3001);