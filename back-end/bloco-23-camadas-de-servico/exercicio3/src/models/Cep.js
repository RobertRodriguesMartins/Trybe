const connection = require('./connection');

async function getAll() {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps';
  const [result] = await connection.execute(query);

  return result;
}

async function getAddress(cep) {
  const query = 'SELECT logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const [result] = await connection.execute(query, [cep]);

  return result;
}

async function addAddress(values) {
  try {
    const query = 'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
    const [result] = await connection.execute(query, [...values]);
  
    return ({
      insertId: result.insertId,
      cep: values.cep,
      logradouro: values.logradouro,
    })
  } catch (err) {
    throw ({
      error: {
        code: err.code,
        message: err.message
      }
    });
  }
}

module.exports = {
  getAll,
  getAddress,
  addAddress
}