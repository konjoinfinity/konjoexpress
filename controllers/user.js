const User = require("../models/user");
const Community = require("../models/community");

module.exports = {
  show: (req, res) => {
    User.findOne({ _id: req.params.id }).then(user => {
      res.render("user/show", { user });
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
