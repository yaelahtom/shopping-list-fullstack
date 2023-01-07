const dotenv = require("dotenv");
dotenv.config();

const express = require('express');
const mongoose = require("mongoose");
const app = express()
const PORT = 6969
app.listen(PORT, console.log("server started on http://localhost:" + PORT))

// mongodb connection
const database = process.env.MONGO_URI
mongoose.connect(database, { useUnifiedTopology: true, useNewUrlParser: true }, mongoose.set('strictQuery', false))
  .then(() => console.log("database successfully connected.."))
  .catch(err => console.log(err))
