const express = require("express");
const router = express.Router();
const Community = require("../models/community");
const User = require("../models/user");

router.use("/", require("./app"));
router.use("/user", require("./user"));
router.use("/community", require("./community"));
router.use("/meet", require("./meet"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
