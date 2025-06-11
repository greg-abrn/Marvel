const express = require("express");
const cors = require("cors");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "dblidb6s7",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json("Bienvenue sur l'API de Marvel");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.get("/comics", (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
