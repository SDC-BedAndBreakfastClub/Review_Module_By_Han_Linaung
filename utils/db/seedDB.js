const db = require('../../server/database');

const faker = require('faker');

var generateReview = function() {

	const reviewObj = {
		id: faker.random.uuid(),
		listing_id: faker.random.uuid(),
		author: faker.name.findName(),
		user_id: faker.random.uuid(),
		avatar_url: faker.image.avatar(),
		date: faker.date.past(5),
		body: faker.lorem.paragraphs(),
		flagged: faker.random.boolean()
	};

	return Object.values(reviewObj);
}


var seed = function() {
	let reviews = [];
	let target = 100;
	while (target > 0) {
		reviews.push(generateReview());
		target--;
	}

	db.query('INSERT INTO reviews (id, listing_id, author, user_id, avatar_url, date, body, flagged) VALUES ?',
		[reviews], (err, res) => {
			if(err) throw err;

			console.log(res.affectedRows);
		});
};

seed();