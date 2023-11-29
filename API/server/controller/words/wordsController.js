const express = require("express");
const Words = require("../../models/schemas");
const asyncHandler = require("express-async-handler");

const getWords = asyncHandler(async (req, res) => {
  try {
    const data = await Words.Word.find();
    if (!data) {
      return res.status(400).json({ message: "No Words found" });
      console.log(data);
    }
    res.json(data);
    console.log("Words retreived");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = { getWords };
