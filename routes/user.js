const bcrypt = require("bcryptjs");
const config = require("config");
const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post(
  "/register",
  [
    check("name", "Please, enter you name")
      .not()
      .isEmpty(),
    check("email", "Please, write a valid email address").isEmail(),
    check(
      "password",
      "Please, enter a password with more than 0 characters"
    ).isLength({ min: 1 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let { name, email, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // See if user exist
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          errors: [{ msg: "User with this email address already exists" }]
        });
      }
      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);

      // Save user to db
      user = new User({
        name,
        email,
        password
      });
      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          email: user.email
        }
      };
      jwt.sign(payload, config.get("jwtSecret"), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;
