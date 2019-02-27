const Community = require("../models/community");

module.exports = {
  new: function(req, res) {
    res.render("community/new");
  },
  create: function(req, res) {
    Community.create({
      name: req.body.name,
      description: req.body.description,
      users: req.body.users,
      meets: req.body.meets,
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
    Community.findOneAndUpdate(req.params._id, {
      name: req.body.name,
      description: req.body.description,
      users: req.body.users,
      meets: req.body.meets,
      date: Date.now()
    })
      .then(community => {
        console.log(community._id);
        res.redirect(`/community/${community._id}`);
        //res.redirect("/");
      })
      .catch(err => {
        console.log(err);
      });
  },
  delete: function(req, res) {
    Community.remove({ _id: req.params.id }).then(community => {
      console.log(community);
      res.redirect("/");
    });
  }
};
