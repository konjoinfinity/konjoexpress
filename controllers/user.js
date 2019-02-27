const passport = require("passport");
const { User } = require("../models/index");

module.exports = {
  getSignup: function(req, res) {
    res.render("user/signup", { error: req.flash("error") });
  },
  postSignup: function(req, res) {
    const { username, password } = req.body;
    User.register(new User({ username }), password)
      .then(user => {
        const authenticate = passport.authenticate("local");
        authenticate(req, res, function() {
          req.flash("success", "You created an account!");
          res.redirect("/");
        });
      })
      .catch(err => {
        req.flash("error", err.message);
        res.redirect("/signup");
      });
  },
  getLogin: function(req, res) {
    res.render("user/login", {
      error: req.flash("error"),
      info: req.flash("info")
    });
  },
  postLogin: function(req, res, next) {
    const authenticate = passport.authenticate("local", function(
      err,
      user,
      info
    ) {
      if (err || !user) {
        req.flash("error", info.message);
        res.redirect("/login");
      }
      req.logIn(user, function(err) {
        if (err) {
          req.flash("error", err.message);
          return res.redirect("/login");
        }
        req.flash("success", "You logged in");
        return res.redirect("/");
      });
    });
    authenticate(req, res, next);
  },
  getLogout: function(req, res) {
    req.logout();
    res.redirect("/");
  }
};
