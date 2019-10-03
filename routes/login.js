const bcrypt = require("bcryptjs");
const config = require("config");
const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post(
  "/",
  [
    check("email", "Please, write a valid email address").isEmail(),
    check("email", "Wrong email or password").exists(),
    check("password", "Wrong email or password").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    let { email, password } = req.body;

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // See if user exist
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "Wrong email or password" }]
        });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(400).json({
          errors: [{ msg: "Wrong email or password" }]
        });
      }

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
