const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  name: {
    type: String,
    required: true
  },
  fieldNumber: {
    type: Number
  },
  items: [{ heading: String, body: String }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Category = mongoose.model("Category", CategorySchema);
