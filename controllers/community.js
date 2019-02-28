const { Community } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("community/new");
  },
  create: function(req, res) {
    Community.create({
      name: req.body.name,
      description: req.body.description,
      users: req.body.users,
      date: Date.now()
    }).then(community => {
      res.redirect(`/community/${community._id}`);
      //res.redirect("/");
    });
  },
  show: function(req, res) {
    Community.findById(req.params.id).then(community => {
      res.render("community/show", community);
    });
  },
  edit: function(req, res) {
    Community.findById(req.params.id).then(community => {
      res.render("community/edit", community);
    });
  },
  update: function(req, res) {
    Community.findOne({
      _id: req.params.id
    }).then(community => {
      community.name = req.body.name;
      community.description = req.body.description;
      community.users = req.body.users;
      community.date = Date.now();
      community.save(err => {
        if (err) return res.status(500).send(err);
        res.redirect(`/community/${community._id}`);
      });
    });
  },
  delete: function(req, res) {
    Community.remove({ _id: req.params.id }).then(community => {
      console.log(community);
      res.redirect("/");
    });
  }
};
