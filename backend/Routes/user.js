const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const User = require("../Models/user");
const secret = "Contact-Manager";

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> Welcome To Login and Signup API</h1>");
});

app.post("/signup", body("email").isEmail(), async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { username, email, password, conf_password } = req.body;

    const user = await User.findOne({ email });

    if (password != conf_password) {
      return res.status(409).json({
        status: "Failed",
        message: "Passwords did not match",
      });
    }

    if (user) {
      return res.status(409).json({
        status: "Failed",
        message: "User already exists",
      });
    }

    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        return res.status(500).json({
          status: "Failed",
          message: err.message,
        });
      }

      const data = await User.create({
        username,
        email,
        password: hash,
      });

      return res.status(200).json({
        status: "Success",
        message: "User Successfully Registerd",
        data,
      });
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
});

app.post("/login", body("email").isEmail(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        status: "Failed",
        message: "Unnown user/ User is not registered",
      });
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (err) {
        return res.status(500).json({
          status: "Failed",
          message: err.message,
        });
      }
      if (result) {
        const token = jwt.sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
            data: user._id,
          },
          secret
        );

        return res.status(200).json({
          status: "Succces",
          message: "Login successful",
          token,
        });
      } else {
        return res.status(400).json({
          status: "Failed",
          message: "Invalid credentails",
        });
      }
    });
  } catch (e) {
    return res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

app.post("/logout", async (req, res) => {
  //code for handling the logout
});

module.exports = app;
