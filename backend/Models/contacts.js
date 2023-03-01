const db = require("mongoose");

const contactSchema = new db.Schema(
  {
    // user: { type: String, required: true },
    name: { type: String, required: true },
    designation: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    industry: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
  },
  { timestamps: true }
);

const contactModel = db.model("contact",contactSchema);

module.exports = contactModel;