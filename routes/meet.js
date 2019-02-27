const express = require("express");
const router = express.Router();
const meetController = require("../controllers/community");

router.get("/new", meetController.new);
router.post("/", meetController.create);
router.get("/:id", meetController.show);
router.get("/:id/edit", meetController.edit);
router.put("/:id", meetController.update);
router.delete("/:id", meetController.delete);

module.exports = router;
