const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.get('/all', blogController.blog_list)
router.post('/create', blogController.make_blog)
router.get('/blog/:id', blogController.find_blog)

module.exports = router