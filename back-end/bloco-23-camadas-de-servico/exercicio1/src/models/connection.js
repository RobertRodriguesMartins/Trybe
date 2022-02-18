const db = require('mysql2/promise');

const connection = db.createPool({
  user: 'robert',
  password: 'Joga10cronaldo@',
  host: 'localhost',
  database: 'model_example'
})

module.exports = connection;
