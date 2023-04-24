const server = require ('../db');
const bcrypt = require('bcrypt');

//This creates a new user
exports.signUp = async (req, res) => {
  const pool = server.openDb();
  console.log(req.body.password);
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
      [req.body.username, hashedPassword]
    );
    res.json({ users: newUser.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
