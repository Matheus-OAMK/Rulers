const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cardRouter = require('./Routes/cardRoutes');
const userRouter = require('./Routes/userRoutes');

const app = express();

// comment this out to test on postman
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

// and uncomment this to test on postman (dont forget in usercontroller to comment out sameSite: 'None', secure: true)
// app.use(cors());

app.use(express.json());
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(cookieParser());

app.use('/api/catalog', cardRouter);
app.use('/api/user', userRouter);

// PRODUCTION VERSION
// app.use('/catalog', cardRouter);
// app.use('/user', userRouter);

module.exports = app;
