// user router

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


// TODO: finish user router
router.get('/all', userController.user_list)
router.post('/create', userController.make_user)

module.exports = router