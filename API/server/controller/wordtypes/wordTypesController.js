const express = require("express");
const Words = require("../../models/schemas");
const asyncHandler = require("express-async-handler");

const getWordTypes = asyncHandler(async (req, res) => {
  try {
    const data = await Words.WordType.find();
    if (!data) {
      return res.status(400).json({ message: "No Word Types Found Bro" });
    }
    res.json(data);
    console.log("Word Types retreived");
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Oops something went wrong. Please try again later");
  }
});

module.exports = { getWordTypes };
