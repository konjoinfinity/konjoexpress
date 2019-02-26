const express = require("express");
const router = express.Router();
const Community = require("../models/community");

router.use("/", (req, res) => {
  Community.find({})
    .sort({ createdAt: -1 })
    .populate("name")
    .then(communities => {
      res.render("app/index", { communities });
    });
});

router.use("/user", require("./user"));
router.use("/community", require("./community"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
