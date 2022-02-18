const connection = require('./connection');

async function add([firstname, lastname, email, password]) {
  const query = 'INSERT INTO users(firstName, lastName, email, password) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [firstname, lastname, email, password]);
  
  return ({
    id: result.insertId,
    firstname,
    lastname,
  });
}

module.exports = {
  add
}