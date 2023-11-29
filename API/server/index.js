require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connect = require("./config/db");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

connect();

mongoose.connection.once("open", () => {
  console.log("connected to String Smith Database");
  app.listen(PORT, () => console.log(`server is running on ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
