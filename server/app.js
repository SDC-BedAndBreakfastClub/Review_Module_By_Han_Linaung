const express = require("express");
const queue = require("express-queue");
var newrelic = require("newrelic");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000;
const {
  fetchAll,
  postReview,
  deleteReview,
  patchReview
} = require("./model/index.js");
const {
  fetchAll1,
  postReview1,
  deleteReview1,
  patchReview1
} = require("./model/index1.js");
const queueMw = queue({ activeLimit: 2, queuedLimit: -1 });

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.locals.newrelic = newrelic;

app.get("/api/rooms/:listingId/reviews", (req, res) => {
  const id = Number(req.params.listingId);
  if (id >= 5000000) {
    fetchAll1(id, (error, data) => {
      if (error) {
        throw error;
      } else {
        res.json(data);
      }
    });
  } else {
    fetchAll(id, (error, data) => {
      if (error) {
        throw error;
      } else {
        res.json(data);
      }
    });
  }
});
app.post("/api/rooms/:listingId/reviews", (req, res) => {
  const id = Number(req.params.listingId);
  let review = req.body;
  postReview(id, review, data => {
    res.json(data);
  });
});
app.patch("/api/rooms/:listingId/reviews", (req, res) => {
  const id = Number(req.params.listingId);
  let review = req.body;
  patchReview(id, review, data => {
    res.json(data);
  });
});
app.delete("/api/rooms/:listingId/reviews", (req, res) => {
  const id = Number(req.params.listingId);
  let review = req.body;
  if (id >= 5000000) {
    deleteReview1(id, review, data => {
      res.json(data);
    });
  } else {
    deleteReview(id, review, data => {
      res.json(data);
    });
  }
});

app.listen(port, () => {
  console.log("we are listening on port: ", port);
});
