const mongoose = require("mongoose");

const WordTypesSchema = new mongoose.Schema({
  id: Number,
  WordType: String,
});

const WordsSchema = new mongoose.Schema({
  id: Number,
  Word: String,
  WordTypeId: Number,
});

const GeneratedHistorySchema = new mongoose.Schema({
  id: Number,
  Sentence: String,
});

const WordType = mongoose.model("WordType", WordsSchema);
const Word = mongoose.model("Word", WordTypesSchema);
const GeneratedHistory = mongoose.model(
  "GeneratedHistory",
  GeneratedHistorySchema
);

module.exports = {
  WordType,
  Word,
  GeneratedHistory,
};
