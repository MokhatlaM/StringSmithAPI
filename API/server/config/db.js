const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {});
  } catch (error) {
    console.log("connection error", error);
  }
};

module.exports = connect;
