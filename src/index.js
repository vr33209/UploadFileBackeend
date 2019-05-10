require("dotenv").config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

/**
 * Database
 */

mongoose.connect(
  "mongodb+srv://uploadFiles:uploadFiles@cluster0-cfxs0.mongodb.net/test",
  {
    useNewUrlParser: true
  }
);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(require("./routes"));

app.listen(process.env.PORT || 3000);
