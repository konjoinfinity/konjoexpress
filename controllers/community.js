const { Community } = require("../models/index");
const { User } = require("../models/index");

module.exports = {
  new: function(req, res) {
    res.render("community/new");
  },
  create: function(req, res) {
    Community.create({
      name: req.body.name,
      description: req.body.description,
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
  },
  adduser: function(req, res, next) {
    const authUser = req.user.username;
    console.log(authUser);
    Community.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          users: { authUser } // from your schema, needs to be the Users object ID
        }
      },
      { upsert: true }
    ).then(list => {
      res.redirect(`/community/${community._id}`);
    });
  },
  newMeet: function(req, res) {
    res.render("community/newmeet", { commId: req.params.id });
  },
  createMeet: function(req, res) {
    const createMeet = {
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      time: req.body.time,
      date: req.body.date
    };
    console.log(createMeet);
    Community.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { meets: createMeet } }
    ).then(community => {
      res.redirect(`/community/${community._id}`);
    });
  },
  editMeet: function(req, res) {
    res.render("community/editmeet", { commId: req.params.id });
  }
};
