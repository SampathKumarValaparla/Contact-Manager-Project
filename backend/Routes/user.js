const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const user = require("../Models/user");

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());

app.get("/", (req, res) => {
    
});

module.exports = app;