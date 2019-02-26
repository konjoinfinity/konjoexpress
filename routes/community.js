const express = require("express");
const router = express.Router();
const communityController = require("../controllers/community");

router.get("/new", communityController.new);
router.post("/", communityController.create);
router.get("/:id", communityController.show);
router.get("/:id/edit", communityController.edit);
router.put("/:id", communityController.update);
router.delete("/:id", communityController.delete);

module.exports = router;
