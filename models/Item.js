const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  // Mongoose docs for schema validation: https://mongoosejs.com/docs/validation.html

  name: {
    type: String,
    required: [true, "Name for item must be provided."],
    trim: true,
    // maxLength: [50, "Name of item can not be more than 50 characters."],
    // minLength: 2,
    // match: /[\s\S]*/,
    default: "name",
  },
});

module.exports = mongoose.model("Item", ItemSchema);
