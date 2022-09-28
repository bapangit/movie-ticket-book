const express = require("express");
const { Movie } = require("../movies/movieModel");
const { Theater } = require("../theaters/theaterModel");
const { Ticket } = require("./ticketModel");
const router = express.Router();

router.post("/add-ticket", async (req, res) => {
  try {
    const { movieName, theaterName } = req.body;
    if (movieName && theaterName) {
      const ticket = await new Ticket({
        movieName,
        theaterName,
      }).save();
      res.status(200).json({ message: "successful." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed!" });
  }
});

router.get("/movie-list", async (req, res) => {
  try {
    const { searchKeyword } = req.query;

    var result = await Movie.find({
      $or: [{ name: { $regex: searchKeyword } }],
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed!" });
  }
});

router.get("/theater-list", async (req, res) => {
  try {
    const { searchKeyword } = req.query;

    var result = await Theater.find({
      $or: [{ place: { $regex: searchKeyword } }],
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Failed!" });
  }
});

module.exports = router;
