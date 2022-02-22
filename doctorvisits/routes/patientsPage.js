const express = require("express");
const router = express.Router();
const patientsPageController = require("../controllers/patientsPage");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/:id", ensureAuth, patientsPageController.getPatientsPage);

router.put("/likePost/:id", ensureAuth, patientsPageController.likePost)

router.put("/dislikePost/:id", patientsPageController.dislikePost)

router.put("/comment/:id", patientsPageController.comment)

module.exports = router;