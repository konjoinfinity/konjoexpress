const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const User = new Schema({
  name: String,
  username: String,
  password: String,
  communities: String,
  date: Date
});

module.exports = mongoose.model("User", User);
