const dotenv = require('dotenv');
const { Pool } = require('pg');

dotenv.config({ path: './Environment/state.env' });
dotenv.config(
  process.env.NODE_ENV === 'development'
    ? { path: './Environment/.env' }
    : { path: './Environment/production_config.env' }
);

// These modules must be declared after the environment configuration
const { DBconfig } = require('./DBconfig'); // Requires an existing DBconfig.js file, see DBconfig.example
const app = require('./app');

exports.openDb = () => {
  return new Pool(DBconfig);
};

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on a port ${port}...`);
});
