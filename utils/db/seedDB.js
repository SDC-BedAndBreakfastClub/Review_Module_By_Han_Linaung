const faker = require('faker');

const db = require('../../server/database');

const listings = [];

function generateReview() {
  let count = 0;
  while (count < 4) {
    listings.push(faker.random.uuid());
    count += 1;
  }

  const reviewObj = {
    id: faker.random.uuid(),
    listing_id: listings[faker.random.number(3)],
    author: faker.name.findName(),
    user_id: faker.random.uuid(),
    avatar_url: faker.image.avatar(),
    date: faker.date.past(5),
    body: faker.lorem.paragraphs(),
    flagged: faker.random.boolean(),
  };

  return Object.values(reviewObj);
}

function seed() {
  const reviews = [];
  let target = 100;
  while (target > 0) {
    reviews.push(generateReview());
    target -= 1;
  }

  db.query('INSERT INTO reviews (id, listing_id, author, user_id, avatar_url, date, body, flagged) VALUES ?',
    [reviews], (err, res) => {
      if (err) throw err;
      console.log(res.affectedRows);
    });
}

seed();
