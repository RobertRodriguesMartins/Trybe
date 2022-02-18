const driver = require('mysql2/promise');

const connection = driver.createPool({
  host: 'localhost',
  user: 'robert',
  password: 'Joga10cronaldo@',
  database: 'user_model',
  port: 3306
})

module.exports = connection;
