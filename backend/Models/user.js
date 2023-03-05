const db = require("mongoose");

const userSchema = new db.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

const userModel = db.model("user", userSchema);

module.exports = userModel;
