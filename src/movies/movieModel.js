const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: String,
});
const Movie = mongoose.model("movie", movieSchema);
module.exports = { Movie };
