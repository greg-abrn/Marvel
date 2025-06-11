const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());

axios.get(
  "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=process.env.MARVEL_API_KEY"
);

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
