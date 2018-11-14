const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/test",
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
});

var RoomSchema = new mongoose.Schema({
  name: String,
  accuracy: Number,
  communication: Number,
  cleanliness: Number,
  location: Number,
  check_in: Number,
  value: Number,
  reviews: Array
});
var Room = mongoose.model("Room", RoomSchema, "Room");
module.exports = Room;
