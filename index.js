const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

const app = express();
app.use(cors());
app.use(express.json());

axios
  .get(
    "https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=process.env.MARVEL_API_KEY"
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(process.env.PORT, () => {
  console.log("Server has started");
});
