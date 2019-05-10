const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: String,
  url: String,
  createAd: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("PostFile", PostSchema);
