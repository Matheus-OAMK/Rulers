const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const cardRouter = require('./Routes/cardRoutes');
const userRouter = require('./Routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/catalog', cardRouter);
app.use('/api/user', userRouter);

module.exports = app;
