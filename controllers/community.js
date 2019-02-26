const Community = require("../models/community");

module.exports = {
  new: function(req, res) {
    res.render("community/new");
  },
  create: function(req, res) {
    const { title, description } = req.body;
    Community.create({
      name,
      description,
      date: Date.now()
    }).then(community => {
      res.redirect(`/community/${community._id}`);
    });
  },
  show: function(req, res) {
    Community.findById(req.params.id).then(community => {
      res.render("community/show", { community });
    });
  }
};
