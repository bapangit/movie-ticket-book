const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  movieName: String,
  theaterName: String,
});
const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = { Ticket };
