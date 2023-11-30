const express = require("express");
const Words = require("../../models/schemas");
const asyncHandler = require("express-async-handler");

const getWords = asyncHandler(async (req, res) => {
  try {
    // const wordTypeId = req.params.wordTypeId;
    // const data = await Words.Word.find({ WordTypeId: wordTypeId });
    const data = await Words.Word.find();
    if (!data || data.length === 0) {
      return res.status(400).json({ message: "No Words found" });
    }
    res.json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = { getWords };
