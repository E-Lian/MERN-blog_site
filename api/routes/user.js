// user router

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


// TODO: finish user router
router.get('/all', userController.user_list)
router.post('/register', userController.make_user) // register
router.post('/login', userController.check_user) // login
router.delete('/:id', userController.remove_user)

module.exports = router