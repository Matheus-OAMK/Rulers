const { Pool } = require('pg');


const openDb = () => {
  const pool = new Pool({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: process.env.NODE_ENV === 'production' ? true : false
  })
  return pool
} 

module.exports = openDb;
