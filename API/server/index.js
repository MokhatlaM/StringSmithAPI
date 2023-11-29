require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const connect = require("./config/db");
const WordRouter = require("./routes/WordRouter");
const WordTypeRouter = require("./routes/WordTypeRouter");
const { Word, WordType } = require("./models/schemas");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/api/Words", WordRouter);
app.use("/api/WordTypes", WordTypeRouter);

// app.get("/api/wordtypes", async (req, res) => {
//   try {
//     const data = await WordType.find();
//     if (!data) {
//       return res.status(400).json({ message: "No Word Types Found" });
//     }
//     res.json(data);
//     console.log("Word Types retreived");
//     console.log(data);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//     console.log("Oops....");
//   }
// });

connect();

mongoose.connection.once("open", () => {
  console.log("connected to String Smith Database");
  app.listen(PORT, () => console.log(`server is running on ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
