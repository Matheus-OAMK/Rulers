const server = require('../server');
// const pool = server.openDB()

const queryAll = 'SELECT * FROM card';
const queryThree = 'SELECT * FROM card ORDER BY RANDOM() LIMIT 3';

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
