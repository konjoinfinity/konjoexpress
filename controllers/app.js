const { Community } = require("../models/index");

module.exports = {
  index: (req, res) => {
    Community.find({})
      .sort({ createdAt: -1 })
      .then(communities => {
        //console.log(communities);
        res.render("index", { communities });
      });
  }
};
