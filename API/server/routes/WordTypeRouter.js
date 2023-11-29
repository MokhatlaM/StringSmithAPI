const express = require("express");
const WordTypeRouter = express.Router();
const WordTypesController = require("../controller/wordtypes/wordTypesController");

WordTypeRouter.route("/").get(WordTypesController.getWordTypes);

module.exports = WordTypeRouter;
