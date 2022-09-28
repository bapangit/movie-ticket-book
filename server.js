const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
const port = 8080;
DB_URL =
  "mongodb+srv://dbname:dbpassword@cluster0.8att5.mongodb.net/picsdb?retryWrites=true&w=majority";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/", require("./src/movies/movies"));
app.use("/", require("./src/theaters/theater"));
app.use("/", require("./src/ticket/ticket"));

mongoose.connect(DB_URL).then(
  (res) => {
    console.log("DATABASE CONNECTED SUCCESSFULLY");
    //server
    var server = app.listen(port, function () {
      var host = server.address().address;
      var port = server.address().port;

      console.log("Example app listening at http://%s:%s", host, port);
    });
  },
  (err) => {
    console.log(err);
  }
);
