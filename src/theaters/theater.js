const express = require("express");
const { Theater } = require("./theaterModel");
const router = express.Router();

router.post("/add-theater", async (req, res) => {
  try {
    const { name, place } = req.body;
    if (name && place) {
      const theater = await new Theater({
        name,
        place,
      }).save();
      res.status(200).json({ message: "successful." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed!" });
  }
});

router.post("/add-show", async (req, res) => {
  try {
    const { theaterName, showName } = req.body;
    if (theaterName && showName) {
      await Theater.findOneAndUpdate(
        {
          name: theaterName,
        },
        { $push: { shows: showName } }
      );
      res.status(200).json({ message: "Successful." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed!" });
  }
});

module.exports = router;
