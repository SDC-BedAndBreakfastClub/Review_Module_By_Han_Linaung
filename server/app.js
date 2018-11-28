import { superfetch, superdelete } from "./controller/superfetch1.js";
import App from "../client/src/components/App.jsx";
import React from "react";
import ReactDOM from "react-dom";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";
import app from "./router/app.js";

app.get("/", (req, res, next) => {
  const data = {
    accuracy: 4,
    check_in: 4,
    cleanliness: 5,
    communication: 1,
    currid: 1,
    location: 1,
    name: "Carroll Hegmann",
    reviews: [
      {
        id: 1,
        author: "Blake Forrest",
        image:
          "https://s3.amazonaws.com/uifaces/faces/twitter/chrisvanderkooi/128.jpg",
        date: "November 2018",
        body: "I like this room. It was great!",
        room_id: 1
      }
    ],
    value: 5,
    aggregateRating: 3
  };
  const markup = renderToString(
    <StaticRouter location={req.url} context={data}>
      <App />
    </StaticRouter>
  );
  const template = `<!DOCTYPE html>
<html>
  <head>
    <title>AirBnB</title>
    <link
      href="https://fonts.googleapis.com/css?family=Krub:400,700"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="bootstrap-grid.css" />
    <link rel="stylesheet" href="index.css" />
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.3.1.js"
      integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
      crossorigin="anonymous"
    ></script>
    <script>window.__INITIAL_DATA__ = ${data}</script>
    <script type="text/javascript" src="bundle.js"></script>
  </head>
  <body>
    <div id="reviews">${markup}</div>
  </body>
</html>`;
  res.send(template).catch(next);
});
app.get("/api/rooms/:listingId/reviews", (req, res) => {
  const id = Number(req.params.listingId);
  superfetch(id, res);
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
  superdelete(id, res, review);
});

app.listen(3000, () => {
  console.log("we are listening on port: ", 3000);
});
