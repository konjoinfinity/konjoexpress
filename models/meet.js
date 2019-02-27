const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Meet = new Schema({
  name: String,
  description: String,
  location: String,
  time: Time,
  date: Date,
  community: String
});

module.exports = mongoose.model("Meet", Meet);
