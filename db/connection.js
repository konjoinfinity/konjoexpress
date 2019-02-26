const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/konjo", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
