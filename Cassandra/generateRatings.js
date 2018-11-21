const faker = require("faker");
const generateReview = require("./generateReviews.js");

function generateRating() {
  const ratings = {
    name: faker.name.findName(),
    accuracy: faker.random.number({ min: 1, max: 5 }),
    communication: faker.random.number({ min: 1, max: 5 }),
    cleanliness: faker.random.number({ min: 1, max: 5 }),
    location: faker.random.number({ min: 1, max: 5 }),
    check_in: faker.random.number({ min: 1, max: 5 }),
    value: faker.random.number({ min: 1, max: 5 }),
    reviews: generateReview()
  };
  return ratings;
}

module.exports = generateRating;

// do {
//     i--;
//     let ratings = generateRating(i);
//     ratings = ratings.join(",");
//     ratings += "\n";
//     if (i === 0) {
//       writerating.write(ratings);
//     } else {
//       ok = writerating.write(ratings);
//     }
//   } while (i > 0 && ok);
//   if (i > 0) {
//     writerating.once("drain", writeratingfunc);
//   }
