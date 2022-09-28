const mongoose = require("mongoose");

const theaterSchema = mongoose.Schema({
  name: String,
  place: String,
  shows: [String],
});
const Theater = mongoose.model("theater", theaterSchema);
module.exports = { Theater };
