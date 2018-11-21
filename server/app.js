const express = require("express");
const queue = require("express-queue");
var newrelic = require("newrelic");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const {
  fetchAll,
  postReview,
  deleteReview,
  patchReview
} = require("./model/index.js");
const queueMw = queue({ activeLimit: 2, queuedLimit: -1 });

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.locals.newrelic = newrelic;

app.use(queueMw);

app.get("/api/rooms/:listingId/reviews", (req, res) => {
  const prequery = new Date();
  const id = Number(req.params.listingId);
  fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    }
    const postquery = new Date();
    console.log(`query time: ${(postquery - prequery) / 1000}`);
    res.json(data);
  });
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
  deleteReview(id, review, data => {
    res.json(data);
  });
});

app.listen(3001);
