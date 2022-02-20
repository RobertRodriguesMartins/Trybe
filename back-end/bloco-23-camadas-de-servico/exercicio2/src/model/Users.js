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

async function getAll() {
  const query = 'SELECT firstName, lastName FROM users';
  const [result] = await connection.execute(query);

  return result;
}


module.exports = {
  add,
  getAll
}