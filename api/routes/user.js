// user router

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/all', userController.user_list)
router.post('/register', userController.make_user)
router.post('/login', userController.check_user)
router.delete('/:id', userController.remove_user)

module.exports = router