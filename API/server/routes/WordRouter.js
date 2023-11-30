const express = require("express");
const WordRouter = express.Router();
const WordsController = require("../controller/words/wordsController");

WordRouter.get("/", WordsController.getWords);

module.exports = WordRouter;
