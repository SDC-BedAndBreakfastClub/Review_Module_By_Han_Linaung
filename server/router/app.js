const express = require("express");
var newrelic = require("newrelic");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// const queueMw = queue({ activeLimit: 2, queuedLimit: -1 });

app.use(express.static("./client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.use(cors());
app.use(require("express-redis")());
app.locals.newrelic = newrelic;

module.exports = app;
