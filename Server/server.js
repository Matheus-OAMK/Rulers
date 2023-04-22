const dotenv = require('dotenv');

dotenv.config({ path: './Environment/state.env' });
dotenv.config(
  process.env.NODE_ENV === 'development'
    ? { path: './Environment/.env' }
    : { path: './Environment/production_config.env' }
);

// This module must be declared after the environment configuration
const app = require('./app');


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is listening on a port ${port}...`);
});




// const dotenv = require('dotenv');
// const { Pool } = require('pg');
// const fs = require('fs');

// dotenv.config({ path: './Environment/state.env' });  
// dotenv.config(
//   process.env.NODE_ENV === 'development'
//     ? { path: './Environment/.env' }
//     : { path: './Environment/production_config.env' }
// );



// exports.openDb = () => {
//   switch (process.env.DB_LOCATION) {
//     case 'local':
//       return new Pool({
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         port: process.env.DB_PORT,
//       });

//     case 'remote':
//       return new Pool({
//         database: process.env.DB_NAME,
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         port: process.env.DB_PORT,
//         ssl: {
//           rejectUnauthorized: false,
//           ca: fs.readFileSync(`${__dirname}/DB_SSL/root.crt`).toString(),
//           key: fs.readFileSync(`${__dirname}/DB_SSL/server.key`).toString(),
//           cert: fs.readFileSync(`${__dirname}/DB_SSL/server.crt`).toString(),
//         },
//       });
//   }
// };

// if (require.main === module) {
//   const app = require('./app');
//   const port = process.env.PORT || 3001;
//   app.listen(port, () => {
//     console.log(`App is listening on a port ${port}...`);
//   });
// }
