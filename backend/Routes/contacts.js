const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const contacts = require("../Models/contacts");

const app = express();

app.use(cors());
app.use(fileupload());
app.use(express.json());

app.get("/", async (req, res) => {
  const page = req.query.page;
  const total = req.query.total;
  // const alldata = await contacts.find({user:req.user._id}).sort({ name: 1 });
  // const data = await contacts
  //   .find({ user: req.user._id })
  //   .sort({ name: 1 })
  //   .skip((page - 1) * total)
  //   .limit(total);
  const data = await contacts
    .find()
    .sort({ name: 1 })
    .skip((page - 1) * total)
    .limit(total);
  const alldata = await contacts.find().sort({ name: 1 });

  res.status(200).json({
    alldata: alldata,
    data: data,
  });
});

app.get("/finduser", async (req, res) => {
  res.status(200).json({
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  });
});

app.post("/addcontact", async (req, res) => {
  let data = JSON.parse(req.body.data);
  await data.forEach(async (e) => {
    if (e.name && e.phone) {
      await contacts.create({
        //   user: req.user.id,
        name: e.name,
        designation: e.designation || "-",
        company: e.company || "-",
        email: e.email || "-",
        industry: e.industry || "-",
        phone: e.phone,
        country: e.country || "-",
      });
    }
  });
  return res.status(200).json({ status: "success" });
});

app.post("/deletcontact", async (req, res) => {
  const data = JSON.parse(req.body.data);
  await data.forEach(async (e) => {
    await contacts.deleteOne({ _id: e });
  });
  return res.status(200).json({ status: "success" });
});

app.post("/deleteonecontact", async (req, res) => {
  await contacts.deleteOne({ _id: req.body.data });
  return res.status(200).json({ status: "success" });
});
module.exports = app;
