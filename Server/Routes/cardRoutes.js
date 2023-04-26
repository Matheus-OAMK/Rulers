const express = require('express');
const cardControllers = require('../Controllers/cardControllers');
const authenticateToken = require('../middleware/authorization.js');

const router = express.Router();

router.route('/all-cards').get( cardControllers.getAllCards);
router.route('/game').get(authenticateToken, cardControllers.getThreeCards);
router.route('/game').post(authenticateToken, cardControllers.inserThreeCards);
module.exports = router;
