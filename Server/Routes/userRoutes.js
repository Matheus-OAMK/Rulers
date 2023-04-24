const express = require('express');
const userControllers = require('../Controllers/userControllers');

const router = express.Router();

router.route('/sign-up').post(userControllers.signUp);

module.exports = router;
