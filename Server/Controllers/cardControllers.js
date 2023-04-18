const server = require('../server');
// const pool = server.openDB()

exports.getAllCards = async (req, res) => {
  const pool = server.openDb();

  pool.query('SELECT * FROM card', (error, result) => {
    if (error) {
      res.statusMessage = 'Something went wrong with the DB. Try again later.';
      res.status(500).json({ error: error.message });
      return;
    }
    res.status(200).json(result.rows);
  });
};
