const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config({ path: './Environment/state.env' });
dotenv.config(
  process.env.NODE_ENV === 'development'
    ? { path: './Environment/.env' }
    : { path: './Environment/production_config.env' }
);

const app = require('./app');

exports.openDb = () => {
  const pool = new Pool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.SSL,
  });
  return pool;
};

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is listening on a port ${port}...`);
});
