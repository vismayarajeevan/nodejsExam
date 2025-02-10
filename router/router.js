const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')

const router = new express.Router()

router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.get('/getAllRegisters',jwtMiddleware,userController.getllAllregister)

router.get('/getUserRegister',jwtMiddleware,userController.userDetails)


module.exports = router