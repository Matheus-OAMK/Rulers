const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const cardRouter = require('./Routes/cardRoutes');

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/catalog', cardRouter);

module.exports = app;
