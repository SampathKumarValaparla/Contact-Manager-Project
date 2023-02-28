const db = require("mongoose");

const contactSchema = new db.Schema(
  {
    user: { type: String, required: true },
    name: { type: String, required: true, default: "-" },
    designation: { type: String, required: true, default: "-" },
    company: { type: String, required: true, default: "-" },
    email: { type: String, required: true, default: "-" },
    industry: { type: String, required: true, default: "-" },
    phone: { type: Number, required: true, default: "-" },
    country: { type: String, required: true, default: "-" },
  },
  { timestamps: true }
);

const contactModel = db.model("contact",contactSchema);

module.exports = contactModel;