const Community = require("../models/community");

module.exports = {
  new: function(req, res) {
    res.render("community/new");
  },
  create: function(req, res) {
    const { title, description, users, meets } = req.body;
    Community.create({
      name,
      description,
      users,
      meets,
      date: Date.now()
    }).then(community => {
      res.redirect(`/community/${community._id}`);
    });
  },
  show: function(req, res) {
    Community.findById(req.params.id).then(community => {
      res.render("community/show", { community });
    });
  },
  edit: function(req, res) {
    Community.findById(req.params.id).then(community => {
      res.render("community/edit", { community });
    });
  },
  update: function(req, res) {
    const { name, description, users, meets } = req.body;

    Community.findOneAndUpdate(
      req.params.id,
      {
        title,
        description,
        users,
        meets,
        date: Date.now()
      },
      {
        runValidators: true
      }
    )
      .then(community => {
        res.redirect(`/community/${community._id}`);
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
