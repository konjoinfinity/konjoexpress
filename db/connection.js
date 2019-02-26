const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/konjo");
mongoose.Promise = Promise;
module.exports = mongoose;
