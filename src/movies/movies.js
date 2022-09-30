const express = require("express");
const { Movie } = require("./movieModel");
const router = express.Router();

router.post("/add-movie", async (req, res) => {
  try {
    const { name } = req.body;
    if (name) {
      const movie = await new Movie({
        name,
      }).save();
      res.status(200).json({ message: "successful." });
    } else {
      throw new Error("movie name is missing.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed!", message: error.message });
  }
});

module.exports = router;
