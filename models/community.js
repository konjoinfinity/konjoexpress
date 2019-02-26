const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

//Have to add [User] and [Meet] in future.
const Community = new Schema({
  name: String,
  description: String,
  users: String,
  meets: Number,
  date: Date
});

module.exports = mongoose.model("Community", Community);
