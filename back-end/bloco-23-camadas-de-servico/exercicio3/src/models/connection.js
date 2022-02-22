const db = require('mysql2/promise');
require('dotenv').config();

const connection = db.createPool({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: 'cep_lookup',
  port: 3306
})

module.exports = connection;
