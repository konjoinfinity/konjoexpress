const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

module.exports = {
  Meet: mongoose.model("Meet", require("./meet")),
  Community: mongoose.model("Community", require("./community")),
  User: mongoose.model("User", require("./user"))
};
