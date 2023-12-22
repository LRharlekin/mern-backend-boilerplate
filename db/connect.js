const mongoose = require("mongoose");

// return Promise of db connection
const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
