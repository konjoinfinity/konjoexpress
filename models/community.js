const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Community = new Schema({
  name: String,
  description: String,
  users: [User],
  meets: [Meet],
  date: Date
});

module.exports = Community;

module.exports = mongoose.model("Community", Community);
