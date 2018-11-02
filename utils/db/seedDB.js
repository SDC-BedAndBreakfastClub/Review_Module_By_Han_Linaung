const faker = require('faker');

const db = require('../../server/database');

const listings = [];

function generateReview() {
  let count = 0;
  while (count < 100) {
    listings.push(faker.random.number({ min: 1, max: 100 }));
    count += 1;
  }

  const reviewObj = {
    id: faker.random.uuid(),
    listing_id: listings[faker.random.number(99)],
    rating_id: faker.random.uuid(),
    author: faker.name.findName(),
    user_id: faker.random.uuid(),
    avatar_url: faker.image.avatar(),
    date: faker.date.past(5),
    body: faker.lorem.paragraphs(),
    flagged: faker.random.boolean(),
  };

  return Object.values(reviewObj);
}

function generateRating(reviewId, ratingId) {
  const ratingObj = {
    id: ratingId,
    review_id: reviewId,
    accuracy: faker.random.number({ min: 1, max: 5 }),
    communication: faker.random.number({ min: 1, max: 5 }),
    cleanliness: faker.random.number({ min: 1, max: 5 }),
    location: faker.random.number({ min: 1, max: 5 }),
    check_in: faker.random.number({ min: 1, max: 5 }),
    value: faker.random.number({ min: 1, max: 5 }),
  };

  return Object.values(ratingObj);
}

function seed() {
  const reviews = [];
  const ratings = [];
  let target = 100;
  while (target > 0) {
    const review = generateReview();
    console.log(review);
    reviews.push(review);
    ratings.push(generateRating(review[0], review[2]));
    target -= 1;
  }

  db.query('INSERT INTO reviews (id, listing_id, rating_id, author, user_id, avatar_url, date, body, flagged) VALUES ?',
    [reviews], (err, res) => {
      if (err) throw err;
      console.log(res.affectedRows);
    });

  db.query('INSERT INTO ratings (id, review_id, accuracy, communication, cleanliness, location, check_in, value) VALUES ?',
    [ratings], (err, res) => {
      if (err) throw err;
      console.log(res.affectedRows);
    });
}

seed();
