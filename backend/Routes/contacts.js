const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const contacts = require("../Models/contacts");

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());

app.get("/", (req, res) => {});

module.exports = app;
