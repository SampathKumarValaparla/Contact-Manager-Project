const express = require("express");
const cors = require("cors");
const db = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const database = process.env.DB;
const userRoute = require("./Routes/user");
const contactRoute = require("./Routes/contacts");
const user = require("./Models/user");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/contact", (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, async (err, decoded) => {
      if (err) {
        console.log(err);

        return res.status(409).json({
          status: "Failed",
          message: "Invalid Token",
        });
      }
      const loggedinuser = await user.find({ _id: decoded.data });
      req.user = loggedinuser[0];
      next();
    });
  } else {
    console.log("User not Authenticated");
    res.status(403).json({
      status: "Failed",
      message: "User Not Authenticated",
    });
  }
});

app.use("/user", userRoute);
app.use("/contact", contactRoute);

db.connect(database, () => console.log("Connected to db"));
app.listen(port, console.log("Server is up"));
