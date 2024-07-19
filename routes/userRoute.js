const express = require('express');
const {loginController, registerController, getAllUsers} = require('../controllers/userController');

//router object
const router = express.Router()

//Routers
router.get('/all-users',getAllUsers);

// POST || LOGIN
router.post('/login', loginController);

//POST || Register
router.post('/register', registerController);

module.exports = router