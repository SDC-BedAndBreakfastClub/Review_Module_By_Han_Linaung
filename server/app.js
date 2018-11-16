const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const fetchAll = require("./model/index.js");

app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.json());
app.use(cors());

app.get("/api/rooms/:listingId/reviews", (req, res) => {
  const id = req.params.listingId;
  fetchAll("1", (error, data) => {
    if (error) {
      throw error;
    }
    res.json(data);
  });
});
app.post("/api/rooms/:listingId/reviews", (req, res) => {
  const id = req.params.listingId;
  fetchAll(1, (error, data) => {
    if (error) {
      throw error;
    }
    res.json(data);
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
