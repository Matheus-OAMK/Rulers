const express = require('express');
const userControllers = require('../Controllers/userControllers');
const authenticateToken = require('../middleware/authorization.js');
const server = require('../db');

const router = express.Router();

router.get('/checkauth', userControllers.checkAuth)

router.route('/sign-up').post(userControllers.signUp);

router.route('/login').post(userControllers.login);

router.route('/logout').post(userControllers.logout);



module.exports = router;
