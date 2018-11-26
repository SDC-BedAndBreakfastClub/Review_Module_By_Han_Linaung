const Ratings = require("./inex.js");

const ratings = {
  name: "Homes",
  accuracy: 3,
  communication: 4,
  cleanliness: 5,
  location: 1,
  check_in: 2,
  value: 3,
  reviews: [
    {
      author: "Jordan",
      image:
        "https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg",
      date: "October 2018",
      body: "lsdkflal",
      flagged: "false"
    }
  ]
};

var newrating = new Ratings({ id: 1, ratings: ratings });
newrating.save((err, result) => {
  if (err) console.error(err);
  console.log("saved");
});
