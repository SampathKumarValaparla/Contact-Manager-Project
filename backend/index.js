const express = require("express");
const cors = require("cors");
const db = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;
const database = process.env.DB;
const userRoute = require("./Routes/user");
const contactRoute = require("./Routes/contacts");

const app = express();
 
app.use(cors());
app.use(express.json());

app.use("/contact", (req, res, next) => {
    next();
});
app.use("/user", userRoute);
app.use("/contact", contactRoute);

db.connect(database, () =>
  console.log("Connected to db")
);
app.listen(port, console.log("Server is up"))