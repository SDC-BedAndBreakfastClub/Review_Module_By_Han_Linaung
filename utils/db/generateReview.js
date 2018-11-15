const fs = require("fs");
const faker = require("faker");
const moment = require("moment");

function generateReview(j, numofreviews) {
  let count = 0;
  let reviews = [];
  while (count++ < numofreviews) {
    reviews.push(
      "".concat(
        count,
        ",",
        faker.name.findName(),
        ",",
        faker.image.avatar(),
        ",",
        moment(faker.date.past(10)).format("MMMM YYYY"),
        ",",
        faker.lorem.paragraph(),
        ",",
        faker.random.boolean(),
        ",",
        j
      )
    );
  }
  return reviews;
}
const writereviewfunc = async (f, numDesired, numofreviews) => {
  var writereview = fs.createWriteStream(`reviews/reviews${f}.csv`, {
    flags: "w"
  });
  var j = numDesired;
  do {
    j--;
    let reviews = await generateReview(j, numofreviews);
    reviews = reviews.join("\n");
    reviews += "\n";
    writereview.write(reviews);
  } while (j > 0);
  if (j > 0) {
    writereview.once("drain", writereviewfunc);
  }
};

module.exports = writereviewfunc;
