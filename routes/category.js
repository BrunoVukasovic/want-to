const express = require("express");
const auth = require("../middleware/auth");
const User = require("../models/User");
const router = express.Router;

router.post("/newCategory", auth, async (res, req) => {
  try {
    const loggedUser = await User.findOne({ email: user.email }).populate(
      "User",
      ["name"]
    );
    res.send(loggedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error while creating new category");
  }
});
