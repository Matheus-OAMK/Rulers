const express = require('express');
const userControllers = require('../Controllers/userControllers');
const authenticateToken = require('../middleware/authorization.js');
const server = require('../db');

const router = express.Router();

router.route('/sign-up').post(userControllers.signUp);

router.route('/login').post(userControllers.login);

router.route('/logout').post(userControllers.logout);

// This route is ONLY for TESTING purposes delete before deployment
router.get('/test', authenticateToken, async (req, res) => {
  const pool = server.openDb();
  try {
    const users = await pool.query('SELECT * FROM users');
    res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
