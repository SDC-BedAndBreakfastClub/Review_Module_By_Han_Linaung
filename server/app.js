const express = require("express");
var queue = require("express-queue");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const fetchAll = require("./model/index.js");
const queueMw = queue({ activeLimit: 2, queuedLimit: -1 });

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.json());
app.use(cors());

app.use(queueMw);

app.get("/api/rooms/:listingId/reviews", (req, res) => {
  const prequery = new Date();
  const id = req.params.listingId;
  fetchAll(1, (error, data) => {
    if (error) {
      throw error;
    }
    const postquery = new Date();
    console.log(`query time: ${(postquery - prequery) / 1000}`);
    res.json(data);
  });
});
app.post("/api/rooms/:listingId/reviews", (req, res) => {
  const id = req.params.listingId;
  fetchAll(1, (error, data) => {
    if (error) {
      throw error;
    } else {
      res.json(data);
    }
  });
});
app.patch("/api/rooms/:listingId/reviews", (req, res) => {
  const id = req.params.listingId;
  fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    }
    res.send(data);
  });
});
app.delete("/api/rooms/:listingId/reviews", (req, res) => {
  const id = req.params.listingId;
  fetchAll(id, (error, data) => {
    if (error) {
      throw error;
    }
    res.json(data);
  });
});

app.listen(3001);
