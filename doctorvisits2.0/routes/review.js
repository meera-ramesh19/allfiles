const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/review')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const multer = require('multer')
const upload = multer({ dest: "public/uploads/" })
const { storage } = require("../middleware/multer");

router.get('/', ensureAuth, reviewController.getFeed)

router.put('/like/:id', reviewController.likePost)

router.put('/dislike/:id', reviewController.dislikePost)

module.exports = router