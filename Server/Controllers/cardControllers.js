const server = require('../db');
// const pool = server.openDB()

const queryAll = 'SELECT * FROM card';
const queryThree = 'SELECT * FROM card ORDER BY RANDOM() LIMIT 3';
const queryThreeInsert =
  'INSERT INTO card_owner (user_id, card_id) VALUES ($1, $2)';

exports.getAllCards = async (req, res) => {
  const pool = server.openDb();

  pool.query(queryAll, (error, result) => {
    if (error) {
      res.statusMessage = 'Something went wrong with the DB. Try again later.';
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json(result.rows);
  });
};

exports.getThreeCards = async (req, res) => {
  const pool = server.openDb();

  pool.query(queryThree, (error, result) => {
    if (error) {
      res.statusMessage = 'Something went wrong with the DB. Try again later.';
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json(result.rows);
  });
};

exports.inserThreeCards = async (req, res) => {
  const pool = server.openDb();

  try {
    await pool.query(queryThreeInsert, [req.user.id, req.body.id]);
    res.status(200).json({ message: 'Card added to user' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
