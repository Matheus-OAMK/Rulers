const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const cardRouter = require('./Routes/cardRoutes');

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log('Hello from middleware');
  next();
});

// app.get('/', (req, res) => {
//   // const pool = openDb();
//   // // TEST THE FUNCTION TO ADD CARDS
//   // pool.query('SELECT * FROM card', (error, result) => {
//   //   if (error) {
//   //     res.statusMessage = 'Something went wrong with the DB. Try again later.';
//   //     res.status(500).json({ error: error.message });
//   //     return;
//   //   }
//   //   res.status(200).json(result.rows);
//   // });
//   res.status(200).json({ status: 'success' });
// });

app.use('/api/catalog', cardRouter);

module.exports = app;
