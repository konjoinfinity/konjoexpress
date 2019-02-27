const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Meet = new Schema({
  name: String,
  description: String,
  location: String,
  time: String,
  date: String,
  community: String
});

module.exports = Meet;
