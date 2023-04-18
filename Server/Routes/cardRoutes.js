const express = require('express');
const cardControllers = require('../Controllers/cardControllers');

const router = express.Router();

router.route('/all-cards').get(cardControllers.getAllCards);

module.exports = router;
