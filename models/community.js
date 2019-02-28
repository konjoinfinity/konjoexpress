const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const User = require("./index");

//Have to add [User] and [Meet] in future.

const Meet = new Schema({
  name: String,
  description: String,
  location: String,
  time: String,
  date: String
});

const Community = new Schema({
  name: String,
  description: String,
  users: [User],
  meets: [Meet],
  date: Date
});

// module.exports = mongoose.model("Meet", Meet);
module.exports = Community;
