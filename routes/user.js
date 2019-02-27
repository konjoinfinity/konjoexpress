const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/new", userController.new);
router.post("/", userController.create);
// router.get("/:id", userController.show);
// router.get("/:id/edit", userController.edit);
// router.put("/:id", userController.update);
// router.delete("/:id", userController.delete);

module.exports = router;
