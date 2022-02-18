const connection = require('../connection');

async function getAll() {
  const query = 'SELECT title, author_id FROM books;'
  const [result] = await connection.execute(query);

  return result;
}

async function getByAuthorId(id) {
  const query = 'SELECT title FROM books WHERE author_id = ?;'
  const [result] = await connection.execute(query, [id]);
  
  return result;
}

async function getById(id) {
  const query = 'SELECT title FROM books WHERE id = ?';
  const [result] = await connection.execute(query, [id]);

  return result;
}

module.exports = {
  getAll,
  getByAuthorId,
  getById
};
