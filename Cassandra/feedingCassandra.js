const Ratings = require("../server/database/inex.js");
const rating = require("./generateRatings.js");
global.counter = 9203156;
var total = 796844;
const feedingCassandra = async total => {
  if (total) {
    var entree = new Ratings({
      id: counter,
      ratings: rating()
    });
    await entree.save((err, result) => {
      if (err) throw err;
      if (result) {
        counter++;
        feedingCassandra(total - 1);
      }
    });
  } else {
    console.log(counter);
  }
};
feedingCassandra(total);
