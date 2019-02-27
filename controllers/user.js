const { User } = require("../models/index");
const { Community } = require("../models/index");

module.exports = {
  show: function(req, res) {
    User.findById(req.params.id).then(user => {
      res.render("user/show", user);
    });
  },
  new: (req, res) => {
    res.render("user/new");
  },
  create: (req, res) => {
    User.create({
      email: req.body.email,
      password: req.body.password
    }).then(user => {
      res.redirect(`/user/${user._id}`);
    });
  }
};
