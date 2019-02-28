const { Meet } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("/meet/new");
  },
  create: function(req, res) {
    Meet.create({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      time: req.body.time,
      date: req.body.date,
      community: req.body.community
    }).then(meet => {
      res.redirect(`/meet/${meet._id}`);
      //res.redirect("/");
    });
  },
  show: function(req, res) {
    Meet.findById(req.params.id).then(meet => {
      res.render("meet/show", meet);
    });
  },
  edit: function(req, res) {
    Meet.findById(req.params.id).then(meet => {
      res.render("meet/edit", meet);
    });
  },
  update: function(req, res) {
    Meet.findOne({
      _id: req.params.id
    }).then(meet => {
      meet.name = req.body.name;
      meet.description = req.body.description;
      meet.location = req.body.location;
      meet.time = req.body.time;
      meet.date = req.body.time;
      meet.community = req.body.community;
      meet.save(err => {
        if (err) return res.status(500).send(err);
        res.redirect(`/meet/${meet._id}`);
      });
    });
  },
  delete: function(req, res) {
    Meet.remove({ _id: req.params.id }).then(meet => {
      console.log(meet);
      res.redirect("/");
    });
  }
};
