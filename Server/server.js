const dotenv = require('dotenv');
const { Pool } = require('pg');
const fs = require('fs');

dotenv.config({ path: './Environment/state.env' });
dotenv.config(
  process.env.NODE_ENV === 'development'
    ? { path: './Environment/.env' }
    : { path: './Environment/production_config.env' }
);

// This module must be declared after the environment configuration
const app = require('./app');

exports.openDb = () => {
  switch (process.env.DB_LOCATION) {
    case 'local':
      return new Pool({
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
      });

    case 'remote':
      return new Pool({
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        ssl: {
          rejectUnauthorized: true,
          ca: fs
            .readFileSync('/path/to/server-certificates/root.crt')
            .toString(),
          key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
          cert: fs
            .readFileSync('/path/to/client-certificates/postgresql.crt')
            .toString(),
        },
      });
  }
};

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is listening on a port ${port}...`);
});
