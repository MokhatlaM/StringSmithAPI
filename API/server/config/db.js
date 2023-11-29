const mongoose = require("mongoose");

const connect = async () => {
  try {
    const STRINGSMITHDB_URI = process.env.DATABASE_URI;
    await mongoose.connect(STRINGSMITHDB_URI, {});
  } catch (error) {
    console.log("connection error", error);
    process.exit(1);
  }
};

module.exports = connect;
