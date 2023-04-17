const express = require('express');
const cardControllers = require('../Controllers/cardControllers');

const router = express.Router();

router.route('/').get(cardControllers.getAllCards);

module.exports = router;
