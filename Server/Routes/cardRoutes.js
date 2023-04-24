const express = require('express');
const cardControllers = require('../Controllers/cardControllers');
const authHelper = require('../utils/jwtHelpers');

const router = express.Router();

router.route('/all-cards').get(cardControllers.getAllCards);
router.route('/game').get(authHelper.protect, cardControllers.getThreeCards);

module.exports = router;
