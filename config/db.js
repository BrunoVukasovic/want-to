const config = require("config");
const db = config.get("mongoURI");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongoose.connect returns a promise
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected...");
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
