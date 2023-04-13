import cors from 'cors';
import express from 'express';
import { Pool } from 'pg';

app.use(cors());
const app = express();
const port = 3003;


const openDb = () => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'demogallery',
    password: 'root',
    port: 5435
  })
  return pool
} 

app.get('/', (req, res) => { 
  const pool = openDb()

  pool.query('SELECT * FROM card' , )
});

app.listen(port);

