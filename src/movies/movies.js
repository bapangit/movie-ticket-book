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
    }
  } catch (error) {
    res.status(500).json({ error: "Failed!" });
  }
});

module.exports = router;
