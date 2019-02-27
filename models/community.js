const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
//const Meet = require("./index");

//Have to add [User] and [Meet] in future.

const Meet = new Schema({
  name: String,
  description: String,
  location: String,
  time: String,
  date: String,
  community: String
});

const Community = new Schema({
  name: String,
  description: String,
  users: String,
  meets: [Meet],
  date: Date
});

// module.exports = mongoose.model("Meet", Meet);
module.exports = Community;
