const express = require("express");
const router = express.Router();
const { Community } = require("../models/index");
const authenticatedUser = require("../auth/authuser");

router.get("/", authenticatedUser, function(req, res) {
  Community.find({})
    .sort({ priority: "asc" })
    .then(communities => {
      res.render("index", { communities, success: req.flash("success") });
    });
});

router.use(require("./user"));

router.use("/", authenticatedUser, require("./app"));
router.use("/user", authenticatedUser, require("./user"));
router.use("/community", authenticatedUser, require("./community"));
router.use("/meet", authenticatedUser, require("./meet"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
