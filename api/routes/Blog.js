const express = require('express')
const router = express.Router()
const blogController = require('../controllers/blogController')

router.get('/all', blogController.blog_list)
router.post('/create', blogController.make_blog)

module.exports = router