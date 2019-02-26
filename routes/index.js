const express = require("express");
const router = express.Router();
const Community = require("../models/community");

router.use("/", require("./app"));
//router.use("/user", require("./user"));
//router.use("/community", require("./community"));

router.all("*", (req, res) => {
  res.status(400).send();
});

module.exports = router;
